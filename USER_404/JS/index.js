var DODATOK=location.href.slice(26);
var USER=DODATOK;
KOJeOVOJ(USER);

function KOJeOVOJ(a){let JJ="";
let USERdef="MYLOCAL/"+a;	                                         
MY_LINKS.child(USERdef).once("value")
  .then(function(snapshot) {
let    CekDATA = snapshot.val();
	  
	if(CekDATA!=undefined){
		//go ima i da videme dali e aktiven status 
		
		document.getElementById("PRO_NAME").innerHTML=USER;
		
	let PreChek=CekDATA["PROFIL"]["STATUS"]["AKTIV"];
	 if(PreChek){
		 /// okej aktiv i se pune
		 
		puniLokalno(CekDATA["PROFIL"]);

JJ=CekDATA["JBS"]; Puni_JBS(JJ);

	 }else{
		 /// momentalo acc e deaactiven
		 console.log("sega e deactiven acc nasteleno");
	 }}else{
		
		// go nema i moze da si naprave
		
		
		 console.log("acc go nema i moze da se naprae");
	}});}






var KOKOS="da";
function puniLokalno(O_o){KOKOS=O_o;
updZvzda(parseInt(O_o["RANK"]));



TuriMAPOT(O_o["G_MAPS"]);


fotoLINK=O_o["FOTO"]["Flink"];
if(fotoLINK==false){
document.getElementById("PROFI_pic").src="MEDIA/defalka.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}


setTimeout(Set_CSS_oko,500);// ova e za banestuvanje na ofsetski otkako ke se namesti fotkata

	

document.getElementById("PRO_STATUS").innerHTML=O_o["STATUS"]["SEY"];


MYL_bezFunkcionalnosti(O_o["SETINGS"]["MYlinks"]);}

function MYL_bezFunkcionalnosti(a){
if(a){
$(MYL_BEZ).slideDown("fast");

MYL_BEZ.style.transform="scale(1)";    URL="https://mylinks.sytes.net/"+USER;

MYL_BEZ.onclick=function(){window.open(URL);}
}else{MYL_BEZ.style.transform="scale(0)";
      MYL_BEZ.onclick=function(){}}}


/////////////////////////////////
var tsto;
function TuriMAPOT(a){
tsto=a["Loc"];
let G_Status=a["STATUS"];
let G_loc=a["Loc"];
Dd="my location is under construction";
if(G_Status){

   G_0="'https://maps-api-ssl.google.com/maps?hl=en-US&amp;";
   G_1="&amp;output=embed&amp;";
   G_2="&amp;z=11'";	

   G_G=G_0+G_loc["NAME"]+G_1+G_loc["KOD"]+G_2;

D_0='<iframe id="GG_MPS" style="width:95%;height: 436px;" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"';
D_1=" src="+G_G;
D_2='allowfullscreen="" frameborder="0"></iframe>';

Dd=D_0+D_1+D_2;}

document.getElementById("MPS_HRE").innerHTML=Dd;

}
var RR=[];for(i=0;i<TBL_J_ROW.length;i++){
	RR[i]=TBL_J_ROW[i];}
	
function Puni_JBS(a){let O_JBS=a;//ovaj e taj jbs objekto
for (i=4;i>-1;i--){
	
	if(O_JBS[i]["JBS_STATUS"]){         let I=i;
J_LENTA[i].onclick=function(){Up_osven_ova(I);Plusove_Minuse(I);}

	J_TITLE[i].parentElement.children[0].remove();
	J_TITLE[i].remove();
	
	TITLE_J_FIXED[i].innerText		=O_JBS[i]["TITLE"];
	
	
	J_STATUS[i].parentElement.parentElement.children[0].remove();
	J_STATUS[i].innerText						=val2text(O_JBS[i]["JBS_STATUS"]);
	
	
	
	J_IMG_SELECTION[i].parentElement.parentElement.remove();
	
	if(O_JBS[i]["IMG"]["F_src"]){
	J_IMG_HRF[i].src=O_JBS[i]["IMG"]["F_src"];
	}else{	
	J_IMG_HRF[i].src="LandingPage/MEDIA/worker.png";}
	
	
	J_DESC[i].innerText							=" "+O_JBS[i]["JBS_DESC"];
	
	
//	RR.push(TBL_J_ROW[i]);
	
}else{TBL_J_ROW[i].style.transform="scale(0)";}
	
}}






function val2text(a){let V=null;
if(a==1){V='Ready for action';}else
if(a==0){V='(deactive)';}else
if(a==2){V='Action in process';} return V;}



function Set_CSS_oko(){/// da namesti ofstetski css na odreden element

$("#Service_btn").slideDown("fast");
$("#Local_btn").slideDown("fast");
document.getElementById("TBLA").style.marginTop=document.getElementById("Zapirkata").offsetTop+22+"px";}
