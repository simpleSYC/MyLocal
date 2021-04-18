Vue.component("contractor", {
    template: `<div><button onclick="OpenContractor();" style="float: right;border-radius: 8px;margin-right: 10%;"
>still any quastion?? ask me now</button>
<div class="w3-modal" style="overflow:auto;display:none">
<div class="w3-modal-content" style="padding-top: 0%;">
<i class="fa fa-close" style="float: inline-end;margin: 20px;font-size: 33px;" onclick="this.parentElement.parentElement.style='display:none'"></i>
    <div class="w3-container"  style="padding-bottom:32px;">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">WHERE TO FIND US</span></h5>
    <p>Find us at some address at some place.</p>
    <p><span class="w3-tag">FYI!</span> We offer full-service catering 
for any event, large or small. We understand your needs and we will 
cater the food to satisfy the biggerst criteria of them all, both look 
and taste.</p>
    <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required="" name="Name"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required="" name="People"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required="" name="date" value="2017-11-16T20:00"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required="" name="Message"></p>
      <p><button class="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
    </form>
   </div>
   </div>

</div>
</div>
    


</div>`})
    var storeqqee = new Vuex.Store({
    state: {
      view:"contractor"
    }
    })   

    var signqqee = new Vue({
    el:"#Contractor",
    store: store
    })

function OpenContractor(){let mdl=document.getElementsByClassName("w3-modal")[0];

mdl.style.display="block";


}