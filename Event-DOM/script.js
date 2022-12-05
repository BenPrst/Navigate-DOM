const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

/**************************************/

let greenSquare = document.querySelector(".actionsquare.green");
let violetSquare = document.querySelector(".actionsquare.violet");
let orangeSquare = document.querySelector(".actionsquare.orange");
let body = document.querySelector("body");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");
let div = document.createElement("div");
let dis = document.querySelector(".displayedsquare-wrapper");

function alertgreen() {
  alert("green");
}

greenSquare.addEventListener("click", greenFunction);

function greenFunction() {
  let div = document.createElement("div");
  div.classList.add("actionsquare", "green", "greenalert");
  let dis = document.querySelector(".displayedsquare-wrapper");
  dis.appendChild(div);
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = "[" + [getElapsedTime()] + "]" + " Created a new green square";
  let greenalert = document.querySelector(".greenalert");
  greenalert.addEventListener("click", alertgreen);
}

function alertviolet() {
  alert("violet");
}

violetSquare.addEventListener("click", violetFunction);

function violetFunction() {
  let div = document.createElement("div");
  div.classList.add("actionsquare", "violet", "violetalert");
  let dis = document.querySelector(".displayedsquare-wrapper");
  dis.appendChild(div);
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML =
    "[" + [getElapsedTime()] + "]" + " Created a new violet square";
  let violetalert = document.querySelector(".violetalert");
  violetalert.addEventListener("click", alertviolet);
}

function alertorange() {
  alert("orange");
}

orangeSquare.addEventListener("click", orangeFunction);

function orangeFunction() {
  let div = document.createElement("div");
  div.classList.add("actionsquare", "orange", "orangealert");
  let dis = document.querySelector(".displayedsquare-wrapper");
  dis.appendChild(div);
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML =
    "[" + [getElapsedTime()] + "]" + " Created a new orange square";
  let orangealert = document.querySelector(".orangealert");
  orangealert.addEventListener("click", alertorange);
}

onkeydown = (event) => {
  if (event.code === "Space") {
    body.style.backgroundColor = randomRgbColor();
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      "[" + [getElapsedTime()] + "]" + " Change the background color.";
  } else if (event.code === "KeyL") {
    while (ul.childElementCount > 0) {
      ul.removeChild(ul.lastElementChild);
    }
  } else if (event.code === "KeyS") {
    while (dis.childElementCount > 0) {
      dis.removeChild(dis.lastElementChild);
    }
  }
};

function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
