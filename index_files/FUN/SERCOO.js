if (screen.width < 444) {
  INPUT_CHEK.style = "display:table;margin:auto;border-radius: 10px;";
} else {
  INPUT_CHEK.style = "margin:auto;border-radius: 10px;";
}

SRC_BTN.onclick = function () {
  SRC_SUBJEKT();
};

function SRC_SUBJEKT() {
  A = INPUT_CHEK.value;
  P = "za kontrolka na taj mall user";
  //MYlocal.child(P)///getne taj value
  // ako go ima --- postoi  (chek status// aktiven/deactiven)

  TBL_SMBLS.style.transform = "scale(1)";

  N = [1, 2];

  LINK = ["https://mylocal.sytes.net/", "https://mylinks.sytes.net/"];
  PRIKAZ_BTN(N[0], SIMBOL_BTN[0], LINK[0], A);
  PRIKAZ_BTN(N[1], SIMBOL_BTN[1], LINK[1], A);
}

function PRIKAZ_BTN(n, B, L, Uname) {
  U = "USER";
  if (n == 0) {
    B.innerHTML = "create it";
    B.onclick = function () {
      window.open(L + U);
    };
  } else if (n == 1) {
    B.innerHTML = "visit it";
    B.onclick = function () {
      window.open(L + Uname);
    };
  } else if (n == 2) {
    B.innerHTML = "deactivet ";
    B.onclick = function () {};
  }

  PrikazBTN(n, B);
}
function PrikazBTN(a, b) {
  if (a == 0) {
    b.style = "background-color:antiquewhite;";
  } else if (a == 1) {
    b.style = "background-color:aquamarine;";
  } else if (a == 2) {
    b.style = "background-color:darkgray;";
  }
}

INPUT_CHEK.oninput = function () {
  HDE_TBL(TBL_SMBLS);
};
function HDE_TBL(a) {
  if (a.style.transform != "scale(0)") {
    a.style.transform = "scale(0)";
  }
}
