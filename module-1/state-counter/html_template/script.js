/*
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resultEL = document.getElementById("result");

let state = 0;

increment.addEventListener("click", () => {
  state++;
  resultEL.textContent = state;
});
decrement.addEventListener("click", () => {
  state--;
  resultEL.textContent = state;
});
*/

/* 
  COMMENT: With redux CDN
*/

// select dom elements
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resultEL = document.getElementById("result");

// initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// create store
// eslint-disable-next-line no-undef
const store = Redux.createStore(counterReducer);
function render() {
  const state = store.getState();
  resultEL.textContent = String(state.value);
}

// update UI
render();
store.subscribe(render);

// action dispatch
increment.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
decrement.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
