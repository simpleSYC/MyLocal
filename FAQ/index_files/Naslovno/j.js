Vue.component("naslovo", {
    template: `<div> 
<div id="google_translate_element"></div>
<script type="text/javascript">function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');}</script>  
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</div>`})
var store="";
    var storeqqee = new Vuex.Store({
    state: {
      view:"naslovo"
    }
    })   

    var signqqee = new Vue({
    el:"#Naslovnoto",
    store: store
    })