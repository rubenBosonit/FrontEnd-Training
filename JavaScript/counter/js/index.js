let counter = 0;
let interval;
let running = false;
let increasing = true;
let cInterval;
let step;

document.getElementById("start-button").onclick = handleStart;
document.getElementById("pause-button").onclick = handlePause;
document.getElementById("reset-button").onclick = handleReset;
document.getElementById("count-up-button").onclick = handleIncrease;
document.getElementById("count-down-button").onclick = handleDecrease;

document.getElementById("number-input").onchange = handleSetNumber;
document.getElementById("number-interval").onchange = handleNumberInterval;

function handleStart() {
  running = true;
  interval = parseInt(document.getElementById("number-interval").value);
  cInterval = setInterval(contador, interval * 1000);
}

function handlePause() {
  if (running) {
    running = false;
    clearInterval(cInterval);
  } else {
    handleStart();
  }
  printInfo();
}

function handleReset() {
  counter = 0;
  setCounterNumber(counter);
}

function handleIncrease() {
  increasing = true;
}

function handleDecrease() {
  increasing = false;
}

function handleSetNumber() {
  let settedNumber = parseInt(document.getElementById("number-input").value);

  setCounterNumber(settedNumber);
  counter = settedNumber;
  console.log(counter);
}

function handleNumberInterval() {
  if (running) {
    clearInterval(cInterval);
  }
  //handleStart(); If I write this line the counter will be modified twice
}

function contador() {
  step = parseInt(document.getElementById("step-input").value);
  printInfo();
  if (increasing) {
    counter += step;
  } else {
    counter -= step;
  }
  setCounterNumber(counter);
}
function setCounterNumber(counterNumber) {
  printInfo();
  document.getElementById("number").innerHTML = counterNumber;
}

function printInfo() {
  document.getElementById(
    "info"
  ).innerHTML = `${counter}{"count":${running},"countUp":${increasing},"speed":${
    interval * 1000
  },"step":${step}}`;
}
