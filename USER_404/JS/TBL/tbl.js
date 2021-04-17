

//<iframe id="GG_MPS" style="width:95%;" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"  allowfullscreen="" frameborder="0"></iframe>

var MAPS_F			=document.getElementById("GG_MPS");

var TBL_J_ROW		=document.getElementsByClassName("TBL_ROW");
var J_LENTA			=document.getElementsByClassName("well lnta");
var PLUS_MINUS		=document.getElementsByClassName("plus_minus");
var TITLE_J_FIXED	=document.getElementsByClassName("j_title");
var JOB_STNGS		=document.getElementsByClassName("JB_STNGS");

var J_TITLE			=document.getElementsByClassName("well J_TITLE");

var J_STATUS		=document.getElementsByClassName("btn btn-success J_status");
var J_IMG_SELECTION	=document.getElementsByClassName("btn btn-success J_img_S");
var J_IMG_HRF		=document.getElementsByClassName("J_img_Lnk");
var J_DESC			=document.getElementsByClassName("J_description");

var J_D_LSNT		=document.getElementsByClassName("well J_DESC");



/////////////




function Plusove_Minuse(n){
for(i=0;i<PLUS_MINUS.length;i++){
 if(i!=n){PLUS_MINUS[i].innerHTML="+";}}

if(n!=null){
	if(PLUS_MINUS[n].innerHTML=="+"){PLUS_MINUS[n].innerHTML="-";}else{PLUS_MINUS[n].innerHTML="+";}
}}


function Up_osven_ova(a){
$("#Service_btn").slideToggle(600,"linear");

for(i=0;i<J_LENTA.length;i++){ 

if(a==i){$(JOB_STNGS[i]).slideToggle("slow"); }else
        {$(JOB_STNGS[i]).slideUp("slow");}

if(a!=i){$(RR[i]).slideToggle("slow");}


}}



$("#Service_btn").click(function(){ $("#Local_btn").slideToggle(600,"linear"); Plusove_Minuse(null);

$("#potpunka").slideToggle(1000,"linear");

$("#PRO_STATUS").slideToggle("fast");

$("#SWITCH_GG").slideToggle("fast"); $("#LOG_OUT").slideToggle("fast");

for(i in RR){
	 $(RR[i]).slideToggle("slow");
     $(JOB_STNGS[i]).slideUp("slow");}
	 
	 
$(MYL_BEZ).slideToggle("fast");
});


$("#Local_btn").click(function(){ $("#Mapsko").slideToggle("slow");


$("#Service_btn").slideToggle("slow"); 

$("#PRO_STATUS").slideToggle("fast");

$("#SWITCH_GG").slideToggle("fast"); $("#LOG_OUT").slideToggle("fast");


$(MYL_BEZ).slideToggle("fast");

});
