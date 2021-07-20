Vue.component("mdl_job_prewiev", {
  template: `<div class="modal-content">
    <span class="x_mdl_close">&times;</span>
    <span id="title_of_job"></span>
    <img id="mdl_BIG_foto"/>
    <hr>
    <span id="desc_of_job"></span>
  
  
</div>`,
});

var store = "";
var storeqqee = new Vuex.Store({
  state: {
    view: "mdl_job_prewiev",
  },
});

var signqqee = new Vue({
  el: "#MDL_JOB_PREWIEV",
  store: store,
});

const MDL = {
  DIV: document.getElementById("MDL_JOB_PREWIEV"),
  x_close: document.getElementsByClassName("x_mdl_close")[0],
  Title: document.getElementById("title_of_job"),
  FOTO_BIG: document.getElementById("mdl_BIG_foto"),
  Desc: document.getElementById("desc_of_job"),

  Show_time: function (a) {
    $(this.DIV).slideToggle("slow");
    if (a) {
      let O = a.parentElement.parentElement.parentElement;
      let o = {
        title: O.getElementsByClassName("j_title")[0].innerText,
        fto: O.getElementsByClassName("J_img_Lnk")[0].src,
        desc: O.getElementsByClassName("J_description")[0].innerText, ///???
      };
      this.Title.innerText = o["title"];
      this.FOTO_BIG.src = o["fto"];
      this.Desc.innerText = o["desc"];
    }
  },
};
let MDL_BTN = document.getElementsByClassName("BlogSpot");
for (i = 0; i < MDL_BTN.length; i++) {
  MDL_BTN[i].onclick = function () {
    MDL.Show_time(this);
  };
}

MDL["x_close"].onclick = function () {
  MDL.Show_time(false);
};
