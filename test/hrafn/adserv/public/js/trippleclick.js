trippleclick = {};

trippleclick.load_ad = function load_ad(target, client) {

  var container = document.getElementById(target);
  if (!container) { 
    return;
  }

  var req = new XMLHttpRequest();

  req.onload = function() {
    container.innerHTML = req.responseText;
  }

  req.open('GET', 'http://localhost:4999/serve?client=' + client);
  req.send();
}
