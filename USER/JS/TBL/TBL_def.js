

//<iframe id="GG_MPS" style="width:95%;" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"  allowfullscreen="" frameborder="0"></iframe>

var TBL				=document.getElementById("TBLA");

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





var SW_main			=document.getElementById("main_SW");
$(SW_main).click(function(){let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/AKTIV";
                 MY_LINKS.child(P).set(SW_main.checked);
			 
           let W="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/STATUS/AKTIV";
MY_LINKS.child(W).set(SW_main.checked);});

///////////////
var SW_MPE			=document.getElementById("MPE_SHOW");
$(SW_MPE).click(function(){let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/G_MAPS/STATUS";
                MY_LINKS.child(P).set(SW_MPE.checked);

           let W="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/G_MAPS/STATUS";
MY_LINKS.child(W).set(SW_MPE.checked);});

function Onadeni_Evnts(){
for(i=0;i<5;i++){let I=i;
 let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/JBS/"+i;
let WB="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/JBS/"+i;
J_TITLE[i].onchange		=function(){let x=this.children[0].value;	MY_LINKS.child(P+"/TITLE").set(x);  	MY_LINKS.child(WB+"/TITLE").set(x); 		FixNaslov(this,I); }
J_STATUS[i].onchange	=function(){let x=txt2val(this);			MY_LINKS.child(P+"/JBS_STATUS").set(x);	MY_LINKS.child(WB+"/JBS_STATUS").set(x); }
J_D_LSNT[i].onchange	=function(){let x=this.children[0].value;	MY_LINKS.child(P+"/JBS_DESC").set(x);	MY_LINKS.child(WB+"/JBS_DESC").set(x); }}

}
function txt2val(a){let y=a.innerHTML;let V=null;
if(y=='Ready for action'){V=1;}else
if(y=='(deactive)'){V=0;}else
if(y=='Action in process'){V=2;} return V;}

function FixNaslov(a,b){TITLE_J_FIXED[b].innerText=" "+a.children[0].value;}


var O_J_0=[];
var O_J_1=[];
var O_J_2=[];
var O_J_3=[];




        DoIt_preset(document.getElementsByClassName("J_DESC"));
function DoIt_preset(a){
           for(i=0;i<a.length;i++){ let I=i;
                     a[i].children[0].style="white-space:unset;display: ruby-base;";
					 
					 J_IMG_HRF[i].src="../LandingPage/MEDIA/worker.png";
					 
					 
					 O_J_0[i]=J_TITLE[i];
					 O_J_1[i]=J_STATUS[i];
					 O_J_2[i]=J_IMG_SELECTION[i];
					 O_J_3[i]=a[i];
					 
					 
					 J_IMG_SELECTION[i].onchange=function(){UPD_FTJ_MDL(I);}
					 
					 
					 
					 }}
					 
					 

//<iframe id="GG_MPS" style="width:95%;" jsname="L5Fo6c" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox" src="https://maps-api-ssl.google.com/maps?hl=en-US&amp;ll=49.063975,8.975472&amp;output=embed&amp;q=Kirchgasse+3,+74397+Pfaffenhofen,+Germany+(Kirchgasse+3)&amp;z=16" allowfullscreen="" frameborder="0"></iframe>
					 
for(i in O_J_0){
	
  $(O_J_0[i]).inlineEdit({type: 'text'});
		
  $(O_J_1[i]).inlineEdit({
  type: 'select',
  data: {
    'default':	'Ready for action',
    'opt-1': 	'(deactive)',
    'opt-2': 	'Action in process'}});
	
  $(O_J_2[i]).inlineEdit({
  type: 'select',
  data: {
    'default': ' ',
    'opt-1': 'ADD foto',
    'opt-2': '(default foto)'
	}});
	
 $(O_J_3[i]).inlineEdit({type: 'textarea'});}


