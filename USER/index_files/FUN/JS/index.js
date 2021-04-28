var SW=document.getElementById("main_SW");
var TST1;
var SIFRA,userNAME,W;
function KOJeOVOJ(a){        SIFRA=a.uid;
           let USERdef="ID/"+SIFRA;
MY_LINKS.child(USERdef).once("value").then(function(snapshot){let C= snapshot.val();
userNAME=C["AKK"]; W=C[userNAME]["MYLOCAL"]; puniLokalno(W);   Turi_ACT_email(C["email"]);
          Puni_JBS(W["JBS"]);

  document.getElementById("user_para").innerHTML = userNAME;
  
  });	 
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "contents";
    document.getElementById("user_div").style.width = 37+"%";
    document.getElementById("login_div").style.display = "none";
		 var user = firebase.auth().currentUser;
KOJeOVOJ(user);}      });

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

function logout(){firebase.auth().signOut(); location.reload();}



function SND_vrf(){var user = firebase.auth().currentUser;
	/// ako e veke verifikuvan da ne senduva
user.sendEmailVerification().then(function() {
  // Email sent.
  
  
}).catch(function(error) {
  // An error happened.
});}

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
if(!Status_ver){MY_LINKS.child("ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/REG/veri").set(true);}}

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
var modal = document.getElementById("J_modalot");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_PROFIL = document.getElementsByClassName("close")[1];

       span.onclick = function() {span.parentElement.parentElement.style.display = "none";}
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

promeniContacto();

modal_PROFIL.style.display = "none";}

function promeniContacto(){let b=W["PROFIL"]["CONTACTO"]["CONTACT_ME"];
  let a= document.getElementById("Contact_ME").value;
if(b!=a){
if(document.getElementById("Contact_ME").disabled){
   document.getElementById("CONTACTOTO_MENE").innerHTML="";}else{
   document.getElementById("CONTACTOTO_MENE").innerHTML=a;}


MY_LINKS.child("ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/CONTACTO/CONTACT_ME").set(a);
MY_LINKS.child("MYLOCAL/"+userNAME+"/PROFIL/CONTACTO/CONTACT_ME").set(a);}}



function promSTATUS(){let b=W["PROFIL"]["STATUS"]["SEY"];
let a=document.getElementById("PROFIL_status").value;//.slice(0,141);  /// da se krate tejsj
document.getElementById("PRO_STATUS").innerHTML=a;

if(b!=a){
MY_LINKS.child("ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/STATUS/SEY").set(a);
MY_LINKS.child("MYLOCAL/"+userNAME+"/PROFIL/STATUS/SEY").set(a);}}


function promeniTUKA(){if(FTO_url){
  
document.getElementById("PROFI_pic").src=FTO_url;
MY_LINKS.child("ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/FOTO/Flink").set(FTO_url);
MY_LINKS.child("MYLOCAL/"+userNAME+"/PROFIL/FOTO/Flink").set(FTO_url);



}}


function STAR_info(a){let txt="";
let x = document.getElementById("info_star");
if((x.innerHTML.length<1)&&(a!="x")){
if(a==0){txt="some free welcome text status. 0 -141 character status ";}else
if(a==1){txt="its 200x200 PX placeholder with acteable transparent png capability";}else
if(a==2){txt="you can be verifyed<br><a href='/Verification/'>see policy off verification & peyment process</a>";}else

if(a==3){txt="This is your invite cod for link other acc with seeam username.";

}}      x.innerHTML=txt;} 

function BYproces(){let txt="https://www.paypal.com/paypalme/MyallStar";
window.open(txt);}

function DROPdwnbtn(){
	if(LOPCI.style.display=="block"){LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}
}




function STATS(A){a=A.checked;if(a){
	
if(W["PROFIL"]["STATUS"]["AKTIV"]!=true){W["PROFIL"]["STATUS"]["AKTIV"]=true;
MY_LINKS.child("ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/STATUS/AKTIV").set(true);
MY_LINKS.child("MYLOCAL/"+userNAME+"/PROFIL/STATUS/AKTIV").set(true);}
	}else{
if(W["PROFIL"]["STATUS"]["AKTIV"]!=false){W["PROFIL"]["STATUS"]["AKTIV"]=false;
MY_LINKS.child("ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/STATUS/AKTIV").set(false);
MY_LINKS.child("MYLOCAL/"+userNAME+"/PROFIL/STATUS/AKTIV").set(false);

}}}



