var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " active"
  captionText.innerHTML = dots[slideIndex-1].alt
}

function checkTitle() {
  
  var inputTitle = document.getElementById('in').value;


  var currentSlideIndex = slideIndex;

  // give the  loction with order
var titles = {
  1: "Pacaya Volcano",
  2: "Tikal",
  3: "The Aurora Borealis",
  4: "Victoria Falls",
  5: "Victoria Falls",
  6: "Petra Jordan"
};


if (titles.hasOwnProperty(currentSlideIndex)) {
 
  if (inputTitle.toLowerCase() === titles[currentSlideIndex].toLowerCase()) {
    alert("Yes, you found it!");
  } else {
    alert("No, this is not correct.");
  }
} else {
  alert("Invalid slide index or title not defined.");
}
}