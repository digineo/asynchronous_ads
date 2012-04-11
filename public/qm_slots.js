/**
 * Diese Datei enthält den Code, um die übergebenen Werbeblöcke einzufügen.
 * 
 * Sie muss für jeden Request dynamisch generiert werden.
 */

(function(){
  
  
  // Beispiel-Code für den Aufruf von /qm_ads.js?site=example.com&slots=leaderboard,wide_skyscraper,content_ad
  
  _qm.displaySlot("leaderboard", '<a href="#">Textwerbung</a>');
  _qm.displaySlot("wide_skyscraper", '<a target="_blank" href="http://www.tsa.gov"><img width="160" border="0" height="600" alt="" src="http://content.travimp.com/images/sf_wide_skyscraper_160x600.jpg"></a>');
  _qm.displaySlot("content_ad", '<iframe width="300" height="250" src="http://www.youtube.com/embed/XXn11XBPOCE" frameborder="0" allowfullscreen></iframe>');
  
})();
