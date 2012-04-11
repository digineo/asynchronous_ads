var _qm = {};
_qm.callback = function(){
  this.setSite("example.com");
  this.defineSlot("leaderboard", 'ad1');
  this.defineSlot("wide_skyscraper", 'ad2');
  this.defineSlot("content_ad", 'ad3');
  this.enable();
};

(function() {
  var script   = document.createElement('script');
  script.type  = 'text/javascript';
  script.async = true;
  script.src   = 'qm_static.js'
  
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
})();
