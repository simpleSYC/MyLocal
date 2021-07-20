Vue.component("mdl_profil", {
  template: `<div class="modal-content">
    <span class="close">&times;</span>

    <p>update Status text <span class="INFO_prazallnik">?</span>
      <input type="text" id="PROFIL_status" />
    </p>
    
    <p>update PROFIL pic <span class="INFO_prazallnik">?</span><input type="file" value="upload" id="fileButon" style="width: 100px; float: right;" /></p>
    <img id="Profil_PIC_in_mdl" />
    <p id="usr_email"></p>
    <p>email account verification status : <span id="E_status"></span> <button id="re_snd_email">re send email</button></p>
    <p>
      update $ simbol <span class="INFO_prazallnik">?</span><button type="button" id="BuyDolarce">add $ </button>
    </p>
    
    <br /><br />
    <label style="position: absolute; margin-top: -5px; display: contents; color: beige">
      <input id="INPUT_TXT_CONTACTO" type="text" placeholder="Contact :(tel/email/link) " />
      <p style="float: right">
        <input id="cx_box_mylinks" type="checkbox" /><span>
          Link my <br />
          mylinks account</span
        >
      </p>
    </label>
    <br /><br />
    
    <button type="button" onclick="UPD_PROFILO();" style="width: auto; margin: auto; position: inherit; display: table-caption">update</button>
    
    <p id="info_star" style="text-align: center"></p>
    
    </div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "mdl_profil",
  },
});

var signqqee = new Vue({
  el: "#MDL_PROFIL",
  store: store,
});

function MDL_PROFIL() {
  EL_["MDL_PROFIL"]["DIV"].style.display = "block";
  STAR_info("x");
  a = W["PROFIL"]["REG"]["veri"];
  if (a == true) {
    document.getElementById("E_status").innerHTML = "verifyed";
  } else {
    document.getElementById("E_status").innerHTML = "unverified";
  }
}

function UPD_PROFILO() {
  // se ubacuvat datada u data baza..
  // se updejtnuva datata so LOKALNITE promeni

  /// ako se uploadne slika na sajtot i pritisne update , togas da se turi na firabaze
  /// ako ne da ne je uploadnuva istata slika
  promSTATUS();
  promeniTUKA();

  promeniContacto();

  EL_["MDL_PROFIL"]["DIV"].style.display = "none";
}

function promeniContacto() {
  let b = W["PROFIL"]["CONTACTO"]["CONTACT_ME"];
  let a = EL_["MDL_PROFIL"]["INPUT_CONTACTO"].value;
  if (b != a) {
    if (EL_["MDL_PROFIL"]["INPUT_CONTACTO"].disabled) {
      document.getElementById("CONTACTOTO_MENE").innerHTML = "";
    } else {
      document.getElementById("CONTACTOTO_MENE").innerHTML = a;
    }

    DB.child("ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/CONTACTO/CONTACT_ME").set(a);
    DB.child("MYLOCAL/" + userNAME + "/PROFIL/CONTACTO/CONTACT_ME").set(a);
  }
}

function promSTATUS() {
  let b = W["PROFIL"]["STATUS"]["SEY"];
  let a = document.getElementById("PROFIL_status").value; //.slice(0,141);  /// da se krate tejsj
  document.getElementById("PRO_STATUS").innerHTML = a;

  if (b != a) {
    DB.child("ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/STATUS/SEY").set(a);
    DB.child("MYLOCAL/" + userNAME + "/PROFIL/STATUS/SEY").set(a);
  }
}

function promeniTUKA() {
  if (FTO_url) {
    EL_["SIMBOLIKA"]["BIG_PORFIL_PIC"].src = FTO_url;
    DB.child("ID/" + SIFRA + "/" + userNAME + "/MYLOCAL/PROFIL/FOTO/Flink").set(FTO_url);
    DB.child("MYLOCAL/" + userNAME + "/PROFIL/FOTO/Flink").set(FTO_url);
  }
}

function STAR_info(a) {
  let txt = "";
  if (EL_["MDL_PROFIL"]["INFO_PRASALNIK"].innerHTML.length < 1 && a != "x") {
    if (a == 0) {
      txt = "some free welcome text status. 0 -141 character status ";
    } else if (a == 1) {
      txt = "its 200x200 PX placeholder with acteable transparent png capability";
    } else if (a == 2) {
      txt = "Learn more about how and why to buy $ simbols<br><a href='/FAQ/'>at our FAQ page section</a>";
    } else if (a == 3) {
      txt = "This is your invite cod for link other acc with seeam username.";
    }
  }
  EL_["MDL_PROFIL"]["INFO_PRASALNIK"].innerHTML = txt;
}