function GETaccSTATUS(a){if(a!=SW.checked ){SW.click();}}

function Puni_JBS(a){let O_JBS=a;//ovaj e taj jbs objekto
for (i=0;i<5;i++){

	J_TITLE[i].children[0].innerText			=O_JBS[i]["TITLE"];
	J_STATUS[i].innerText						=val2text(O_JBS[i]["JBS_STATUS"]);
	J_DESC[i].innerText							=O_JBS[i]["JBS_DESC"];
	
	TITLE_J_FIXED[i].innerText		=J_TITLE[i].children[0].innerHTML;}

}

function val2text(a){let V=null;
if(a==1){V='Ready for action';}else
if(a==0){V='(deactive)';}else
if(a==2){V='Action in process';} return V;}


function puniLokalno(O_o){
  Dolarizam(O_o["PROFIL"]["RANK"]);

CHK_vrf(O_o["PROFIL"]["REG"]["veri"]);

if(O_o["PROFIL"]["FOTO"]["Flink"])
{document.getElementById("PROFI_pic").src=O_o["PROFIL"]["FOTO"]["Flink"];}else
{document.getElementById("PROFI_pic").src="MEDIA/defalka.png";}

document.getElementById("wew").src=document.getElementById("PROFI_pic").src;

setTimeout(Set_CSS_oko,500);// ova e za banestuvanje na ofsetski otkako ke se namesti fotkata

GETaccSTATUS(O_o["PROFIL"]["STATUS"]["AKTIV"]);

document.getElementById("PRO_STATUS").innerHTML=O_o["PROFIL"]["STATUS"]["SEY"];

document.getElementById("PROFIL_status").value=O_o["PROFIL"]["STATUS"]["SEY"];


document.getElementById("Contact_ME").value=O_o["PROFIL"]["CONTACTO"]["CONTACT_ME"];
MYL_bezFunkcionalnosti(O_o["PROFIL"]["CONTACTO"]["MYlinks"]);

Onadeni_Evnts(O_o["JBS"]);}

function MYL_bezFunkcionalnosti(a){

document.getElementsByClassName("CBmyall")[0].checked=a;


if(a){document.getElementById("CONTACTOTO_MENE").innerHTML="";
  document.getElementById("Contact_ME").style.opacity=0.3;document.getElementById("Contact_ME").disabled=true;

  $(MYL_BEZ).slideDown("fast");

MYL_BEZ.style.transform="scale(1)";

}else{MYL_BEZ.style.transform="scale(0)";
document.getElementById("CONTACTOTO_MENE").innerHTML=document.getElementById("Contact_ME").value;
document.getElementById("Contact_ME").style.opacity=1; document.getElementById("Contact_ME").disabled=false;}}

function UPD_MYLL_LINKS(a){let V=a.checked;
if(V){document.getElementById("Contact_ME").style.opacity=0.3;document.getElementById("Contact_ME").disabled=true; document.getElementById("CONTACTOTO_MENE").innerHTML="";}
else{ document.getElementById("Contact_ME").style.opacity=1;  document.getElementById("Contact_ME").disabled=false;}

	       let P="ID/"+SIFRA+"/"+userNAME+"/MYLOCAL/PROFIL/CONTACTO/MYlinks";
MY_LINKS.child(P).set(V);
	       let W="MYLOCAL/"+userNAME+"/PROFIL/CONTACTO/MYlinks";
MY_LINKS.child(W).set(V);
MYL_bezFunkcionalnosti(V);

if((document.getElementById("Service_btn").style.display!="none")&&(document.getElementById("Local_btn").style.display!="none"))
{$(MYL_BEZ).slideDown("fast");}else
{$(MYL_BEZ).slideUp("fast");}

}



function Set_CSS_oko(){/// da namesti ofstetski css na odreden element

$("#Service_btn").slideDown("fast");
$("#Local_btn").slideDown("fast");
document.getElementById("TBLA").style.marginTop=(DLR_stalaza.offsetTop+122)+"px";}


var input = document.getElementsByTagName("input")[1];///press enter to work 
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {event.preventDefault();
  document.getElementsByTagName("button")[0].click();}}); 
