Vue.component("dash_board", {
  template: `<div>
    <button type="button" id="Previev_btn" >prewie</button>
    <button type="button"  id="ProfileEdit_btn">profil update</button>
    
        <label id="SWITCH_GG"  class="switch">
          <p style="margin-top: -40px;display: block ruby;">ACC Status</p>
          <input id="main_SW" type="checkbox" >
          <span class="slider round"></span>
          <p id="STatusTxT"></p>
        </label>
    
    <button type="button" id="LOG_OUT" >Logout</button>
</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "dash_board",
  },
});

var signqqee = new Vue({
  el: "#DASH_BOARD",
  store: store,
});
