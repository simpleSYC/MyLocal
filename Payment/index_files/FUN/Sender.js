(function () {
  function paymento(event) {
    let Platiga = true;
    event.preventDefault();
    let ELMENTO = event.target;
    let data = getdata2pay(ELMENTO);

    let url = "https://script.google.com/macros/s/AKfycbzm448w6_iUp7gb0ikP0ocs7T0PcSmdXdcSgmSScACChR9_jAN7HwGq21N0hgAdaPpY/exec";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
      if (Platiga) {
        Platiga = null;
        let TxT = "Payment for this transaction \n" + data.BID + " with " + data.CENA + " euro. \n was sucsesfull payed !";
        alert(TxT);
      }
      return;
    };

    let encoded = Object.keys(data)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
    return;
  }
  function getdata2pay(form) {
    let elements = form.elements;
    let fields = Object.keys(elements)
      .filter(function (k) {
        return elements[k].name !== "honeypot";
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

    let formData = {
      KEYOT: $("title").text(),
      BID: form.getAttribute("bid"),
      CENA: form.getAttribute("cna"),
    };
    console.log(formData);
    return formData;
  }

  function loaded() {
    console.log("Contact form submission handler loaded successfully.");

    let TOPAY = document.querySelectorAll("form.topay");
    for (let i = 0; i < TOPAY.length; i++) {
      TOPAY[i].addEventListener("submit", paymento, false);
    }
  }

  document.addEventListener("DOMContentLoaded", loaded, false);
})();
