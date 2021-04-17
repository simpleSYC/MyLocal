


var ErorINFO=document.getElementById("ErorTXT");
var SW=document.getElementById("main_SW");
var p0,p1,p2;var Par=[p0,p1,p2]; for(i=0;i<3;i++){Par[i]=false;}

function Imenik (a){b="https://mylocal.sytes.net/";if(a.length>0){d="";}else{d="1kinger";}
			document.getElementById("TitLINK").innerHTML=b+d+a;
if(a.length<4){ErorINFO.innerHTML="Username must be longer than 3 charakters";}
else{CEK_singupUSERNAME(a);}}

function CKMail(A){if(A.length>4){a=A.slice(0,A.length-4);Par[1]=false;if(OKname(a)){snd2ckM(a);}
else{ErorINFO.innerHTML="Unsuported email type";}}else{ErorINFO.innerHTML="";}}

function snd2ckM(a){MY_LINKS.child("REG@/LOCAL/email/"+a).once("value").then(function(snapshot){
B_data = snapshot.val();if(B_data){MAIL_FREE(false);}else{MAIL_FREE(true);}});}

function CEK_singupUSERNAME(a){Par[0]=false;if(OKname(a)){snd2ckU(a);}
else{ErorINFO.innerHTML="los karakter";}}

var VUVE;
function snd2ckU(a){
chk_mylinks=true;// zafateno pod deflka
chk_mylocal=true;

	
MY_LINKS.child("REG@/LINKS/user/"+a).once("value").then(function(snapshot){ chk_mylinks = snapshot.val();
          FST_CHK(chk_mylinks,chk_mylocal);});

MY_LINKS.child("REG@/LOCAL/user/"+a).once("value").then(function(snapshot){ chk_mylocal = snapshot.val();
          FST_CHK(chk_mylinks,chk_mylocal);});

}function FST_CHK(a,b){if((a)||(b)){USER_FREE(false);}else{USER_FREE(true);}}



function USER_FREE(a){if(a)     {ErorINFO.innerHTML="";Par[0]=true;}else{ErorINFO.innerHTML="this username is alredy taken";    Par[0]=false;}}
function MAIL_FREE(a){if(a)     {ErorINFO.innerHTML="";Par[1]=true;}else{ErorINFO.innerHTML="this email is alredy used ";       Par[1]=false;}}
function PAS_L(a){if(a.length>7){ErorINFO.innerHTML="";Par[2]=true;}else{ErorINFO.innerHTML="pasword must be over 8 charakters";Par[2]=false;}}


function OKname(a){
if((a.includes("/"))||(a.includes("#"))||(a.includes("."))||
   (a.includes(","))||(a.includes("`"))||(a.includes("|"))||
   (a.includes("'"))||(a.includes('"'))||(a.includes(" "))||
   (a.includes("["))||(a.includes("]"))||(a.includes("%")))
{return false;}else{ErorINFO.innerHTML="";return true;}}


var SIFRA,userNAME,W;function KOJeOVOJ(a){let JJ="";
                SIFRA=a.uid;
USERdef="MYlocal/U_S_E_R/UID/"+SIFRA;
		                                         
MY_LINKS.child(USERdef).once("value")
  .then(function(snapshot) {
     CekDATA = snapshot.val();
	  
	if(CekDATA!=undefined){userNAME=CekDATA["ID"];W=CekDATA[userNAME]; puniLokalno(W); Turi_ACT_email(CekDATA["email"]);

JJ=W["JBS"]; Puni_JBS(JJ);

  document.getElementById("user_para").innerHTML = userNAME;} ///  "https://mylocal.sytes.net<br>/" + 
	else{ADDni_novUSER(a);}
  });	 
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "contents";
    document.getElementById("user_div").style.width = 37+"%";
    document.getElementById("login_div").style.display = "none";
			 var user = firebase.auth().currentUser;
		KOJeOVOJ(user);} 
	else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("user_div").style.width = 73+"%";
    document.getElementById("login_div").style.display = "block";}
});

function login(){

  var userEmail = document.getElementById("email_field_1").value;
  var userPass = document.getElementById("password_field_1").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  
document.getElementById("email_field_1").innerHTML="";
document.getElementById("password_field_1").innerHTML="";
document.getElementById("email_field_2").innerHTML="";
document.getElementById("password_field_2").innerHTML="";

document.getElementById("email_field_1").value="";
document.getElementById("password_field_1").value="";
document.getElementById("email_field_2").value="";
document.getElementById("password_field_2").value="";
  SUP(false);
}

