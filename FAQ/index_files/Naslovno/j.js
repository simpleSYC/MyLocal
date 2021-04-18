Vue.component("naslovo", {
    template: `<div>
   
<a style="margin-left: 10%;margin-top: 20px;" id="google_translate_element">
<div class="skiptranslate goog-te-gadget" style="display: none;" dir="ltr">
<div id=":0.targetLanguage" style="display: inline;">
<select class="goog-te-combo" aria-label="Language Translate Widget">
</select></div>&nbsp;&nbsp;Powered by <span style="white-space:nowrap">
<a class="goog-logo-link" href="https://translate.google.com" target="_blank">
<img width="37" height="14" style="padding-right: 3px" alt="Google Translate" src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png">Translate</a>
</span></div></a>


<script type="text/javascript">
function googleTranslateElementInit() {
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


   