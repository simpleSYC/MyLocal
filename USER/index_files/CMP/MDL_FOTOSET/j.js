Vue.component("mdl_fotoset", {
  template: `  <div class="modal-content" style="margin-bottom: 200px;">
    <span class="close" onclick="this.parentElement.parentElement.style='display:none;';RESETparaMETARS();">&times;</span>
	
   <br><input type="file" value="upload" id="fileButonJ_FOTO" style="width: auto;float: right;position: inherit;">
    <img class="View_FOTO"><i id="noFOTO" class='far fa-image blankIMG'></i>
    
    <button type="button"  onclick="FotoSETbtn();RESETparaMETARS();" style="width: auto;margin: auto;position: inherit;display: grid;float: left;" >update</button>
    <button type="button"  onclick="FOTO_model.style='display:none;';RESETparaMETARS();" style="width: auto;margin: auto;position: inherit;display: grid;float: right;background:#c4572c;" >cancel</button>

  </div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "mdl_fotoset",
  },
});

var signqqee = new Vue({
  el: "#MDL_FOTOSET",
  store: store,
});
