Vue.component("headarot", {
    template: `<div>
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
          <a style="position: inherit;margin-top: -6px;padding: 0;" onclick="window.open('https://mylocal.sytes.net/USER');" class="w3-button w3-block w3-black">Log in <br> Sing up</a>
        </div>
      </div>
    </div>
    
    <br><br>
    
    <div class="slideshow-container">  
    <div class="mySlides fade">
    <img class="F_f" src="index_files/MEDIA/f_0.jpg"></div>
    <div class="mySlides fade">
    <img class="F_f" src="index_files/MEDIA/f_1.jpg"></div>
    <div class="mySlides fade">
    <img class="F_f" src="index_files/MEDIA/f_2.jpg"></div>
    <div class="mySlides fade">
    <img class="F_f" src="index_files/MEDIA/f_3.jpg"></div>
    <div style="text-align:center;position:relative;top: -30px;">
    <span class="dot"></span> <span class="dot"></span><span class="dot"></span><span class="dot"></span> </div>
    </div>
    


</div>`})
 var store="";
    var storeqqee = new Vuex.Store({
    state: {
      view:"headarot"
    }
    })   

    var signqqee = new Vue({
    el:"#Headersko",
    store: store
    })