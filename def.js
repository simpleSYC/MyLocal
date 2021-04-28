var MYL_BEZ= document.getElementById("bez_stalaza");

var DLR_stalaza=document.getElementsByClassName("DLR_STALAZA")[0];
var DLR_smbol=document.getElementsByClassName("DOLAR");
var zpr=document.getElementById("zprka");

function Dolarizam(a){let LL=a.length; let pxl=(15+(2*LL))+"px";
                      if(LL>1){let Stringo=[a.slice(0,-3),a.slice(-3)];
DLR_stalaza.style.display="block ruby";

DLR_stalaza.style.color="#13b713";

DLR_stalaza.innerHTML="<span style='font-size:"+pxl+";' >"+
Stringo[0]+"</span><span>"+Stringo[1]+"</span>";


}}

ScrenRedsing();function ScrenRedsing(){ 
if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size: 16px;font-family:'lato';white-space: unset;position:absolute;z-index:-1;display:table-caption;text-align:center;";}
else{
document.getElementById("PRO_STATUS").style="font-size: 30px;font-family:'lato';white-space: unset; position:absolute;z-index:-1;display:table-caption;text-align:center;";}}