KOJeOVOJ_444(USER);
function KOJeOVOJ_444(a) {
  console.log("VLEGUVA OVAA ", a);

  DB.child("MYLOCAL/" + a)
    .once("value")
    .then(function (snapshot) {
      let C = snapshot.val();

      puniLokalno(C["PROFIL"]);
      Puni_JBS(C["JBS"]);

      EL_["SIMBOLIKA"]["USER_NAME_txt"].innerHTML = USER;
    });
}

function KOJeOVOJ_STAROTO(a) {
  let JJ = "";
  let USERdef = "MYLOCAL/" + a;
  DB.child(USERdef)
    .once("value")
    .then(function (snapshot) {
      let CekDATA = snapshot.val();

      if (CekDATA != undefined) {
        //go ima i da videme dali e aktiven status

        document.getElementById("PRO_NAME").innerHTML = USER;

        let PreChek = CekDATA["PROFIL"]["STATUS"]["AKTIV"];
        if (PreChek) {
          /// okej aktiv i se pune

          puniLokalno(CekDATA["PROFIL"]);

          JJ = CekDATA["JBS"];
          Puni_JBS(JJ);
        } else {
          /// momentalo acc e deaactiven
          console.log("sega e deactiven acc nasteleno");
        }
      } else {
        // go nema i moze da si naprave

        console.log("acc go nema i moze da se naprae");
      }
    });
}

function puniLokalno(O_o) {
  Dolarizam(O_o["RANK"]);

  TuriMAPOT(O_o["G_MAPS"]);

  if (O_o["FOTO"]["Flink"]) {
    document.getElementById("PROFI_pic").src = O_o["FOTO"]["Flink"];
  } else {
    document.getElementById("PROFI_pic").src = "index_files/MEDIA/defalka.png";
  }

  setTimeout(Set_CSS_oko, 500); // ova e za banestuvanje na ofsetski otkako ke se namesti fotkata

  document.getElementById("PRO_STATUS").innerHTML = O_o["STATUS"]["SEY"];

  MYL_bezFunkcionalnosti(O_o["CONTACTO"]);
}

function MYL_bezFunkcionalnosti(A) {
  let a = A["MYlinks"];
  let C = A["CONTACT_ME"];
  if (a) {
    document.getElementById("CONTACTOTO_MENE").remove();
    $(MYL_BEZ).slideDown("fast");

    MYL_BEZ.style.transform = "scale(1)";
    MYL_BEZ.onclick = function () {
      window.open(MYLOCAL_URL + "/" + USER);
    };
  } else {
    MYL_BEZ.style.transform = "scale(0)";

    document.getElementById("CONTACTOTO_MENE").innerHTML = C;
  }
}

function TuriMAPOT(a) {
  let G_Status = a["STATUS"];
  let G_loc = a["Loc"];
  let Dd = "my location is hiden for now";
  if (G_Status) {
    let G_0 = "'https://maps-api-ssl.google.com/maps?hl=en-US&amp;";
    let G_1 = "&amp;output=embed&amp;";
    let G_2 = "&amp;z=11'";

    let G_G = G_0 + G_loc["NAME"] + G_1 + G_loc["KOD"] + G_2;

    let D_0 = '<iframe id="GG_MPS" style="width:95%;height: 436px;" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"';
    let D_1 = " src=" + G_G;
    let D_2 = 'allowfullscreen="" frameborder="0"></iframe>';

    Dd = D_0 + D_1 + D_2;
  }

  document.getElementById("MPS_HRE").innerHTML = Dd;
}

var RR = [];
for (i = 0; i < TBL_J_ROW.length; i++) {
  RR[i] = TBL_J_ROW[i];
}

function Puni_JBS(a) {
  let O_JBS = a; //ovaj e taj jbs objekto
  for (i = 4; i > -1; i--) {
    if (O_JBS[i]["JBS_STATUS"]) {
      let I = i;
      J_LENTA[i].onclick = function () {
        Up_osven_ova(I);
        Plusove_Minuse(I);
      };

      J_TITLE[i].parentElement.children[0].remove();
      J_TITLE[i].remove();

      TITLE_J_FIXED[i].innerText = O_JBS[i]["TITLE"];

      J_STATUS[i].parentElement.parentElement.children[0].remove();
      J_STATUS[i].innerText = val2text(O_JBS[i]["JBS_STATUS"]);

      J_IMG_SELECTION[i].parentElement.parentElement.remove();

      if (O_JBS[i]["IMG"]["F_src"]) {
        J_IMG_HRF[i].src = O_JBS[i]["IMG"]["F_src"];
      } else {
        J_IMG_HRF[i].src = "index_files/MEDIA/worker.png";
      }

      J_DESC[i].innerText = " " + O_JBS[i]["JBS_DESC"];

      //	RR.push(TBL_J_ROW[i]);
    } else {
      TBL_J_ROW[i].style.transform = "scale(0)";
    }
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

function Set_CSS_oko() {
  /// da namesti ofstetski css na odreden element
  EL_["SIMBOLIKA"]["USER_NAME_txt"].style.marginTop = "5px";

  $("#Service_btn").slideDown("fast");
  $("#Local_btn").slideDown("fast");
  document.getElementById("TBLA").style.marginTop = DLR_stalaza.offsetTop + 60 + "px";
}
