
var MYL_BEZ= document.getElementById("bez_stalaza");



var DLR_stalaza=document.getElementsByClassName("DLR_STALAZA")[0];
var DLR_smbol=document.getElementsByClassName("DOLAR");
var zpr=document.getElementById("zprka");

function updZvzda(a){
if(a){DLR_stalaza.style.display="block ruby"; 
if(a<4){zpr.remove();}
for(i=DLR_smbol.length-1;i>0;i--){ DLR_smbol[i].style="font-size:"+(190-(a*12))+"%";


if(i+1>a){DLR_smbol[DLR_smbol.length-i].remove();}}
DLR_smbol[0].style="font-size:"+(190-(a*12))+"%";}


else{DLR_stalaza.style.display="block ruby";DLR_stalaza.style.opacity=0;}

}

    
    



ScrenRedsing();function ScrenRedsing(){ 
if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size: 16px;font-family:'lato';white-space: unset;position:absolute;z-index:-1;display:table-caption;text-align:center;";}
else{
document.getElementById("PRO_STATUS").style="font-size: 30px;font-family:'lato';white-space: unset; position:absolute;z-index:-1;display:table-caption;text-align:center;";}}


