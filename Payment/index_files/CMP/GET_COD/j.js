Vue.component("get_cod", {
  template: `<div>
<p style="text-align: center">
  see before and after changes <br />
  <button class="w3-button w3-light-grey w3-padding" id="OPEN_MDL_CODE_GETER">
    <i class="fa fa-code"></i> Get html embade icon code</button>
</p>

<div id="ICONcode" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding: 32px">
    <div class="w3-container w3-white">
      <p id="X_MDL_CODE_GETER">X</p>
      <button id="COPY_BTNOT">copy HTML code <i class="fa fa-copy"></i></button>
      <input id="New_ACC_NAME" placeholder="Your_Username" type="text">
      <br>
      <textarea id="cod_button" rows="4" disabled="true"></textarea>
      
    </div>
  </div>
</div>


</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "get_cod",
  },
});

var signqqee = new Vue({
  el: "#GET_COD",
  store: store,
});
