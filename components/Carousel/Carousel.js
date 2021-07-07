/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CreateCarousel(){
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  leftButton.textContent = "<";
  leftButton.onclick = () => { plusSlides(-1); };
  mountains.classList.add('mySlides', 'fade');
  mountains.src = "./assets/carousel/mountains.jpeg";
  computer.classList.add('mySlides', 'fade');
  computer.src = "./assets/carousel/computer.jpeg";
  trees.classList.add('mySlides', 'fade');
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.classList.add('mySlides', 'fade');
  turntable.src = "./assets/carousel/turntable.jpeg";
  rightButton.classList.add('right-button');
  rightButton.textContent = ">";
  rightButton.onclick = () => { plusSlides(1); };

  carousel.appendChild(leftButton);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightButton);


  return carousel;
}


const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(CreateCarousel());


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}