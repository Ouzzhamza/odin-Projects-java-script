let salutationWrapper = document.querySelector('.salutation .text-wraper');
salutationWrapper.innerHTML = salutationWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false})
  .add({
    targets: '.salutation .letter',
    // The animation scales the letters in the salutation element from 0 to 1 size over 1000ms.
    scale: [0, 1],
    duration: 1000,
    elasticity: 1000,

    // The animation has a delay of 50ms for each letter.
    delay: (el, i) => 50 * (i+1)

  })


setTimeout(() => {
  // After 4000ms, the code updates the text of the h1 element and the contents of the salutationWrapper element.
  let h1 = document.getElementById('salut');
  h1.textContent= "Let's find out if you're lucky today!";
  salutationWrapper.innerHTML = salutationWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.salutation .letter',
    scale: [0, 1],
    duration: 1000,
    elasticity: 1000,
    delay: (el, i) => 50 * (i+1)
  })
}, 4000)



setTimeout(() => {
  // After 7000ms, the code updates the text of the h1 element and the contents of the salutationWrapper element.
  let h1 = document.getElementById('salut');
  h1.textContent = "choose your weapon";
  salutationWrapper.innerHTML = salutationWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
  .add({
    targets: ".salutation",
    scale: [0, 1],
    duration: 1000,
    elasticity: 1000,
  })
}, 7000)

setTimeout(() => {
let h1 = document.getElementById('salut');
h1.textContent = "";
}, 10000)



// The zoomImage function scales the image it is called on by 1.09 and adds a cursor pointer and boxShadow of 0 0 25px white.
function zoomImage(event) {
  let image = event.target;
  let scale = 1.09;
  image.style.transform = "scale(" + scale + ")";
  image.style.cursor = 'pointer';
  image.style.boxShadow = "0 0 25px white";
}



// The removeZoomEffect function scales the image it is called on back to 1 and removes the boxShadow.
function removeZoomEffect(event) {
  var image = event.target;
  image.style.transform = "scale(1)";
  image.style.boxShadow = "0 0";
}


// The document.querySelectorAll('.main__img') function gets all elements with the class main__img.
// The forEach() function iterates over the elements and calls the zoomImage function on mouseover and the removeZoomEffect function on mouseleave.
document.querySelectorAll('.main__img').forEach(function(image) {
  image.addEventListener("mouseover", zoomImage);
  image.addEventListener("mouseleave", removeZoomEffect);
});

function computerPicture() {
  // computer random picture 
const computerPicture = document.getElementById('computer__picture');

const images = ["paper.svg", "rock.svg", "scissors.svg"];

// Get a random image from the images array.
const randomImage = images[Math.floor(Math.random() * images.length)];

console.log(computerPicture.src);
// Set the computer__picture element to the random image.
computerPicture.src = `./pictures/${randomImage}`;

console.log(computerPicture.src);
}

function showResult(event) {

  computerPicture();
  // get the target
  let target = event.target;

  // Cast the target to a DOMElement object
  let domElement = target instanceof Node ? target : document.getElementById(target);

  // Get the parent container of the DOMElement object
  let weaponsContainer = domElement.parentElement;
  let battleContainer = document.querySelector('.battle__container');
  let animation = document.querySelector('.main__img');
  weaponsContainer.style.display = "none";
  battleContainer.style.display = "flex";

  // sho
  setTimeout(() => {
    battleContainer.style.display = "none";
    weaponsContainer.style.animation = "0s";
    weaponsContainer.style.display = "flex";
  }, 1000);
  
}

document.querySelectorAll('.main__img').forEach(function(image){
  image.addEventListener("click", showResult);
});


