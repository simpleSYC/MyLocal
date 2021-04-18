Vue.component("faq", {
    template: `<div id="Pitanjata_Tuka">

<div id="Blanko" style="display:none;">

  <div class="panel-group">
    <div class="panel panel-default"  data-toggle="collapse"><div class="panel-heading">
    <a class="panel-title">		</a></div>
    <div class="panel-collapse collapse">
      <div class="panel-body">  </div>
      <div class="panel-footer"> </div>
    </div>
    </div>
   </div>

</div>

</div>`})
var store="";
    var storeqqee = new Vuex.Store({
    state: {
      view:"faq"
    }
    })   

    var signqqee = new Vue({
    el:"#FAQ",
    store: store
    })
               let P=document.getElementById("Pitanjata_Tuka"); 
for(i in FAQ){cl(i,P);}
function cl(n,p){let O=document.getElementById("Blanko");
var itm = O.children[0];
itm.children[0].setAttribute("href","#colapse"+n);
itm.children[0].children[1].setAttribute("id","colapse"+n);
itm.children[0].children[0].children[0].innerHTML=FAQ[n][0];


itm.children[0].children[1].children[0].innerHTML=FAQ[n][1][0];
itm.children[0].children[1].children[1].innerHTML=FAQ[n][1][1];

          var cln = itm.cloneNode(true);
p.appendChild(cln);}



let  DTM=document.getElementsByClassName("panel-heading");
     DTM[DTM.length-1].style="text-align: center;";