firebase.initializeApp({
  apiKey: "AIzaSyBNjmQnhNhtKS3Fl-S01bPLapvqtjFN7kE",
  authDomain: "myall-proekt.firebaseapp.com",
  databaseURL: "https://myall-proekt.firebaseio.com",
  projectId: "myall-proekt",
  storageBucket: "myall-proekt.appspot.com",
  messagingSenderId: "53126128195",
  appId: "1:53126128195:web:c5605a60494f511b8b6af6",
  measurementId: "G-2YRGN7EEZN",
});
const MYLOCAL_URL = "https://mylinks.sytes.net"; //25 bukvi se pisuva26
const USER = window.location.href.slice(26);
const DB = firebase.database().ref();

Load_Css();
function Load_Css() {
  let CSS_files = {
    0: "./index_files/SYT/W",
    1: "./index_files/SYT/c",
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
    HEDAROT: { id: "headerot", file: "HEDAROT" },
    ABOUTOT: { id: "aboutot", file: "ABOUTOT" },
    CONTRACTOR: { id: "contractor", file: "CONTRACTOR" },
    SERCO: { id: "serco", file: "SERCO" },
    FOOTERO: { id: "footero", file: "FOOTERO" },
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
      0: "index_files/FUN/DEF",
      1: "index_files/FUN/SERCOO",
    },
    JS: {
      0: '<script type="text/javascript" src="./',
      1: '.js"></script>',
    },
  };
  for (j in O["FILE"]) {
    $("body").append(O["JS"][0] + O["FILE"][j] + O["JS"][1]);
  }
}
