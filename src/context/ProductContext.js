// Get the useReducer AND createContext from Reach so we can use them
import { createContext, useReducer } from 'react';
// Get the const defaultProduct And the REDUCER FUNCTION
import { defaultProduct, productReducer } from '../reducers/ProductReducer';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerPlus = () => {
    dispatch({ type: 'PLUS_COUNT' });
  };
    const handlerMinus = () => {
    dispatch({ type: 'MINUS_COUNT' });
  };
  const handlerChangeName = (value) => {
    dispatch({ type: 'SET_NAME', name: value });
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: 'SET_PRICE', price: value });
  };

  const context = {
    count: state.count,
    discount: state.discount,
    name: state.name,
    price: state.price,
    handlerPlus: handlerPlus,
    handlerMinus: handlerMinus,
    handlerChangeName: handlerChangeName,
    handlerChangePrice: handlerChangePrice
  }
  
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext;