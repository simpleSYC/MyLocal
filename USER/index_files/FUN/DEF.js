var SRC_BTN = document.getElementById("serch_btn");
var INPUT_CHEK = document.getElementById("cheak_user");
var SIMBOL_BTN = document.getElementsByClassName("simbol_btn");
var TBL_SMBLS = document.getElementById("rez");

var MYL_BEZ = document.getElementById("bez_stalaza");
/// ova gornot  e za taa gllavnata stranica na mylocal landuing pageto
const EL_ = {
  PRO_STATUS: document.getElementById("PRO_STATUS"),
  DASH_BOARD: {
    DIV: document.getElementById("DASH_BOARD"),
    BTN_PREVIEW: document.getElementById("Previev_btn"),
    BTN_LOGOUT: document.getElementById("LOG_OUT"),
    BTN_PROFIL: document.getElementById("ProfileEdit_btn"),
    ACC_DIV_SWITCH: document.getElementById("SWITCH_GG"),
    ACC_SWITCH: document.getElementById("main_SW"),
    ACC_STATUS: document.getElementById("STatusTxT"),
  },
  X_MDL: document.getElementsByClassName("close"),

  MDL_PROFIL: {
    DIV: document.getElementById("MDL_PROFIL"),
    INPUT_STATUS: document.getElementById("PROFIL_status"),
    prasalnik: document.getElementsByClassName("INFO_prazallnik"),
    IMG_mdl_profil: document.getElementById("Profil_PIC_in_mdl"),
    USER_EMAL: document.getElementById("usr_email"),
    OPEN_PEYMENT_PAGE: document.getElementById("BuyDolarce"),
    CEK_BOX_CONTACTO: document.getElementById("cx_box_mylinks"),
    INPUT_CONTACTO: document.getElementById("INPUT_TXT_CONTACTO"),
    INFO_PRASALNIK: document.getElementById("info_star"),
  },

  MDL_FOTOSET: {
    DIV: document.getElementById("MDL_FOTOSET"),
  },

  SIMBOLIKA: {
    DIV: document.getElementById("SIMBOLIKA"),
    USER_NAME_txt: document.getElementById("User_name"),
    BIG_PORFIL_PIC: document.getElementById("PROFI_pic"),
    DOLARITE_SIMBOLI: document.getElementById("DLR_STALAZA"),
  },
};

for (p = 0; p < EL_["MDL_PROFIL"]["prasalnik"].length; p++) {
  let n = parseInt(p);
  EL_["MDL_PROFIL"]["prasalnik"][n].onclick = function () {
    STAR_info(n);
  };
}

for (x = 0; x < EL_["X_MDL"].length; x++) {
  EL_["X_MDL"][x].onclick = function () {
    this.parentElement.parentElement.style.display = "none";
  };
}

EL_["DASH_BOARD"]["BTN_PREVIEW"].onclick = function () {
  window.open(MYLOCAL_URL + "/" + userNAME);
};

$(EL_["DASH_BOARD"]["BTN_PROFIL"]).click(function () {
  MDL_PROFIL();
});

$(EL_["DASH_BOARD"]["BTN_LOGOUT"]).click(function () {
  F_.logout();
});

$(EL_["DASH_BOARD"]["ACC_DIV_SWITCH"]).click(function () {
  let P = "ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/STATUS/AKTIV";
  DB.child(P).set(EL_["DASH_BOARD"]["ACC_SWITCH"].checked);

  let W = "MYLOCAL/" + userNAME + "/PROFIL/STATUS/AKTIV";
  DB.child(W).set(EL_["DASH_BOARD"]["ACC_SWITCH"].checked);

  let setings = { color: "red", txt: "Deactived" };
  if (EL_["DASH_BOARD"]["ACC_SWITCH"].checked) {
    setings["color"] = "green";
    setings["txt"] = "Actived";
  }
  EL_["DASH_BOARD"]["ACC_STATUS"].style.color = setings["color"];
  EL_["DASH_BOARD"]["ACC_STATUS"].innerText = setings["txt"];
});

EL_["MDL_PROFIL"]["OPEN_PEYMENT_PAGE"].onclick = function () {
  window.open(MYLOCAL_URL + "/Payment/#" + userNAME);
};
