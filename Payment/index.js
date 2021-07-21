Load_Css();
function Load_Css() {
  let CSS_files = {
    0: "./index_files/SYT/C",
    1: "./index_files/SYT/s",
  };
  for (c in CSS_files) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = CSS_files[c] + ".css";
    document.getElementsByTagName("HEAD")[0].appendChild(link);
  }

  let BROWESE_FTO = document.createElement("link");
  BROWESE_FTO.rel = "icon";
  BROWESE_FTO.type = "image/x-icon";
  BROWESE_FTO.href = "./index_files/MEDIA/favicon.ico";
  document.getElementsByTagName("HEAD")[0].appendChild(BROWESE_FTO);

  Load_CMP();
}
function Load_CMP() {
  let CMP = {
    START: { id: "start", file: "START" },
    UBEDUVACKI: { id: "ubeduvacki", file: "UBEDUVACKI" },
    SLIKICINJA: { id: "slikicinja", file: "SLIKICINJA" },
    PRICE_DETALS: { id: "price_detals", file: "PRICE_DETALS" },
    GET_COD: { id: "get_cod", file: "GET_COD" },
    FUTERSKO: { id: "futersko", file: "FUTERSKO" },
    PAYMENTO: { id: "paymento", file: "PAYMENTO" },
  };
  let CSS = ['<link rel="stylesheet" href="./index_files/CMP/', '/c.css" />'];
  let JS = ['<script type="text/javascript" src="./index_files/CMP/', '/j.js"></script>'];
  for (i in CMP) {
    document.getElementById(i).innerHTML = "<" + CMP[i]["id"] + " />";
    $("#" + i).append(CSS[0] + CMP[i]["file"] + CSS[1]);
    $("#" + i).append(JS[0] + CMP[i]["file"] + JS[1]);
  }

  Load_Dodatok();
}
function Load_Dodatok() {
  let O = {
    FILE: {
      0: "./index_files/FUN/DEF",
      1: "./index_files/FUN/PEYMENT",
    },
    JS: {
      0: '<script type="text/javascript" src="',
      1: '.js"></script>',
    },
  };
  for (j in O["FILE"]) {
    $("body").append(O["JS"][0] + O["FILE"][j] + O["JS"][1]);
  }

  setTimeout(Load_Extra(), 1000);
}
function Load_Extra() {
  let O = {
    FILE: {
      0: "./index_files/FUN/Sender",
    },
    JS: ['<script data-cfasync="false" type="text/javascript" src="./', '.js" ></script>'],
  };
  for (e in O["FILE"]) {
    $("body").append(O["JS"][0] + O["FILE"][e] + O["JS"][1]);
  }
}
