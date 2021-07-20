Vue.component("mdl_job", {
  template: `<div class="modal-content">
    <span class="close">&times;</span>
    <p id="SHW_link"></p>
	
<div class="topnav" id="myTopnav">

<div style="float: left;text-align: center;">
  <span id="STATS_linkce" style="color:green;">Activ</span><br>
<label class="switch" onclick="Aktiv(this,1);" >
  <input type="checkbox" >
  <span class="slider round"></span>
</label></div>


  <div class="dropdown" id="MENIlink">
    <button type="button"  class="dropbtn" onclick="DROPdwnbtn();" >Options 
      <i class="fa fa-caret-down"></i>
    </button>
    <div id="Lopci" class="dropdown-content" >
      <a onclick="par(0);" class="LL"></a>
      <a onclick="par(1);" class="LL"></a>
      <a onclick="par(2);" class="LL"></a>
      <a onclick="par(3);" class="LL"></a>
      <a onclick="par(4);" class="LL"></a>
      <a onclick="par(5);" class="LL"></a>
    </div>
  </div> 
  
  <a style="font-size:30px;"><i id="Btn_LOGO" ></i></a>
  
</div> <br>

<div> 

  <input style="width:100%;" type="text" id="LINK_txt"  oninput="SHW_LinkUPDT(this);" name="Name" required>
  <div style="display: block ruby;">
    <button type="button"  onclick="MESTENJE(this,1)" style="float:left;width: auto;margin: 10px;" >Save</button>
    <button type="button"  onclick="MESTENJE(this,null)" style="float:right;width: auto;margin: 10px;" >Cancel</button>
  </div>
	

</div>

	
  </div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "mdl_job",
  },
});

var signqqee = new Vue({
  el: "#MDL_JOB",
  store: store,
});