function SUP(a){if(a){
	ErorINFO.display="block";
	document.getElementById("Lin").style.display = "none";
    document.getElementById("Sup").style.display = "block";}else{
	ErorINFO.display="none";
	document.getElementById("Lin").style.display = "block";
    document.getElementById("Sup").style.display = "none";}}

function SingUP(){
	if((Par[0])&&(Par[1])&&(Par[2])){
  var email = document.getElementById("email_field_2").value;
  var password = document.getElementById("password_field_2").value;
	
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}); setTimeout(SND_vrf,3000);

  }else{
  if(Par[0]!=true){TXTO="heyy dude take other username..";}else
  if(Par[1]!=true){TXTO="this email is unvaeble for sign up..";}else
                  {TXTO="paswort to short,, dude comone think somthink long";}
ErorINFO.innerHTML=TXTO;}}


function SND_vrf(){var user = firebase.auth().currentUser;
	
user.sendEmailVerification().then(function() {
  // Email sent.
  
  
}).catch(function(error) {
  // An error happened.
});

}
function Turi_ACT_email(a){document.getElementById("usr_email").innerHTML="( "+a+".com )";}
function CHK_vrf(Status_ver){  var user = firebase.auth().currentUser;
                                var BTN_ver=document.getElementById("re_snd_email"); BTN_ver.style="width: auto;";
 if(Status_ver){
	 // da se trgne resend button
BTN_ver.style.display="none";
BTN_ver.onclick=function(){};
BTN_ver.innerHTML="";
 }else{
BTN_ver.style.display="inline-block";
BTN_ver.onclick=function(){SND_vrf();BTN_ver.innerHTML="email alredy send ..";BTN_ver.onclick=function(){};};
BTN_ver.innerHTML="verification email send ";}
 
 
if(user.emailVerified) {   ////////////// da se stavi od maceto ova !!
if(!Status_ver){MY_LINKS.child("MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/REG/veri").set(true);}}

}

function Aktiv(a,n){ b=a.children[0];
if(n==0){ELEmentce=document.getElementById("STatusTxT");}
if(n==1){ELEmentce=document.getElementById("STATS_linkce");}

if(b.checked){
ELEmentce.innerHTML="Akctiv";
ELEmentce.style="color:green;";
a.children[1].style="background-color:#2196F3;";}else{
ELEmentce.style="color:red;";
ELEmentce.innerHTML="Deactiv";
a.children[1].style="background-color:red;";}

if(n==0){if(b.checked){GLAVEN_SW=true;}else{GLAVEN_SW=false;}}

}


// Get the modal
var modal = document.getElementById("myModal");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_PROFIL = document.getElementsByClassName("close")[1];

       span.onclick = function() {modal.style.display = "none";}
span_PROFIL.onclick = function() {modal_PROFIL.style.display = "none";}

var DROPdwnBTN=document.getElementById("MENIlink");
var LOPCI=  document.getElementById("Lopci");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	LOPCI.style="display: none;";}
  
  if (event.target == modal_PROFIL) {modal_PROFIL.style.display = "none";}
}


////////////////////////// modelskoto kopce
function MDL_PROFIL(){modal_PROFIL.style.display = "block";    STAR_info("x");
a=W["PROFIL"]["REG"]["veri"];
if(a==true){
document.getElementById("E_status").innerHTML="verifyed";}else{
document.getElementById("E_status").innerHTML="unverified";}
}



function PREview(){window.open("https://mylocal.sytes.net/"+userNAME);}

function UPD_PROFILO(){
	
// se ubacuvat datada u data baza..
// se updejtnuva datata so LOKALNITE promeni

/// ako se uploadne slika na sajtot i pritisne update , togas da se turi na firabaze
/// ako ne da ne je uploadnuva istata slika
promSTATUS();
promeniTUKA();

modal_PROFIL.style.display = "none";}

