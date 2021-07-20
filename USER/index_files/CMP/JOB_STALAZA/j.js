Vue.component("job_stalaza", {
  template: `<div class="TBL_ROW">
<button class="well lnta">
<i class="plus_minus">+</i><span class="j_title">sdas ada job</span></button>

<div class="JB_STNGS">

<span class="Label_btnce">Title</span>
<div  class="well J_TITLE">
<button class="btn btn-success"  style="width: 100%;">job title</button></div>

<div style="width:99.5%;display:block ruby;">

<div style="width:50%"><span class="Label_btnce">Status</span>
<div class="well J_STATUS"><button class="btn btn-success J_status"></button></div></div>

<div style="width:50%"><span class="Label_btnce">Image</span>
<div  class="well J_IMG_STATUS"><button class="btn btn-success J_img_S"></button></div></div>

</div>

<span class="Chk_prewiev">* chek prewiev desing</span><span class="dscp_naslov">Description</span> 
<div class="well J_DESC"> 
<button class="btn btn-success">
<img class="J_img_Lnk"><xmp class="J_description"> </xmp></button></div>

 </div>
</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "job_tbl_rows",
  },
});

var signqqee = new Vue({
  el: "#JOB_STALAZA",
  store: store,
});

let O = document.getElementById("JOB_STALAZA");
for (i = 0; i < 4; i++) {
  cl(O);
}
function cl(O) {
  var itm = O.children[0];
  var cln = itm.cloneNode(true);
  O.appendChild(cln);
}
