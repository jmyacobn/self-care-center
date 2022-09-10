//Global Variables
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];
var randomAffirmation = affirmations[getRandomIndex(affirmations)];
var randomMantra = mantras[getRandomIndex(mantras)];

//Query Selectors
var affirmation = document.querySelector("#affirmation");
var mantra = document.querySelector("#mantra");
var receiveMessageButton = document.querySelector("#get-message");
var meditateImage = document.querySelector("#meditate-img");
var randomMessage = document.querySelector(".random-message")

//Event Listeners
receiveMessageButton.addEventListener("click", displayMessage);

//Functions and Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayMessage() {
  meditateImage.classList.add("hidden")
  randomMessage.classList.remove("hidden")
  var userInput = document.querySelector('input[name="selection"]:checked').value;
    if (userInput === "mantra") {
      randomMessage.innerText = randomMantra;
      return randomMessage;
    } else if (userInput === "affirmation") {
      randomMessage.innerText = randomAffirmation;
      return randomMessage;
    }
};
