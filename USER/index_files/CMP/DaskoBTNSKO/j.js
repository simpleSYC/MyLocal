Vue.component("dasko_btns", {
    template: `<div>
    <button type="button"  onclick="STATS(SW);PREview();" style="position: absolute;top: 0px;left: 0px;width: auto;margin: 20px;">prewie</button>
    <button type="button"  onclick="MDL_PROFIL();" style="position: absolute;top: 0px;right: 0px;width: auto;margin: 20px;">profil update</button>
    
    
    <div id="SWITCH_GG">
    <span>Wiget Status </span><br>
    <label  class="switch" onclick="Aktiv(this,0);" >
      <input id="main_SW" type="checkbox" >
      <span class="slider round"></span>
    </label>
    <br>
    <span id="STatusTxT" style="color:green;">Activ</span></div>
    
    <button id="LOG_OUT" type="button"  onclick="STATS(SW);logout();">Logout</button>
    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"dasko_btns"
}
})   

var signqqee = new Vue({
el:"#DaskoBTNSKO",
store: store
})