function promSTATUS(){b=W["PROFIL"]["STATUS"]["SEY"];
a=document.getElementById("PROFIL_status").value;//.slice(0,141);  /// da se krate tejsj
document.getElementById("PRO_STATUS").innerHTML=a;

if(b!=a){
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/SEY").set(a);
MY_LINKS.child("MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/STATUS/SEY").set(a);}}

var KOKOS_1;

function promeniTUKA(){
	if(FTO_url!=false){
stara_FTOname=KOKOS_1["Fime"];
if(stara_FTOname!=NOVO_FOTO_iME){
document.getElementById("PROFI_pic").src=FTO_url;
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/FOTO/Flink").set(FTO_url);
MY_LINKS.child("MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/FOTO/Flink").set(FTO_url);

KOKOS_1["Fime"]=NOVO_FOTO_iME;

}

}}


function STAR_info(a) {
	      document.getElementById("inv_cod").innerHTML="**********";
  var x = document.getElementById("info_star");txt="";
if((x.innerHTML.length<1)&&(a!="x")){
if(a==0){txt="some free welcome text status. 0 -141 character status ";}else
if(a==1){txt="its 200x200 PX placeholder with acteable transparent png capability";}else
if(a==2){txt="you can be verifyed<br><a href='/Verification/'>see policy off verification & peyment process</a>";}else

if(a==3){txt="This is your invite cod for link other acc with seeam username.";
document.getElementById("inv_cod").innerHTML=W["PROFIL"]["COD"];}}

x.innerHTML=txt;
	


} 

function BYproces(){txt="https://www.paypal.com/paypalme/MyallStar";
window.open(txt);}

function DROPdwnbtn(){
	if(LOPCI.style.display=="block"){LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}
}




function STATS(A){a=A.checked;if(a){
	
if(W["PROFIL"]["STATUS"]["AKTIV"]!=true){W["PROFIL"]["STATUS"]["AKTIV"]=true;
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/AKTIV").set(true);
MY_LINKS.child("MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/STATUS/AKTIV").set(true);}
	}else{
if(W["PROFIL"]["STATUS"]["AKTIV"]!=false){W["PROFIL"]["STATUS"]["AKTIV"]=false;
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/AKTIV").set(false);
MY_LINKS.child("MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/STATUS/AKTIV").set(false);

}}}



function GETaccSTATUS(a){if(a!=SW.checked ){SW.click();}}

function Puni_JBS(a){let O_JBS=a;//ovaj e taj jbs objekto
for (i=0;i<5;i++){

	J_TITLE[i].children[0].innerText			=O_JBS[i]["TITLE"];
	J_STATUS[i].innerText						=val2text(O_JBS[i]["JBS_STATUS"]);
	J_DESC[i].innerText							=O_JBS[i]["JBS_DESC"];
	
	TITLE_J_FIXED[i].innerText		=J_TITLE[i].children[0].innerHTML
}


}


function val2text(a){let V=null;
if(a==1){V='Ready for action';}else
if(a==0){V='(deactive)';}else
if(a==2){V='Action in process';} return V;}

var KOKOS;

