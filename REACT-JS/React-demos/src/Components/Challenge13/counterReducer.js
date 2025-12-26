const inittialState = { count: 0 };

function counterreducer(state, action) {
  if (action.type === "increment") {
    return {...state, count: state.count + 1 };
  } else if (action.type === "decrement") {
    return {...state, count: state.count - 1 };
  } else if (action.type === "reset") {
    return {...state, count: 0 };
  } else if (action.type === "incrementByValue") {
    return {...state, count: state.count + action.payload };
  } else if (action.type === "decrementByValue") {
    return {...state, count: state.count - action.payload };
  }
}

//state is from inittialState now it has only {count: 0} but if it has {count: 0, machineOn: true} it will tate entire state by {...state}

export { inittialState, counterreducer };
