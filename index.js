let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let day = 1;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = "Day " + day + ": " + count  + "\n";
    day++;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

const reset = () =>{
    count = 0;
    day = 1;
    saveEl.textContent = "Snooze History:";
    countEl.textContent = 0;
}
