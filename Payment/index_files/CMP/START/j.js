Vue.component("start", {
  template: `
<div class="w3-row-padding">
  <div class="w3-col l8 m6">
    <b>Verification</b>
    <h1 class="w3-xxxlarge w3-text-green"><b>Why need to verify my email?</b></h1>
    <p>
      You need to verefuy your account for multipy reasons,, ti helping in secyritu and tryist suspects. this deys anyone from anywhere can create account that may lie thyer costumers. If you alredy
      use some popular "username" (ex. McDonals,BMW...etc), they that own that "trend name" can apply to get that username.
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
