/**
 * Diese Datei führt den Callback aus und lädt anschließend ein weiteres Javascript,
 * um die Werbemittel einzufügen.
 * 
 * Diese Datei ändert sich normalerweise nicht und sollte daher mit Expire-Header
 * ausgeliefert werden, um Caching zu ermöglichen.
 */

(function(){
  
  _qm = {
    
    callback: _qm.callback,

    version: '1.0.0',
    
    slots: {},
    
    setSite: function(site){
      this.site = site;
    },
    
    // Definiert ein verwendetes Werbemittel
    // Erwartet den Namen des Slots und die ID des <div>-Containers
    defineSlot: function(name, id){
      this.slots[name] = id;
    },
    
    // Zeigt ein Werbemittel an
    displaySlot: function(name, html){
      var e = document.getElementById(this.slots[name]);
      if(e)
        e.innerHTML = html;
    },
    
    // Lädt die zuvor definierten Werbemittel
    enable: function(){
      var slotNames = [];
      for(var i in this.slots){
        slotNames.push(i)
      }
      
      var script   = document.createElement('script');
      script.type  = 'text/javascript';
      script.async = true;
      script.src   = 'qm_slots.js?site=' + this.site + '&version=' + this.version + '&slots=' + slotNames.join(",")
      
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
    },
    
    runCallback: function(){
      _qm.callback.apply(this);
    }
    
  }
  
  _qm.runCallback();
  
})()
