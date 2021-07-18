Vue.component("headerot", {
  template: `
  <div>
    <div header class="w3-top">
      <div class="w3-row w3-padding w3-black">
        <div class="w3-col s3">
          <a href="#" class="w3-button w3-block w3-black">HOME</a>
        </div>
        <div class="w3-col s3">
          <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
        </div>
        <div class="w3-col s3">
          <a href="#menu" class="w3-button w3-block w3-black">Search</a>
        </div>
        <div class="w3-col s3">
          <a style="position: inherit; margin-top: -6px; padding: 0" onclick="window.open('./USER');" class="w3-button w3-block w3-black"
            >Log in <br />
            Sing up</a
          >
        </div>
      </div>
    </div>
    <div class="slideshow-container">
      <div class="mySlides fade">
        <img class="F_f" src="./index_files/MEDIA/f_0.jpg" />
      </div>
      <div class="mySlides fade">
        <img class="F_f" src="./index_files/MEDIA/f_1.jpg" />
      </div>
      <div class="mySlides fade">
        <img class="F_f" src="./index_files/MEDIA/f_2.jpg" />
      </div>
      <div class="mySlides fade">
        <img class="F_f" src="./index_files/MEDIA/f_3.jpg" />
      </div>
      <div style="text-align: center; position: relative; top: -30px"><span class="dot"></span> <span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    </div>
  </div>
  `,
});
var store = "";
var storeqqee = new Vuex.Store({
  state: {
    view: "headerot",
  },
});

var signqqee = new Vue({
  el: "#HEDAROT",
  store: store,
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3333); // Change image every 2 seconds
}
