import React, { useReducer } from 'react';

const initialState = {
  cart: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    { id: 1, name: 'Chocolate', price: 20 },
    { id: 2, name: 'Biscuits', price: 30 },
    { id: 3, name: 'Lays', price: 25 },
  ];

  const findCartItem = productId => state.cart.find(item => item.id === productId);

  const addToCart = product => {
    const existingItem = findCartItem(product.id);
    if (existingItem) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity: existingItem.quantity + 1 } });
    } else {
      dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
    }
  };

  const removeFromCart = product => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart</h3>
      <ul>
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
