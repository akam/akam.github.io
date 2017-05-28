window.onload = function() {
  var close = document.querySelector(".alert");
  close.addEventListener("click", function(){
    close.parentNode.removeChild(close);
  })
}