function puniLokalno(O_o){ KOKOS=O_o["JBS"]; KOKOS_1=O_o["PROFIL"]["FOTO"];
updZvzda(parseInt(O_o["PROFIL"]["RANK"]));
E_status=O_o["PROFIL"]["REG"]["veri"];

CHK_vrf(E_status);
//document.getElementById("inv_cod").innerHTML=W["PROFIL"]["COD"];

fotoLINK=O_o["PROFIL"]["FOTO"]["Flink"];
if(fotoLINK==false){
document.getElementById("PROFI_pic").src="MEDIA/defalka.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}

document.getElementById("wew").src=document.getElementById("PROFI_pic").src;

setTimeout(Set_CSS_oko,500);// ova e za banestuvanje na ofsetski otkako ke se namesti fotkata

	
	
GETaccSTATUS(O_o["PROFIL"]["STATUS"]["AKTIV"]);

document.getElementById("PRO_STATUS").innerHTML=O_o["PROFIL"]["STATUS"]["SEY"];

document.getElementById("PROFIL_status").value=O_o["PROFIL"]["STATUS"]["SEY"];


MYL_bezFunkcionalnosti(O_o["PROFIL"]["SETINGS"]["MYlinks"]);



Onadeni_Evnts();}//da slusat kopcinjata


function MYL_bezFunkcionalnosti(a){
if(a){
$(MYL_BEZ).slideDown("fast");

MYL_BEZ.style.transform="scale(1)";

}else{MYL_BEZ.style.transform="scale(0)";}}

function UPD_MYLL_LINKS(a){let V=a.checked;
	       let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/SETINGS/MYlinks";
MY_LINKS.child(P).set(V);
	       let W="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/SETINGS/MYlinks";
MY_LINKS.child(W).set(V);
MYL_bezFunkcionalnosti(V);

if((document.getElementById("Service_btn").style.display!="none")&&(document.getElementById("Local_btn").style.display!="none"))
{$(MYL_BEZ).slideDown("fast");}else
{$(MYL_BEZ).slideUp("fast");}

}



function Set_CSS_oko(){/// da namesti ofstetski css na odreden element

$("#Service_btn").slideDown("fast");
$("#Local_btn").slideDown("fast");
document.getElementById("TBLA").style.marginTop=(document.getElementById("Zapirkata").offsetTop+22)+"px";}

function ADDni_novUSER(USER){
UID=USER.uid;
email=USER.email;
userNAME= document.getElementById("username_field").value;
	
Privat={"JBS":{
	0:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	1:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	2:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	3:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	4:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false}},

"PROFIL":{"G_MAPS":{STATUS:false,Loc:{NAME:false,KOD:false,FULL:false}},
"FOTO":{"Fime":"","Flink":false},
"IME":"", "RANK":0,
"REG":{ "veri":0 },
"COD":0,
"SETINGS":{ MYlinks:false },
"STATUS":{ "AKTIV":true, "SEY":"" }}}

Web={"JBS":{
	0:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	1:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	2:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	3:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
	4:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false}},

"PROFIL":{"G_MAPS":{STATUS:false,Loc:{NAME:false,KOD:false,FULL:false}},
"FOTO":{ "Fime":"", "Flink":false },
"RANK":0,
"SETINGS":{ MYlinks:false },
"STATUS":{ "AKTIV":true, "SEY":"" }}}

                        NEW_COD=GT_NW_COD();
Privat["PROFIL"]["COD"]=NEW_COD;
											em4=email.slice(0,email.length-4);
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+UID+"/"+userNAME).set(Privat);
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+UID+"/ID").set(userNAME);
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+UID+"/email").set(em4);

MY_LINKS.child("MYlocal/U_S_E_R/WEBuser/"+userNAME).set(Web);
                              
MY_LINKS.child("REG@/LINKS/email/"+em4).set(true);
MY_LINKS.child("REG@/LINKS/user/"+userNAME).set(true);


                     
CHK_codirano_i_onadi(NEW_COD,userNAME)

Loadni_noviot(UID);

//"MYlocal/U_S_E_R/UID/"

//"MYlocal/U_S_E_R/WEBuser/"

 
}

function Loadni_noviot(a){let JJ="";
MY_LINKS.child("MYlocal/U_S_E_R/UID/"+a).once("value")
  .then(function(snapshot) {
         Freski = snapshot.val(); JJ=Freski["JBS"]; Puni_JBS(JJ);
userNAME=Freski["ID"];  W=Freski[userNAME]; puniLokalno(Privat); Turi_ACT_email(Freski["email"]);
 document.getElementById("user_para").innerHTML = userNAME; /// "https://mylocal.sytes.net<br>/" + 
  });	 
}
 
function GT_NW_COD(){
  t=new Date().getTime(); c=Math.floor((Math.random() * 999999999) + 1);
T=t.toString(36);      Cc=c.toString(36).slice(2);  
       Co=T+Cc;
return Co;}

function CHK_codirano_i_onadi(C,U){P="REG@/cod/"+C; Uu=P+"/"+U;  c_u_links=Uu+"/mylink_STS"; c_u_local=Uu+"/mylocal_STS";
MY_LINKS.child(P).once("value").then(function(snapshot){  C_data = snapshot.val();

if(C_data!=undefined){ //goo ima 
                
MY_LINKS.child(c_u_links).set(1);

}else{//go nema codot
	
MY_LINKS.child(c_u_links).set(1);
MY_LINKS.child(c_u_local).set(0);

}


});}


var input = document.getElementsByTagName("input")[1];///press enter to work 
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {event.preventDefault();
  document.getElementsByTagName("button")[0].click();}}); 
