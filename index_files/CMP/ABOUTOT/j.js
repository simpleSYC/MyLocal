Vue.component("aboutot", {
  template: `
  <div class="w3-container" id="about">
    <div class="w3-content" style="max-width: 700px">
      <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">ABOUT MYLOCAL</span></h5>
  
      <img src="./index_files/MEDIA/BREND.png" style="width: 100%; max-width: 1000px" class="w3-margin-top" />
  
      <p>
        The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
      <div class="w3-panel w3-leftbar w3-light-grey">
        <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
        <p>Chef, Coffeeist and Owner: Liam Brown</p>
      </div>
      <p><strong>More Info</strong> can be find at <a onclick="window.open('FAQ');" style="color: blue; font-weight: bold">this FAQ page</a></p>
    </div>
  </div>
  
  `,
});
var storeqqee = new Vuex.Store({
  state: {
    view: "aboutot",
  },
});

var signqqee = new Vue({
  el: "#ABOUTOT",
  store: store,
});
