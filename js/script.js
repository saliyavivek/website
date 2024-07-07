window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.pageYOffset > 100) {
    header.style.top = "30px";
  } else {
    header.style.top = "-100px";
  }
};

let bars = document.getElementById("bars");
let openNavbar = document.getElementById("openNavbar");
bars.addEventListener("click", () => {
  if (openNavbar.style.display == "none") {
    openNavbar.style.display = "block";
  } else {
    openNavbar.style.display = "none";
  }
  bars.classList.toggle("change");
});
