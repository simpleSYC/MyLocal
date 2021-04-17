

function Plusove_Minuse(n){
for(i=0;i<PLUS_MINUS.length;i++){
 if(i!=n){PLUS_MINUS[i].innerHTML="+";}}

if(n!=null){
	if(PLUS_MINUS[n].innerHTML=="+"){PLUS_MINUS[n].innerHTML="-";}else{PLUS_MINUS[n].innerHTML="+";}
}}

for(i=0;i<J_LENTA.length;i++){         let I=i;
J_LENTA[i].onclick=function(){Up_osven_ova(I);Plusove_Minuse(I);}}

var RR=[];for(i=0;i<TBL_J_ROW.length;i++){
	RR[i]=TBL_J_ROW[i];}



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


$("#Local_btn").click(function(){ $("#Mapsko").slideToggle("slow"); $("#Service_btn").slideToggle("slow"); 

$("#PRO_STATUS").slideToggle("fast");

$("#SWITCH_GG").slideToggle("fast"); $("#LOG_OUT").slideToggle("fast");


$(MYL_BEZ).slideToggle("fast");

});
  
var PromenlivoTxT=false; function UPD_novTxT(){if(!PromenlivoTxT){PromenlivoTxT=true;}}

$("#Updejt_Maps").click(function(){  TuriMAPOT();  });


function TuriMAPOT(){
	
	JJ=document.getElementById("GGL_URL").value;

   G_0="'https://maps-api-ssl.google.com/maps?hl=en-US&amp;";
   G_1="&amp;output=embed&amp;";
   G_2="&amp;z=11'";	

YY=ZemiOKdel(JJ);
          G_G=G_0+YY["ADR"]+G_1+YY["KOD"]+G_2;

D_0='<iframe id="GG_MPS" style="width:95%;height: 436px;" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"';
D_1=" src="+G_G;
D_2='allowfullscreen="" frameborder="0"></iframe>';

Dd=D_0+D_1+D_2;

document.getElementById("MPS_HRE").innerHTML=Dd;
}


function ZemiOKdel(a){O={ADR:null,KOD:null};
 	 NW=a.split("/place/",2);
NNWW=NW[1].split("/data=");   ///"Aalen,+Germany/@48.8236068,10.0546206,12z"

OO_1=NNWW[0].split("/@"); O_1="q="+OO_1[0];

QQ_1=OO_1[1].split(","); Q_1="ll="+QQ_1[0]+QQ_1[1];

O["ADR"]=O_1;
O["KOD"]=Q_1;

if(PromenlivoTxT){let P="MYlocal/U_S_E_R/UID/"+SIFRA+"/"+userNAME+"/PROFIL/G_MAPS/Loc";
				  let W="MYlocal/U_S_E_R/WEBuser/"+userNAME+"/PROFIL/G_MAPS/Loc";
                         LOC={NAME:O["ADR"],KOD:O["KOD"],FULL:a};
   MY_LINKS.child(P).set(LOC);
PromenlivoTxT=false;}


return O;}

