Vue.component("logiranskoto", {
    template: `<div>
    <h3 id="TiTle" style="text-align:center;position: relative;color:cornsilk;" >Welcome to mylocal</h3>
    <img src="../index_files/MEDIA/LogoMylocal.png" style="display: block;border-radius:45px;margin-left: auto;margin-right: auto;width: 73%;margin-top:-50px;max-width: 600px;" >
  
      <input type="email" placeholder="Email..." id="email_field_1" />
      <input type="password" placeholder="Password..." id="password_field_1" />
     <div>
      <button type="button"  onclick="login();">Login to Account</button>
        <button type="button"  style="position: absolute;z-index: -1;bottom: 0px;left:0px;margin: 10px;width: auto;background-color: cadetblue;color: white;" onclick="window.open('https://simplesyc.github.io/web/#s4');">what is mylocal ?</button> <br>
     </div>

    </div>`})
var store="";
var storeqqee = new Vuex.Store({
state: {
  view:"logiranskoto"
}
})   

var signqqee = new Vue({
el:"#login_div",
store: store
})
