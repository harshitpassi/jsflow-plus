var express  = require('express')
  , session  = require('express-session')
  , methodoverride = require('method-override')
  , handlebars = require('express-handlebars')
  , bodyparser = require('body-parser')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


// user database

var users = [ 
  { id : 1, email : 'd.hedin@gmail.com', name : 'Daniel Hedin', password : 'jsflow' }
];

var usermap   = [];
var useridmap = [];

for (var i = 0, len = users.length; i < len; i++) {
  var user = users[i];
  usermap[user.email] = user;
  useridmap[user.id]  = user; 
}

function getUserByEmail(email) {
  return usermap[email];
}

function getUserById(id) {
 return useridmap[id];
}

// passport stuff

passport.serializeUser(function (user, done) {
  done(null, user.id);
}); 

passport.deserializeUser(function (id, done) {
  var user = getUserById(id);
  if (!user) { 
    done(new Error('no such id: ' + id));
    return;
  } 

  done(null, user);
});

passport.use(new LocalStrategy(
  function(email, password, done) {

    var user = getUserByEmail(email);
  
    if (user && user.password == password) {
      done(null, user);
      return;
    }

    done(null, false, { message : 'login failed' });
  })
);

// helper functions

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }

  res.redirect('/');

}

// post database

var posts =
  [ { title   : 'Do you know about JSFlow?',
      author  : 'Daniel Hedin',
      content : 
'JSFlow is a security-enhanced JavaScript interpreter for fine-grained tracking of information flow. JSFLow\n' +
'      <ul>\n' +
'        <li> supports full non-strict ECMA-262 v.5 <a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf">(pdf)</a> including the standard API,\n' +
'        <li> provides dynamic (runtime) tracking and verification of security labels,\n' +
'        <li> is written in JavaScript, which enables flexibility in the deployment of JSFlow.\n' +
'      </ul>\n' +
'      Pop over to <a href="http://www.jsflow.net">www.jsflow.net</a> for a test drive now!\n' +
'      </p>\n',
      public : true
    }
  ]

// the app

var app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 5000));

app.use(bodyparser.urlencoded({ extended : false }));
app.use(bodyparser.json());
app.use(session({ secret : 'coins2015',
                  resave : false,
                  saveUninitialized : false 
                }));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req, res) {

  if (req.isAuthenticated()) {
    res.render('home', {
      loggedin : req.isAuthenticated(),
      name :  req.user.name,
      posts : posts
      
    });

  } else {
    res.render('public-home', {
      loggedin : req.isAuthenticated(),
      name : 'Anonymous',
      posts : posts
    });
  }

});


app.post('/login',
  passport.authenticate('local', {
    successRedirect : '/',
    failureRedirect : '/'
  })
);

app.post('/logout', function (req,res) {
  req.logout();
  res.redirect('/');
});
    
app.post('/post', function (req,res) {
  posts.unshift({
    title   : decodeURIComponent(req.body.title),
    author  : decodeURIComponent(req.body.name),
    content : decodeURIComponent(req.body.text),
    public : false
  });

  res.redirect('/');
});


app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


