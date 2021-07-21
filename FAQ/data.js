const Title = "FAQ about MyLocal";
const TXT = "Here can fina all important FAQ";
const WebUrl = "https://mylocal.sytes.net";
const LogoSRC = WebUrl + "/index_files/MEDIA/BREND.png";
const LastUpdejt = "Date of last change : 21/7/2021";
const DATA = {
  "Interduction ": [
    "This term of use is seample and easy for read and understanding because is used everday daily words, that arent so irelevantn to coperhentdte the aspec of viev preimer subject , That was just simple short example that will not see in this term of use, our goal isnt to show and confused costumers with inregular and lowfreqfently words.",
  ],
  "who is THIS?": ["THIS is onlin virtuel ecommerc shop that serv to our costumers that wanna our selling product."],
  "is there any refund avaiability??": [
    "yea, there is but refund is one procedura with extra steps,, you need to explain why wanna that refund and send few (2-5 ) photos of product. We alcept the  100% money refund only in folowing case: <br> ecomerc and/or shippment partther dameage the product <br> costumer isnt satisfaited from product within 5 days of arive.",
    "89",
  ],
  "shipping ": [
    "shipping by defalt is for germany via DeuchePost & DHL.",
    "for other contery you need to pey Pauschal +%20E for shipment of total preise, after paying the sipment, that difrence betwinw shipment cost and 20% e wil be send back to buyer via paypal.",
  ],
  "payment service": [
    "for payment we use only PAYPAL. Paypal was desing to slove all this trusting trading betwine seler and costumer, Also Paypal as third party is perfet “neutral player “ complay if samone do shamthink that shouldnt.",
  ],
  "Peyment prodedura": [
    "HERE is that in video explain.after you order your order, you become one automation email from us with Belstelung ID,total , order data, and destinatio shipment. Then you (or somon else for you) can pay the order via paypal. In order title put Betelung ID , in money put totla suma, then you (and we) will become one automation email from paypal for sucsesfull beasnieese deal done, plss dont delete these 2 emails if wanna complain or refund.",
    "we dont care and dont ask who is paying your order, you can send our automated email to anyone , they cant edit ,change or delete that order, and therent so sensitivite information so you can forwvar that email to  somone you know.",
  ],
  "contact us": [
    "for things that arent so immportant plss use our email contact, and for urgent situation use our telefon numbers.",
    "for product detals --- sdadja@gmail.com <br> for specific order detals  s ituation --- asdasd@gmail.com <br> for financial quastions--- akd'gmai.com <br> for bieasnus opurtunities ---- dasdsadl@gmail.com.",
  ],
  "comunication ": [
    "we are firm that have globaly plan for beasnise so you can communicate with us in folowing leangue :<br> eanglish<br>german<br>Srb-Croation<br>Macedonion ",
    "we have some relative helpful personal that can helup us in our comunication in folofing langue:<br> Polnisch<br>Italanisch<br>Albanisch<br>",
  ],
  "our start": ["XXX is created in somthink like half year in hiden hobby plan and started publicly in 10/ 8/2020 to operate globaly on internet."],
  "Better privacy polycy than GDR5": [
    "we dont use coocies,google analitick,newsletter subscription,account login,plugins , adds, rsd ,,etc . That is beacause ve value privecy of our visitors.",
    "only we as we take order Data , paypal as make payment proces and shipment service will know fragment of our deal.",
  ],
  "techicaly poweider": ["this website is in full control devolpment and created by M comcept Company Group, You can learn lore aboout M comcept company group here."],
  "vat ": ["we ahave all lgegal finance tikets save for all artikla that we buy , and they stay by us."],
  "agriment updates / upgrades": ["This aggreament have right to be changet only by autor of this agriment."],
  "Bottom line": [
    "This aggriment is created by m comcept company group, for futere discusion , question and/or beasnise deal , contact <br>darko angelov  --  ceo@mccge.tel. com,,  <br>   01520751315764",
  ],
};
document.getElementsByTagName("TITLE")[0].innerHTML = Title;
document.getElementById("TXT").innerHTML = TXT;
document.getElementById("LOGO").src = LogoSRC;
document.getElementById("Link").innerHTML = WebUrl;

let blanko = document.getElementById("Blanko").children[0];
let N = 0;
for (i in DATA) {
  N = N + 1;
  cl(i, DATA[i], N);
}
document.getElementById("Blanko").remove();

document.getElementById("dtUPDATE").innerHTML = LastUpdejt;
function cl(d, D, n) {
  let i_d = "colapse" + n;
  var cln = blanko.cloneNode(true);
  cln.getElementsByClassName("panel-heading")[0].setAttribute("href", "#" + i_d);
  cln.getElementsByClassName("panel-title")[0].innerHTML = d;
  cln.getElementsByClassName("panel-collapse collapse")[0].id = i_d;
  cln.getElementsByClassName("panel-body")[0].innerHTML = D[0];
  if (D.length == 2) {
    cln.getElementsByClassName("panel-footer")[0].innerHTML = D[1];
  } else {
    cln.getElementsByClassName("panel-footer")[0].remove();
  }
  document.getElementById("FAQ").appendChild(cln);
}
