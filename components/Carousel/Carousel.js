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
  mountains.src = "./assets/carousel/mountains.jpeg";
  mountains.textContent = "./assets/carousel/mountains.jpeg";
 // computer.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.src = "./assets/carousel/turntable.jpeg";
  rightButton.classList.add('right-button');
  rightButton.textContent = ">";

  carousel.appendChild(leftButton);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightButton);

  // carousel.addEventListener('click', event => {
  //   console.log('button clicked', event.target)
    
  // })

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(CreateCarousel());
console.log(carouselContainer);
