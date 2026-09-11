// cookie

var cookie_box = document.getElementById("cookie_box"),
  activeBtn = document.getElementById("activeBtn");

activeBtn.addEventListener("click", function () {
  //UTC is time set by the world time standard
  document.cookie =
    "CookieBy=InventionTricks; expires=" + new Date(2022, 0, 1).toUTCString();
  //This cookies expires after 30 days
  document.cookie = "Name=KC-Developpement; max-age=" + 60 * 60 * 24 * 30;
  document.cookie = "LastName=Oussama Grissi; max-age=" + 60 * 60 * 24 * 30;

  if (document.cookie) {
    //Hide the popup box
    cookie_box.classList.add("hide");
  } else {
    //If we block cookie setting then show this massege
    alert(
      "cookie non défini ! Veuillez autoriser ce site à partir de la configuration des cookies de votre navigateur"
    );
  }
});

function getCookieName(name) {
  var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
  return r ? r[1] : "";
}
var getCookieName = getCookieName("CookieBy");
//alert(getCookieName)
if (getCookieName === "InventionTricks") {
  //All time hide the popup box
  cookie_box.classList.add("hide");
}
