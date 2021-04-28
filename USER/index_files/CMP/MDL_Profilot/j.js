Vue.component("mdl_profilo", {
    template: `<div class="modal-content">
    <span class="close">&times;</span>
	
	
    <p> update Status text <i style="color: cadetblue;font-size: large;" class="fa fa-question-circle" onclick="STAR_info(0);"></i></p>
    <input type="text" id="PROFIL_status" style="width: 90%;margin: auto;display: table-caption;" ><br><br>

    <p> update PROFIL pic <i style="color: cadetblue;font-size: large;" class="fa fa-question-circle" onclick="STAR_info(1);"></i><input type="file" value="upload" id="fileButon" style="width: auto;float: right;position: inherit;"></p>
    <img id="wew" src="MEDIA/defalka.png" style="width: auto;max-height: 200px;margin: auto;display:table-caption;border-radius: 50%;">
    <p id="usr_email"></p>
    <p> email account  verification status   : <span id="E_status"></span> <button id="re_snd_email">re send email</button></p>
    <p> update Update Star <i style="color: cadetblue;font-size: large;" class="fa fa-question-circle" onclick="STAR_info(2);"></i><button type="button"  onclick="BYproces();" style="width: auto;float: right;position: inherit;">add <i class='fa fa-dollar'></i></button></p>



    <br><br>
    <label style="position: absolute;margin-top: -5px;display: initial;text-align: center;color: beige;">
    <input  class="CBmyall"  onclick="UPD_MYLL_LINKS(this);" type="checkbox" > Link my mylinks account</label> <br><br>

    <button type="button"  onclick="UPD_PROFILO();" style="width: auto;margin: auto;position: inherit;display: table-caption;" >update</button>

    <p id="info_star" style="text-align: center;"></p>

    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"mdl_profilo"
}
})   

var signqqee = new Vue({
el:"#Modal_PROFIL",
store: store
})
