Vue.component("ubeduvacki", {
  template: `
  <div class="w3-row-padding">
  <div class="w3-col l4 m6">
    <img class="w3-image w3-round-large w3-hide-small" src="./index_files/MEDIA/p2.jpg" alt="App" width="335" height="471" />
  </div>
  <div class="w3-col l8 m6">
    <h1 class="w3-jumbo"><b>Stars</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>What are Starts for?</b></h1>
    <div>
      <p>
        <span class="w3-xlarge">Trusted user</span>For users that pey contrabution to this proyect, will get Star rank.. <br />
        this Star rank is just for stop some suspection scamer , beacyse paying leave money trace..
      </p>

      <div class="w3-col l4 m6">
        <img class="w3-image w3-round-large w3-hide-medium w3-hide-large" src="./index_files/MEDIA/p2.jpg" alt="App" width="335" height="471" />
      </div>
    </div>
    <p>
      <p class="w3-xlarge">How to get a Star?</p>
      first you need to verified your email. then you can paypal me . In note you need to provide mylinks username that wanna Stars. And for Start price
      <a href="#PRICE_DETALS" style="color: blue">see below.</a>
    </p>
  </div>
</div>
`,
});

var store = new Vuex.Store({
  state: {
    view: "ubeduvacki",
  },
});

var signqqee = new Vue({
  el: "#UBEDUVACKI",
  store: store,
});
