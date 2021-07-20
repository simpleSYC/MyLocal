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
const MYLOCAL_URL = "https://mylocal.sytes.net"; //25 bukvi se pisuva26
const USER = "1kinger"; //window.location.href.slice(26);
const DB = firebase.database().ref();
Load_Css();
function Load_Css() {
  let CSS_files = {
    //style
    //TBL_btns
    //prisma css
    //https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/darkly/bootstrap.min.css

    // ova jan dole najposledno kako dodtok da se ture
    //https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css

    0: "./USER/index_files/SYT/style",
    1: "./USER/index_files/SYT/TBL_btns",
    //    2: "./USER/index_files/CMP/Input_Editor/CSS/prism",
    3: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/darkly/bootstrap.min",
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
  BROWESE_FTO.href = "./USER/index_files/MEDIA/favicon.ico";
  document.getElementsByTagName("HEAD")[0].appendChild(BROWESE_FTO);

  Load_CMP();
}

function Load_CMP() {
  let CMP = {
    SIMBOLIKA: { id: "simbolika", file: "SIMBOLIKA" },
    //   JOB_STALAZA: { id: "job_stalaza", file: "JOB_STALAZA" },
    //   MAPSKO: { id: "mapsko", file: "MAPSKO" },
    //   DASH_BOARD: { id: "dash_board", file: "DASH_BOARD" },
    //   MDL_JOB: { id: "mdl_job", file: "MDL_JOB" },
    //   MDL_PROFIL: { id: "mdl_profil", file: "MDL_PROFIL" },
    //    MDL_FOTOSET: { id: "mdl_fotoset", file: "MDL_FOTOSET" },
  };
  let CSS = ['<link rel="stylesheet" href="./USER/index_files/CMP/', '/c.css" />'];
  let JS = ['<script type="text/javascript" src="./USER/index_files/CMP/', '/j.js"></script>'];
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
      0: "./USER/index_files/FUN/DEF",
      //      1: "./USER/index_files/firebase/function",
      //      2: "./USER/index_files/CMP/Input_Editor/inline-edit.jquery",
      //    3: "./USER/index_files/FUN/TBL_def",
      4: "./USER_404/JS/TBL/tbl",
      //      5: "./USER/index_files/FUN/fto",
      6: "./USER_404/JS/index",
      7: "./def",
    },
    JS: {
      0: '<script type="text/javascript" src="',
      1: '.js"></script>',
    },
  };
  for (j in O["FILE"]) {
    $("body").append(O["JS"][0] + O["FILE"][j] + O["JS"][1]);
  }

  //  F_.KOJeOVOJ(USER);
}

///  './USER_404/JS/TBL/tbl.js'></script
///  './USER_404/JS/index.js' ></script
///  './def.js'></script>
///  './USER_404/index.js'></script> // ova e sea dodadeno
