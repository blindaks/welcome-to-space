// import Typewriter from "typewriter-effect/dist/core";

let button1 = document.querySelector("#button-1");
let button2 = document.querySelector("#button-2");
let button3 = document.querySelector("#button-3");

function display(response) {
  new Typewriter("#result-container", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function displayFact() {
  let key = "07f2db5d81d18450d2d162fbo30aat29";
  let context =
    "You are a 'Did you know?' fact generator. You generate facts only about space. Be clear and concise. Don't repeat jokes.";
  let prompt = "Generate a fact about space.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(url).then(display);
}

function displayJoke() {
  let key = "07f2db5d81d18450d2d162fbo30aat29";
  let context =
    "You are a joke generator. You generate jokes only about space. Be unique, clear and concise.";
  let prompt = "Generate a joke about space.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(url).then(display);
}

function displayPoem() {
  let key = "07f2db5d81d18450d2d162fbo30aat29";
  let context =
    "You are a poem generator. You generate poems only about space. Be short and concise and creative.";
  let prompt = "Generate a poem about space.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(url).then(display);
}

button1.addEventListener("click", displayFact);
button2.addEventListener("click", displayJoke);
button3.addEventListener("click", displayPoem);

const audio = document.getElementById("background-music");
audio.volume = 0.5; // Set volume to 50%
audio.muted = false; // Ensure it's not muted
