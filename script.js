let count = 0;
let countElement = document.getElementById("count");

function increment() {
  count++;
  countElement.innerText = count;
}

function save(){
  let saveEl = document.getElementById("save-el");
  saveEl.textContent += count + " - ";
  countElement.textContent = 0;
  count = 0;
}

