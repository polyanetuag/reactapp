import React from "react";

 function reducer(state, action) {
  console.log('action')
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
 }

const App = () => {
  const [state, dispatch] = React.useReducer(reducer,0);
  return (
    <div>
      
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default App;
