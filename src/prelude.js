

(function () {

  exports.inherits = inherits;
  exports.copy     = copy;
  
  function inherits(tgt,src) {
    for (var x in src.prototype) {
      if (src.prototype.hasOwnProperty(x) &&
        !tgt.prototype.hasOwnProperty(x)) {
        tgt.prototype[x] = src.prototype[x];
      }
    }
  }

  function copy(src,tgt) {
    for (var x in src) {
      if (src.hasOwnProperty(x)) {
        tgt[x] = src[x];
      }
    }
  }

})();
