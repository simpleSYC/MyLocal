var SW = document.getElementById("main_SW");
var TST1;
var SIFRA, userNAME, W;
function KOJeOVOJ(a) {
  SIFRA = a.uid;
  let USERdef = "ID/" + SIFRA;
  DB.child(USERdef)
    .once("value")
    .then(function (snapshot) {
      let C = snapshot.val();
      userNAME = C["AKK"];
      W = C[userNAME]["MYLOCAL"];
      puniLokalno(W);
      EL_["MDL_PROFIL"]["USER_EMAL"].innerHTML = "( " + C["email"] + ".com )";
      Puni_JBS(W["JBS"]);

      EL_["SIMBOLIKA"]["USER_NAME_txt"].innerHTML = userNAME;
    });
}

function CHK_vrf(Status_ver) {
  var user = firebase.auth().currentUser;
  var BTN_ver = document.getElementById("re_snd_email");
  BTN_ver.style = "width: auto;";
  if (Status_ver) {
    // da se trgne resend button
    BTN_ver.style.display = "none";
    BTN_ver.onclick = function () {};
    BTN_ver.innerHTML = "";
  } else {
    BTN_ver.style.display = "inline-block";
    BTN_ver.onclick = function () {
      SND_vrf();
      BTN_ver.innerHTML = "email alredy send ..";
      BTN_ver.onclick = function () {};
    };
    BTN_ver.innerHTML = "verification email send ";
  }

  if (user.emailVerified) {
    ////////////// da se stavi od maceto ova !!
    if (!Status_ver) {
      DB.child("ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/REG/veri").set(true);
    }
  }
}

// Get the modal
var modal = document.getElementById("J_modalot");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

var DROPdwnBTN = document.getElementById("MENIlink");
var LOPCI = document.getElementById("Lopci");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    LOPCI.style = "display: none;";
  }

  if (event.target == modal_PROFIL) {
    modal_PROFIL.style.display = "none";
  }
};
////////////////////////// modelskoto kopce

function DROPdwnbtn() {
  if (LOPCI.style.display == "block") {
    LOPCI.style = "display: none;";
  } else {
    LOPCI.style = "display:block;";
  }
}

function STATS(A) {
  a = A.checked;
  if (a) {
    if (W["PROFIL"]["STATUS"]["AKTIV"] != true) {
      W["PROFIL"]["STATUS"]["AKTIV"] = true;
      DB.child("ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/STATUS/AKTIV").set(true);
      DB.child("MYLOCAL/" + userNAME + "/PROFIL/STATUS/AKTIV").set(true);
    }
  } else {
    if (W["PROFIL"]["STATUS"]["AKTIV"] != false) {
      W["PROFIL"]["STATUS"]["AKTIV"] = false;
      DB.child("ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/STATUS/AKTIV").set(false);
      DB.child("MYLOCAL/" + userNAME + "/PROFIL/STATUS/AKTIV").set(false);
    }
  }
}

function GETaccSTATUS(a) {
  if (a != SW.checked) {
    SW.click();
  }
}

function Puni_JBS(a) {
  let O_JBS = a; //ovaj e taj jbs objekto
  for (i = 0; i < 5; i++) {
    J_TITLE[i].children[0].innerText = O_JBS[i]["TITLE"];
    J_STATUS[i].innerText = val2text(O_JBS[i]["JBS_STATUS"]);
    J_DESC[i].innerHTML = O_JBS[i]["JBS_DESC"];

    TITLE_J_FIXED[i].innerText = J_TITLE[i].children[0].innerHTML;
  }
}

function val2text(a) {
  let V = null;
  if (a == 1) {
    V = "Ready for action";
  } else if (a == 0) {
    V = "(deactive)";
  } else if (a == 2) {
    V = "Action in process";
  }
  return V;
}

