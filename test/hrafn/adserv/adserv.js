var express    = require('express')
  , cors       = require('cors')
  , fs         = require('fs');


// load ads 
var datadir = 'ads'

var files = fs.readdirSync(datadir);
var ads   = [];

files.forEach(function (file) {
  var html = fs.readFileSync(datadir + '/' + file, { encoding : 'utf8' });
  ads.push(html);
});

// ad ctrl

var nextad = 0;

function cyclead() {
  nextad = (nextad + 1) % ads.length; 
}

// app

var app = express();
app.set('port', (process.env.PORT || 4999));

app.use(cors());

app.get('/serve', function(req, res) {

  cyclead();
  console.log('served ' + nextad);
  res.send(ads[nextad]);

});

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


