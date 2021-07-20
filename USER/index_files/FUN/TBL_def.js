var TBL = document.getElementById("TBLA");

var MAPS_F = document.getElementById("GG_MPS");

var TBL_J_ROW = document.getElementsByClassName("TBL_ROW");
var J_LENTA = document.getElementsByClassName("well lnta");
var PLUS_MINUS = document.getElementsByClassName("plus_minus");
var TITLE_J_FIXED = document.getElementsByClassName("j_title");
var JOB_STNGS = document.getElementsByClassName("JB_STNGS");
var J_TITLE = document.getElementsByClassName("well J_TITLE");
var J_STATUS = document.getElementsByClassName("btn btn-success J_status");
var J_IMG_SELECTION = document.getElementsByClassName("btn btn-success J_img_S");
var J_IMG_HRF = document.getElementsByClassName("J_img_Lnk");
var J_DESC = document.getElementsByClassName("J_description");

var J_D_LSNT = document.getElementsByClassName("well J_DESC");

///////////////
var SW_MPE = document.getElementById("MPE_SHOW");
$(SW_MPE).click(function () {
  let P = "ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/G_MAPS/STATUS";
  DB.child(P).set(SW_MPE.checked);

  let W = "MYLOCAL/" + userNAME + "/PROFIL/G_MAPS/STATUS";
  DB.child(W).set(SW_MPE.checked);
});

var stara_JOBfoto = [];

function Onadeni_Evnts(a) {
  for (i = 0; i < 5; i++) {
    let I = parseInt(i);
    let P = "ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/JBS/" + i;
    let WB = "MYLOCAL/" + userNAME + "/JBS/" + i;
    J_TITLE[i].onchange = function () {
      let x = this.children[0].value;
      DB.child(P + "/TITLE").set(x);
      DB.child(WB + "/TITLE").set(x);
      FixNaslov(this, I);
    };
    J_STATUS[i].onchange = function () {
      let x = txt2val(this);
      DB.child(P + "/JBS_STATUS").set(x);
      DB.child(WB + "/JBS_STATUS").set(x);
    };
    J_D_LSNT[i].onchange = function () {
      let x = this.children[0].value;
      DB.child(P + "/JBS_DESC").set(x);
      DB.child(WB + "/JBS_DESC").set(x);
    };

    //    stara_JOBfoto[i] = a[i]["IMG"]["F_ime"];
    //    J_IMG_HRF[i].src = a[i]["IMG"]["F_src"];

    ////ponovo updejtce

    if (a[i]["IMG"]["F_src"]) {
      stara_JOBfoto[i] = a[i]["IMG"]["F_ime"];
      J_IMG_HRF[i].src = a[i]["IMG"]["F_src"];
    } else {
      stara_JOBfoto[i] = "defalka fotkaa";
      J_IMG_HRF[i].src = "./index_files/MEDIA/defalka.png";
    }

    /// daaa se razonadeee
  }
}

function txt2val(a) {
  let y = a.innerHTML;
  let V = null;
  if (y == "Ready for action") {
    V = 1;
  } else if (y == "(deactive)") {
    V = 0;
  } else if (y == "Action in process") {
    V = 2;
  }
  return V;
}

function FixNaslov(a, b) {
  TITLE_J_FIXED[b].innerText = " " + a.children[0].value;
}

var O_J_0 = [];
var O_J_1 = [];
var O_J_2 = [];
var O_J_3 = [];

DoIt_preset(document.getElementsByClassName("J_DESC"));
function DoIt_preset(a) {
  for (i = 0; i < a.length; i++) {
    let I = i;
    a[i].children[0].style = "white-space:unset;display: ruby-base;";

    O_J_0[i] = J_TITLE[i];
    O_J_1[i] = J_STATUS[i];
    O_J_2[i] = J_IMG_SELECTION[i];
    O_J_3[i] = a[i];

    J_IMG_SELECTION[i].onchange = function () {
      UPD_FTJ_MDL(I);
    };
  }
}

for (i in O_J_0) {
  $(O_J_0[i]).inlineEdit({ type: "text" });

  $(O_J_1[i]).inlineEdit({
    type: "select",
    data: {
      default: "Ready for action",
      "opt-1": "(deactive)",
      "opt-2": "Action in process",
    },
  });

  $(O_J_2[i]).inlineEdit({
    type: "select",
    data: {
      default: " ",
      "opt-1": "ADD foto",
      "opt-2": "(default foto)",
    },
  });
  $(O_J_3[i]).inlineEdit({ type: "textarea" });
}
