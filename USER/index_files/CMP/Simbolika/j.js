Vue.component("simbolica", {
    template: `<div><h3 id="user_para" style="text-align: center; margin: auto;position: relative;margin-top: 70px;margin-bottom: -57px;"></h3>
    <div id="Pro_Stalaza">
      <img id="PROFI_pic">
     
     <a class="DLR_STALAZA"> 
      <i class='fa fa-dollar DOLAR'></i>
      <i class='fa fa-dollar DOLAR'></i>
      <i class='fa fa-dollar DOLAR'></i>
      <span id="zprka" style='font-size:10px;color:#fff0;'>_</span>
      <i class='fa fa-dollar DOLAR'></i>
      <i class='fa fa-dollar DOLAR'></i>
      <i class='fa fa-dollar DOLAR'></i>
      <div style="color:green;font-weight: bold;"><span id="Zapirkata" style='font-size: 30px;'>,</span>$$</div>
     </a>
     
     </div>

    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"simbolica"
}
})   

var signqqee = new Vue({
el:"#Simbolika",
store: store
})
