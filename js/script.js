window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.pageYOffset > 80) {
    header.style.top = "30px";
  } else {
    header.style.top = "-60px";
  }
};
