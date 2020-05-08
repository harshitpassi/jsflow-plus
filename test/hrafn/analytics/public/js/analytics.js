analytics = {};

analytics.create = function(client) {
  analytics.client = client;
}

analytics.send = function(data) {
  var username = document.getElementsByName('username')[0].value;
  var url = 'http://localhost:4888/tracker/' + encodeURIComponent(analytics.client + ':' + data + ':' + username);

  var img = new Image(1,1);
  img.src = url;
}

analytics.event = function(id,type) {
  var el = document.getElementById(id);
  if (el) {
    el['on'+type] = function() { analytics.send('login'); }
  }
}
