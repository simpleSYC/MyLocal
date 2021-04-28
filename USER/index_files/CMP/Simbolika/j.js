Vue.component("simbolica", {
    template: `<div><h3 id="user_para" style="text-align: center; margin: auto;position: relative;margin-top: 70px;margin-bottom: -57px;"></h3>
    <div id="Pro_Stalaza">
      <img id="PROFI_pic">
     
     <a class="DLR_STALAZA"> </a>
     
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
