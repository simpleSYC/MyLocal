Vue.component("start", {
  template: `
<div class="w3-row-padding">
  <div class="w3-col l8 m6">
    <b>My local payment page</b>
    <h1 class="w3-xxxlarge w3-text-green"><b>Why to pey?</b></h1>
    <p>
    Paying to your mylocal account will incrise your profil $ simbols.. see below price list
    and that is in plan to be your deposit credibilitet for your biznis
    and it can be use for some autumation proces in tech industry in our plan
    also they will be in our system as privileged account and can get some voucher email news letter ,etcc
    and is cool to shouw up to other peoples
    it can be intigrate in snome automated proces in funy way
    </p>
  </div>
  <div class="w3-col l4 m6">
    <img src="./index_files/MEDIA/p0.png" class="w3-image w3-right w3-hide-small" width="335" height="471" />
    <div class="w3-center w3-hide-large w3-hide-medium">
      <img src="./index_files/MEDIA/p0.png" class="w3-image w3-margin-top" width="335" height="471" />
    </div>
  </div>
</div>
`,
});

var store = new Vuex.Store({
  state: {
    view: "start",
  },
});

var signqqee = new Vue({
  el: "#START",
  store: store,
});
