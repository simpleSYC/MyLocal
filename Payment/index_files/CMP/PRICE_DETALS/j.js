Vue.component("price_detals", {
  template: `<div>
  <h1 id="$$" class="w3-jumbo"><b>Pricing</b></h1>
  <p class="w3-large">There are 3 tyier of stars.</p>

  <div class="w3-row-padding" style="margin-top: 64px">
    <div class="w3-half w3-section">
      <!-- Header with Slideshow -->
      <header class="w3-display-container w3-center">
        <p>3 simple step buying proces</p>
        <div class="mySlides w3-animate-opacity" style="display: block">
          <img class="w3-image" src="./index_files/MEDIA/s1.png" alt="Image 1" width="1500" height="1000" />
          <div class="w3-display-left w3-padding" style="width: 35%">
            <div class="w3-black w3-hover-opacity-off w3-padding-4 w3-round-large">
              <hr />
              <p>press Buy <span>&#11088;</span> button</p>
              <hr />
            </div>
          </div>
        </div>
        <div class="mySlides w3-animate-opacity" style="display: none">
          <img class="w3-image" src="./index_files/MEDIA/s2.png" alt="Image 2" width="1500" height="1000" />
          <div class="w3-display-left w3-padding" style="width: 35%">
            <div class="w3-black w3-hover-opacity-off w3-padding-4 w3-round-large">
              <hr />
              <p>Enter username and money in paypal paying methode</p>
              <hr />
            </div>
          </div>
        </div>
        <div class="mySlides w3-animate-opacity" style="display: none">
          <img class="w3-image" src="./index_files/MEDIA/s3.png" alt="Image 3" width="1500" height="1000" />
          <div class="w3-display-left w3-padding" style="width: 35%">
            <div class="w3-black w3-hover-opacity-off w3-padding-4 w3-round-large">
              <hr />
              <p>Weait 2-3 min for system updeate, Enjoy !!!</p>
              <hr />
            </div>
          </div>
        </div>
        <a class="w3-button w3-block w3-black" onclick="plusDivs(1)">See nex step <i class="fa fa-angle-right"></i></a>
      </header>
    </div>

    <div class="w3-half w3-section">
      <ul class="w3-ul w3-card w3-hover-shadow">
        <li class="w3-red w3-xlarge w3-padding-32">About peyment</li>
        <li class="w3-padding-16"><b>Good </b> filling</li>
        <li class="w3-padding-16"><b>Verification+ </b> trusting</li>
        <li class="w3-padding-16"><b>Suporting </b> 1kinger projekts</li>
        <li class="w3-padding-16"><b>One </b> time payment</li>
        <li class="w3-padding-16">
          <h2 style="text-align: left; font-size: 27px">
            <span>&#11088;</span><span>1.33 &euro; - 13.29 &euro;</span><br />
            <span>&#11088;&#11088;</span><span>13.30 &euro; - 33.09 &euro;</span><br />
            <span>&#11088;&#11088;&#11088;</span><span>33.10 &euro; - <i class="fas fa-infinity"></i></span>
          
            </h2>
        </li>
        <li class="w3-light-grey w3-padding-24">
          <button id="BYSKO"  class="w3-button w3-black w3-padding-large">
            BUY <span style="font-size: 32px">&#11088;</span>
          </button>
          <form class="topay"  id="topay" style="display:none;"><button></button></form>
        </li>
      </ul>
    </div>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "price_detals",
  },
});

var signqqee = new Vue({
  el: "#PRICE_DETALS",
  store: store,
});
