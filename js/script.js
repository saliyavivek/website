window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.pageYOffset > 100) {
    header.style.top = "30px";
  } else {
    header.style.top = "-100px";
  }
};
