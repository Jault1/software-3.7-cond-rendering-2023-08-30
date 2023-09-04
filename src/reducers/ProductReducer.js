// Create a default product that shows on page load */
export const defaultProduct = {
  count: 1,
  discount: 0,
  name: 'Banana',
  price: 2.99,
}

// useReducer function - gets current state and action and returns the NEW STATE
export function productReducer(state, action) {
      // Copy current state to alter in the PLUS and MINSU of the switch statement and return the newState with the new
      // count & disount
      // OR return the OLD OR CURRENT state with the new product.name or new product.price
  switch (action.type) {
    case 'PLUS_COUNT': {
      let newState = {...state};
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      return newState; 
    }
    case 'MINUS_COUNT': {
      let newState = {...state};
      newState.count = state.count - 1;
      if (newState.count < 5) {
        newState.discount = 0;
      }
      if (newState.count < 0)
        newState.count = 0;
      return newState;
    }
    case 'SET_NAME': {
      return {...state, name: action.name }
    }   
    case 'SET_PRICE': {
      return {...state, price: action.price }
    }   
    default:
      throw Error('productReducer: unknown action:' + action.type);
  }
}