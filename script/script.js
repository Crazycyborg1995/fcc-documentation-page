let toggleButton = document.getElementById("toggle_icon"),
    navbar = document.getElementById("nav-bar");
toggleButton.addEventListener("click", function(e){
  this.classList.toggle("change");
  console.log(navbar);
  navbar.classList.toggle("slider");
})