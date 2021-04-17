
var FTO_UPLOAD_view=document.getElementById("wew"); var FTO_url=false; var NOVO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButon");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	
var storageRef= firebase.storage().ref().child("MYlocal/"+SIFRA+"/PROFIL_pic/"+file.name);

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){ 
FTO_UPLOAD_view.src =reader.result;}
reader.readAsDataURL(file);

MY_LINKS.child("MYlocal/U_S_E_R/UID/"+SIFRA+"/PROFIL/FOTO/Fime").set(file.name);


MY_LINKS.child("MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/FOTO/Fime").set("ProfilPIC");


NOVO_FOTO_iME=file.name;

storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'
  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  FTO_url=url;

}).catch(function(error) {
  // Handle any errors
});});}); 


//////////////////////////////////////////////////////////
//toa orifukna
//=====

function UPD_FTJ_MDL(n){
	
if(J_IMG_SELECTION[n].innerHTML=="ADD foto"){
document.getElementById("Modal_FOTOset").setAttribute("j_f",n);
document.getElementById("Modal_FOTOset").style.display="block";
}
}





function FotoSETbtn(){
J_ID=document.getElementById("Modal_FOTOset").getAttribute("j_f");


	if(J_FOTO_url){
stara_JOBfoto=KOKOS[J_ID]["F_ime"];
if(stara_JOBfoto!=NOVO_J_FOTO_iME){
	
	
let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/JBS/"+J_ID+"/IMG/";
let W="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/JBS/"+J_ID+"/IMG/";

MY_LINKS.child(P+"/F_ime").set(NOVO_J_FOTO_iME);
MY_LINKS.child(W+"/F_ime").set(NOVO_J_FOTO_iME);


MY_LINKS.child(P+"/F_src").set(J_FOTO_url);
MY_LINKS.child(W+"/F_src").set(J_FOTO_url);


J_IMG_HRF[J_ID].src=J_FOTO_url;

}

}





document.getElementById("Modal_FOTOset").setAttribute("j_f","");
document.getElementById("Modal_FOTOset").style.display="none";}







// jobska

/////// FOTO MODEL AKCIJA FRONTEND AND BACKEND (prakja fotka do databaza) \\\\\\\\\

/////////++++++var FOTO_model=document.getElementById("Modal_FOTOset");FOTO_model.style="z-index:3;";
var FTO_J_preview=document.getElementsByClassName("View_FOTO")[0];


var J_FOTO_url,NOVO_J_FOTO_iME;    

var UPD_PicJ_FOTO=document.getElementById("fileButonJ_FOTO");

 RESETparaMETARS(); function RESETparaMETARS(){J_FOTO_url=false; NOVO_J_FOTO_iME=null;UPD_PicJ_FOTO.value=null;
 
document.getElementById("Modal_FOTOset").setAttribute("j_f","");}

/// tuka da se adbe tia kiga da slusaaa !! 

UPD_PicJ_FOTO.addEventListener("change", function(e){   J_FOTO_url=false; NOVO_J_FOTO_iME=null;
	

/////////+++++ F_N=FOTO_model.getAttribute("j_f_n");
J_ID=document.getElementById("Modal_FOTOset").getAttribute("j_f");
	
	var file = e.target.files[0];
	/////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var storageRef= firebase.storage().ref().child("MYlocal/"+SIFRA+"/JBS/"+J_ID+"/"+file.name);

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){

FTO_J_preview.style="table-caption;";
document.getElementById("noFOTO").style="display:none;";

FTO_J_preview.src =reader.result;}
reader.readAsDataURL(file);
let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/JBS/"+J_ID+"/IMG/F_ime";
let W="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/JBS/"+J_ID+"/IMG/F_ime";

MY_LINKS.child(P).set(file.name);

MY_LINKS.child(W).set(file.name);

NOVO_J_FOTO_iME=file.name;



storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  J_FOTO_url=url;

}).catch(function(error) {
  // Handle any errors
});



}

);
	}); 
