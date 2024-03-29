/* 
  COMMENT: with vanilla javascript
*/
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

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const incrementor = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrementor = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
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
  store.dispatch(incrementor(5));
});
decrement.addEventListener("click", () => {
  store.dispatch(decrementor(2));
});
