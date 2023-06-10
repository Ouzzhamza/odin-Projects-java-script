window.onload  = onloadFunction();

var greetingsWrapper;
var showContainers;
var battleContainer;
var weaponsContainer;
var computerAttr;
var userAttr;
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore= 0;

function onloadFunction() {
  fadeIn();
  setTimeout(()=> {
    startGame();
  }, 6000);
}

function fadeIn() {
  animateText();
  setTimeout(() =>{
  greetingsWrapper.textContent = "Let's find out if you're lucky today!";
  animateText();
  }, 3000);
  setTimeout(()=> {
    greetingsWrapper.textContent = "choose your weapon";
    animateText();
  
  }, 6000);
}

function animateText() {
  greetingsWrapper = document.querySelector('.greetings .text-wraper');
  greetingsWrapper.innerHTML = greetingsWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
  .add({
    targets: '.greetings .letter',
    scale: [0, 1],
    duration: 1000,
    elasticity: 1000,
    delay: (el, i) => 50 * (i+1),
  })
}


function startGame() {
  showMainContainer();
  showResultContainer();
  picturesEffects();
  // resultFunction();
  changeContainers();

}


function showMainContainer() {
  showContainers = document.querySelector('.weapons__container');
  showContainers.style.display = "flex";
  showContainers.style.animation = " fade-in 5s linear infinite";
  showContainers.style.animationIterationCount = "1";
}


function showResultContainer() {

  showResults = document.querySelector('.result__container');
  showResults.style.display = "flex";
  showResults.style.animation = " fade-in 5s linear infinite";
  showResults.style.animationIterationCount = "1";

}


function picturesEffects() {

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
  
}


function changeContainers() {
  document.querySelectorAll('.main__img').forEach(function(image){
    image.addEventListener("click", (event)=> {
      hideWeaponsContainer();
      showButtleContainer();
    });
  });
}


function hideWeaponsContainer() {
  let target = event.target;
  let domElement = target instanceof Node ? target : document.getElementById(target);
  weaponsContainer = domElement.parentElement;
  weaponsContainer.style.display = "none";
}


function showButtleContainer() {

  setComputerChoice();
  setUserChoice();
  setProperChoices();
  battleContainer = document.querySelector('.battle__container');
  let animation = document.querySelector('.main__img');
  battleContainer.style.display = "flex";
  returnToDefault();
}


function setComputerChoice() {

computerChoice = document.getElementById('computer__picture');
const images = ["paper.svg", "rock.svg", "scissors.svg"];
const randomImage = images[Math.floor(Math.random() * images.length)];
computerChoice.setAttribute('src', `./pictures/${randomImage}`);
computerAttr = computerChoice.getAttribute('src');
}

function setUserChoice() {

  userChoice = document.getElementById('user__picture');
  userAttr =  event.target.getAttribute('src');
}


function returnToDefault() {
  setTimeout(() => {
    checkScoore();
    battleContainer.style.display = "none";
    weaponsContainer.style.animation = "0s";
    weaponsContainer.style.display = "flex";
  }, 1500);
}

  function setProperChoices() { 
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

    // console.log(userScore);
    document.querySelector('#user__scoor').innerHTML = userScore;
    document.querySelector('#computer__scoor').innerHTML = computerScore;
}


function checkScoore() {

  if (userScore == 5 || computerScore == 5) {
    setEngGamePage();
    let main = document.querySelector('.main');
    main.style.display = "none"
    let retrydiv = document.querySelector('.end__game');
    retrydiv.style.display = "flex";
  }
}


function setEngGamePage() {
  
  let text = document.querySelector('.end__message');
  if (userScore == 5)
    text.textContent = "you won it's your lucky day, go buy some lottery";
    document.querySelectorAll('.retry').forEach(function(button){
      button.addEventListener("click", retry);
    });
}

function retry(){
  console.log("ret");
  userScore = 0;
  computerScore = 0;
  document.querySelector('#user__scoor').innerHTML = userScore;
  document.querySelector('#computer__scoor').innerHTML = computerScore;
  let main = document.querySelector('.main');
  main.style.display = "block"
  let retrydiv = document.querySelector('.end__game');
  retrydiv.style.display = "none";
}
