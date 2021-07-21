Vue.component("paymento", {
  template: `
  
<div class="w3-modal-content" style="padding: 32px">
  <div class="w3-container w3-white">
    <a id="X_PYMNT" class="w3-xlarge w3-right w3-xlarge">X</a>

    <p>pls pey attention to UserName is CaseSensitive !</p>
    <div id="smart-button-container">
      <div style="text-align: center"><label for="description">UserName : </label><input type="text" name="descriptionInput" id="description" maxlength="127" value="" style="max-width: 80%" /></div>
      <p id="descriptionError" style="visibility: hidden; color: red; text-align: center">Please enter a description</p>
      <div style="text-align: center"><label for="amount">Peyment € :</label><input name="amountInput" type="number" id="amount" value="" style="max-width: 80%" /><span> EUR</span></div>
      <p id="priceLabelError" style="visibility: hidden; color: red; text-align: center">Please enter a price</p>
      <div id="invoiceidDiv" style="text-align: center; display: none"><label for="invoiceid"> </label><input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="" /></div>
      <p id="invoiceidError" style="visibility: hidden; color: red; text-align: center">Please enter an Invoice ID</p>
      <div style="text-align: center; margin-top: 0.625rem" id="paypal-button-container"></div>
    </div>
  </div>

</div>
`,
});

var store = new Vuex.Store({
  state: {
    view: "paymento",
  },
});

var signqqee = new Vue({
  el: "#PAYMENTO",
  store: store,
});
