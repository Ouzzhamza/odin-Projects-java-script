//global variable of user choice  and comouter choice

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore= 0; 




let greetingsWrapper = document.querySelector('.greetings .text-wraper');
greetingsWrapper.innerHTML = greetingsWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


// The document.querySelectorAll('.main__img') function gets all elements with the class main__img.
// The forEach() function iterates over the elements and calls the zoomImage function on mouseover and the removeZoomEffect function on mouseleave.
document.querySelectorAll('.main__img').forEach(function(image) {
  image.addEventListener("mouseover", zoomImage);
  image.addEventListener("mouseleave", removeZoomEffect);
});

document.querySelectorAll('.main__img').forEach(function(image){
  image.addEventListener("click", showResult);
});


anime.timeline({loop: false})
  .add({
    targets: '.greetings .letter',
    // The animation scales the letters in the greetings element from 0 to 1 size over 1000ms.
    scale: [0, 1],
    duration: 1000,
    elasticity: 1000,

    // The animation has a delay of 50ms for each letter.
    delay: (el, i) => 50 * (i+1)

  })


setTimeout(() => {
  // After 4000ms, the code updates the text of the h1 element and the contents of the greetingsWrapper element.
  let h1 = document.getElementById('salut');
  h1.textContent= "Let's find out if you're lucky today!";
  greetingsWrapper.innerHTML = greetingsWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.greetings .letter',
    scale: [0, 1],
    duration: 1000,
    elasticity: 1000,
    delay: (el, i) => 50 * (i+1)
  })
}, 4000)



setTimeout(() => {
  // After 7000ms, the code updates the text of the h1 element and the contents of the greetingsWrapper element.
  let h1 = document.getElementById('salut');
  h1.textContent = "choose your weapon";
  greetingsWrapper.innerHTML = greetingsWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
  .add({
    targets: ".greetings",
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



function computerChoiceFunction() {

computerChoice = document.getElementById('computer__picture');

const images = ["paper.svg", "rock.svg", "scissors.svg"];

// Get a random image from the images array.
const randomImage = images[Math.floor(Math.random() * images.length)];


computerChoice.setAttribute('src', `./pictures/${randomImage}`);

}


  function comparingChoices(userAttr, computerAttr) { 
    // console.log(userAttr);
    // console.log(computerAttr);
    userChoice.setAttribute("src", userAttr); 
    computerChoice.setAttribute("src", computerAttr); 

    if (userAttr === "./pictures/paper.svg" && computerAttr === "./pictures/rock.svg") { 
      userChoice.setAttribute("src", "./pictures/winner-paper.svg"); 
      computerChoice.setAttribute("src", "./pictures/loser-rock.svg");
      userScore = ++userScore;
    }
    if (userAttr === "./pictures/paper.svg" && computerAttr === "./pictures/scissors.svg") {
      userChoice.setAttribute("src", "./pictures/loser-paper.svg"); 
      computerChoice.setAttribute("src", "./pictures/winner-scissors.svg");
      computerScore= ++computerScore;
    } 
    if (userAttr === "./pictures/scissors.svg" && computerAttr === "./pictures/paper.svg") { 
      userChoice.setAttribute("src", "./pictures/winner-scissors.svg");
      computerChoice.setAttribute("src", "./pictures/loser-paper.svg");
      userScore = ++userScore;
    }
    if (userAttr === "./pictures/scissors.svg" && computerAttr === "./pictures/rock.svg") { 
      userChoice.setAttribute("src", "./pictures/loser-scissors.svg"); 
      computerChoice.setAttribute("src", "./pictures/winner-rock.svg"); 
      computerScore= ++computerScore;
    }
    if(userAttr === "./pictures/rock.svg" && computerAttr === "./pictures/scissors.svg") { 
      userChoice.setAttribute("src", "./pictures/winner-rock.svg"); 
      computerChoice.setAttribute("src", "./pictures/loser-scissors.svg"); 
      userScore = ++userScore;
    }
    if(userAttr === "./pictures/rock.svg" && computerAttr === "./pictures/paper.svg") {
      userChoice.setAttribute("src", "./pictures/loser-rock.svg");
      computerChoice.setAttribute("src", "./pictures/winner-paper.svg");
      computerScore= ++computerScore;
    }

    console.log(userScore);
    document.querySelector('#user__scoor').innerHTML = userScore;
    document.querySelector('#computer__scoor').innerHTML = computerScore;
    // document.getElementById('user__scoor').set = userScore;
    // document.getElementById('computer__scoor').setAttribute('h3', computerScore);
    // console.log(document.getElementById('user__scoor').getAttribute('h3'));
    // console.log(document.getElementById('user__scoor').getAttribute('h3'));
}



function showResult(event) {

  computerChoiceFunction();
  userChoice = document.getElementById('user__picture');

  let userAttr =  event.target.getAttribute('src');
  let computerAttr = computerChoice.getAttribute('src');
  comparingChoices(userAttr, computerAttr);
 
  //~ this part works on replacing the weapons__container by battle__container
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


  setTimeout(() => {
    battleContainer.style.display = "none";
    weaponsContainer.style.animation = "0s";
    weaponsContainer.style.display = "flex";
  }, 2000);
  // if (userScore == 2)
  // {
  //   // let winner_body = document.getElementsByTagName('body');
  //   document.body.style.opacity = "0";
  // }
  // document.body.style.opacity = "0";
  // if (computerScore == 2)
  // alert("ooh better luck next time");
}

let main = document.querySelector('.main');
main.style.display = "none"

