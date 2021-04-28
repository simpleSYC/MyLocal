Vue.component("mapskooo", {
    template: `<div>
    <div style="margin: auto;margin-top: -20px;z-index: 3;position: relative;width: 100%;display: inline-block;">
    <span>google maps url of your local area<br><span>https://www.google.com/maps/</span>
    <input id="GGL_URL" style="border-radius: 5px;z-index:3;" type="text" placeholder="adreasse , region , city.." onchange="UPD_novTxT();"></span>
    <br>
    <button id="Updejt_Maps" style="width: auto;float: left;top: -68px;position: relative;">Updejt</button>
    
    
    
    <label class="switch" onclick="" style="float: right;top: -57px;">
      <span style="position: relative;top: -30px;">Actived</span><input id="MPE_SHOW" type="checkbox">
      <span class="slider round"></span></label>
    
    </div>
    <br>
    
    <div id="MPS_HRE" style="position: relative;top: -54px;z-index:2;"> </div>

    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"mapskooo"
}
})   

var signqqee = new Vue({
el:"#Mapsko",
store: store
})