function puniLokalno(O_o) {
  document.getElementById("GGL_URL").value = O_o["PROFIL"]["G_MAPS"]["Loc"]["FULL"];

  document.getElementById("MPE_SHOW").checked = O_o["PROFIL"]["G_MAPS"]["STATUS"];
  if (O_o["PROFIL"]["G_MAPS"]["STATUS"]) {
    document.getElementById("Updejt_Maps").click();
  }

  Dolarizam(O_o["PROFIL"]["RANK"]);

  CHK_vrf(O_o["PROFIL"]["REG"]["veri"]);

  if (O_o["PROFIL"]["FOTO"]["Flink"]) {
    EL_["SIMBOLIKA"]["BIG_PORFIL_PIC"].src = O_o["PROFIL"]["FOTO"]["Flink"];
  } else {
    EL_["SIMBOLIKA"]["BIG_PORFIL_PIC"].src = "./index_files/MEDIA/defalka.png";
  }
  EL_["MDL_PROFIL"]["IMG_mdl_profil"].src = EL_["SIMBOLIKA"]["BIG_PORFIL_PIC"].src;

  setTimeout(Set_CSS_oko, 500); // ova e za banestuvanje na ofsetski otkako ke se namesti fotkata

  GETaccSTATUS(O_o["PROFIL"]["STATUS"]["AKTIV"]);

  document.getElementById("PRO_STATUS").innerHTML = O_o["PROFIL"]["STATUS"]["SEY"];
  document.getElementById("PROFIL_status").value = O_o["PROFIL"]["STATUS"]["SEY"];

  EL_["MDL_PROFIL"]["INPUT_CONTACTO"].value = O_o["PROFIL"]["CONTACTO"]["CONTACT_ME"];
  MYL_bezFunkcionalnosti(O_o["PROFIL"]["CONTACTO"]["MYlinks"]);

  Onadeni_Evnts(O_o["JBS"]);
}

function MYL_bezFunkcionalnosti(a) {
  EL_["MDL_PROFIL"]["CEK_BOX_CONTACTO"].checked = a;

  if (a) {
    document.getElementById("CONTACTOTO_MENE").innerHTML = "";
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].style.opacity = 0.3;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled = true;

    $(MYL_BEZ).slideDown("fast");

    MYL_BEZ.style.transform = "scale(1)";
  } else {
    MYL_BEZ.style.transform = "scale(0)";
    document.getElementById("CONTACTOTO_MENE").innerHTML = EL_["MDL_PROFIL"]["INPUT_CONTACTO"].value;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].style.opacity = 1;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled = false;
  }
}
EL_["MDL_PROFIL"]["CEK_BOX_CONTACTO"].onclick = function () {
  if (this.checked) {
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].style.opacity = 0.3;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled = true;
    document.getElementById("CONTACTOTO_MENE").innerHTML = "";
  } else {
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].style.opacity = 1;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled = false;
  }

  let P = "ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/CONTACTO/MYlinks";
  DB.child(P).set(this.checked);

  let W = "MYLOCAL/" + userNAME + "/PROFIL/CONTACTO/MYlinks";
  DB.child(W).set(this.checked);
  MYL_bezFunkcionalnosti(this.checked);

  if (document.getElementById("Service_btn").style.display != "none" && document.getElementById("Local_btn").style.display != "none") {
    $(MYL_BEZ).slideDown("fast");
  } else {
    $(MYL_BEZ).slideUp("fast");
  }
};

function UPD_MYLL_LINKS(a) {
  let V = a.checked;
  if (V) {
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].style.opacity = 0.3;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled = true;
    document.getElementById("CONTACTOTO_MENE").innerHTML = "";
  } else {
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].style.opacity = 1;
    EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled = false;
  }

  let P = "ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/CONTACTO/MYlinks";
  DB.child(P).set(V);
  let W = "MYLOCAL/" + userNAME + "/PROFIL/CONTACTO/MYlinks";
  DB.child(W).set(V);
  MYL_bezFunkcionalnosti(V);

  if (document.getElementById("Service_btn").style.display != "none" && document.getElementById("Local_btn").style.display != "none") {
    $(MYL_BEZ).slideDown("fast");
  } else {
    $(MYL_BEZ).slideUp("fast");
  }
}

function Set_CSS_oko() {
  /// da namesti ofstetski css na odreden element

  $("#Service_btn").slideDown("fast");
  $("#Local_btn").slideDown("fast");
  document.getElementById("TBLA").style.marginTop = EL_["SIMBOLIKA"]["DOLARITE_SIMBOLI"].offsetTop + 88 + "px";
}
