// Increment function
function increment(btnId, stateId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const state = document.getElementById(stateId);
    let innerText = parseInt(state.innerText);
    if (innerText < 33) {
      state.innerText = innerText + 1;
    }
    if (stateId === "count-3") {
      state.innerText = innerText <= 33 ? innerText + 1 : state.innerText;
    }
  });
}

// Decrement function
function decrement(btnId, stateId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const state = document.getElementById(stateId);
    let innerText = parseInt(state.innerText);
    if(innerText > 0){
      state.innerText = innerText - 1;
    }
  });
}
//   restart function
function restart(btnId, arr) {
  document.getElementById(btnId).addEventListener("click", function () {
    for (let element of arr) {
      document.getElementById(element).innerText = 0;
    }
  });
}

// increment:
increment("increment-1", "count-1");
increment("increment-2", "count-2");
increment("increment-3", "count-3");

// decrement:
decrement("decrement-1", "count-1");
decrement("decrement-2", "count-2");
decrement("decrement-3", "count-3");

// restart:
restart("restart-all", ["count-1", "count-2", "count-3"]);
restart("restart-1", ["count-1"]);
restart("restart-2", ["count-2"]);
restart("restart-3", ["count-3"]);