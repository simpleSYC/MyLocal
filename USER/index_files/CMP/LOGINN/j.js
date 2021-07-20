Vue.component("loginn", {
  template: `
  <div>
    <h3 id="TiTle" style="text-align: center; position: relative; margin-bottom: -3px; color: black">welcome to mylocal</h3>
    <img id="WELCOM_FOTO" src="../index_files/MEDIA/LogoMylocal.png" />
  
    <br />
    <div id="Lin">
      <input type="email" placeholder="Email..." id="email_LogIn"  value="suport1kinger@gmail.com"/>
      <input type="password" placeholder="Password..." id="password_LogIn" value="pass123123" />
      <div>
        <button type="button" id="Login_btn">Login to Account</button>
        <hr />
        <button type="button" onclick="START_SCRN.SUP(true);">Sing Up</button>
      </div>
      <button type="button" id="PASS_RESET">Reset password</button>
    </div>

    <div id="Sup" style="display: none">
      <input type="text" placeholder="Username..." id="username_SingUp" />
      <input type="email" placeholder="Email..." id="email_SingUp" />
      <input type="password" placeholder="Password..." id="password_SingUp" />
      <div>
        <button type="button" id="SIGNAP_BTN">Sing Up</button>
        <hr />
        <button type="button" onclick="START_SCRN.SUP(false);">back</button>
      </div>
    </div>

    <div id="Mdl_rst_pas" class="modal" style="display: none">
      <!-- Modal content -->
      <div class="modal-content" style="margin-bottom: 200px; text-align: center">
        <span class="close" onclick="this.parentElement.parentElement.style.display='none';">&times;</span>
  
        <p>enter your log in <strong>EMAIL</strong> adresse:</p>
        <input type="text" id="rset_email" />
  
        <button type="button" id="RestniAdminPass">send reset email</button>
        <button type="button" id="CancelRSTprocedura">cancel</button>
      </div>
    </div>
  </div>
`,
});

var store = "";
var storeqqee = new Vuex.Store({
  state: {
    view: "loginn",
  },
});

var signqqee = new Vue({
  el: "#LOGINN",
  store: store,
});

const START_SCRN = {
  DIV: document.getElementById("LOGINN"),
  inputo: {
    L_: {
      email: document.getElementById("email_LogIn"),
      pass: document.getElementById("password_LogIn"),
    },
    S_: {
      username: document.getElementById("username_SingUp"),
      email: document.getElementById("email_SingUp"),
      pass: document.getElementById("password_SingUp"),
    },
    R_: {
      email: document.getElementById("rset_email"),
    },
  },
  MDL_PASS_RST: document.getElementById("Mdl_rst_pas"),
  btn: {
    Login: document.getElementById("Login_btn"),
    Sing_UPP: document.getElementById("SIGNAP_BTN"),
    cancel_reset_P: document.getElementById("CancelRSTprocedura"),
    open_reset_P: document.getElementById("PASS_RESET"),
    send_reset_P: document.getElementById("RestniAdminPass"),
  },

  CHEK_U: document.getElementById("PRE_chek"),
  ERR_L_info: document.getElementById("PRE_info"),

  SUP: function (a) {
    if (a) {
      document.getElementById("Lin").style.display = "none";
      document.getElementById("Sup").style.display = "block";
    } else {
      document.getElementById("Lin").style.display = "block";
      document.getElementById("Sup").style.display = "none";
    }
  },
};

START_SCRN["btn"]["Login"].onclick = function () {
  F_.login(START_SCRN["inputo"]["L_"]);
};

START_SCRN["btn"]["Sing_UPP"].onclick = function () {
  F_.Valitacij_NEW_AKK(START_SCRN["inputo"]["S_"]);
};

START_SCRN["btn"]["open_reset_P"].onclick = function () {
  START_SCRN["MDL_PASS_RST"].style.display = "block";
};

START_SCRN["btn"]["cancel_reset_P"].onclick = function () {
  START_SCRN["MDL_PASS_RST"].style.display = "none";
};
START_SCRN["btn"]["send_reset_P"].onclick = function () {
  F_.Pass_REST(START_SCRN["inputo"]["R_"]["email"].value);
  START_SCRN["MDL_PASS_RST"].style.display = "none";
};
