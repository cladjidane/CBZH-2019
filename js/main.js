// Slideshow
var slideIndex = 1;
cbzh_slides(slideIndex);

function plusSlides(n) {
  cbzh_slides(slideIndex += n);
}

function currentSlide(n) {
  cbzh_slides(slideIndex = n);
}

function cbzh_slides(n) {
  var i;
  var slides = document.getElementsByClassName("cbzh-slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}