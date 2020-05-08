var express    = require('express')
  , cors       = require('cors');

var app = express();
app.set('port', (process.env.PORT || 4888));

app.use(cors());


var events = [];

app.get('/tracker/:data', function(req, res) {

  var data = req.params.data;
  
  if (!events[data]) {
    events[data] = 0;
  }

  events[data]++;

  console.log('[' + data + '] ' + events[data]);
  res.end();

});

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


