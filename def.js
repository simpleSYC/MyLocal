var MYL_BEZ = document.getElementById("bez_stalaza");

var DLR_stalaza = document.getElementById("DLR_STALAZA");
var DLR_smbol = document.getElementsByClassName("DOLAR");
var zpr = document.getElementById("zprka");

function Dolarizam(a) {
  if (a) {
    let DOLARS = "$$$ $$$ $$$ $$$ $$$ $$$";
    let ekstra_space = parseInt(a / 3);
    let ZASEK = parseInt(a + ekstra_space);
    let DOLAR_Simbols = DOLARS.slice(DOLARS.length - ZASEK);
    let S = {
      MarginTop: a * -1.5 + "px",
      D: "block ruby",
      C: {
        //https://i.pinimg.com/originals/b7/3a/87/b73a870201d36f7a40bc17973ace8430.jpg
        1: "#c7ea46", //lime
        2: "#99fa99", //mint
        3: "#2f8b58", //sea
        4: "#51c878", //ermalde
        5: "#00a86b", //jade
        //        6: "#13b713",
        7: "#0b6623", //forest
        8: "#4cbb17", //kelly
        9: "#39ff14", //neon
        10: "#155616",
        11: "#10420f",
      },
      0: "<span style='font-size:" + (20 + 2.5 * a) + "px'>",
      1: "</span><span>,$$</span>",
    };
    DLR_stalaza.style.marginTop = S["MarginTop"];
    DLR_stalaza.style.display = S["D"];
    DLR_stalaza.style.color = S["C"][a];
    DLR_stalaza.innerHTML = S[0] + DOLAR_Simbols + S[1];
  }
}

ScrenRedsing();
function ScrenRedsing() {
  let PRO_STATUS = document.getElementById("PRO_STATUS");
  if (window.innerWidth < 400) {
    PRO_STATUS.style = "font-size: 16px;font-family: 'lato';white-space: unset;position: fixed;padding: 15px;";
  } else {
    PRO_STATUS.style = "font-size: 30px;font-family: 'lato';;white-space: unset;position: fixed;padding: 15px;";
  }
}
