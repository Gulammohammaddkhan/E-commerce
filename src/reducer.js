const initialState = {
  cartQuantity: null,
  cartProducts: [],
  
};

export function myReducer(state = initialState, action) {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      cartQuantity: state.cartQuantity + 1,
      cartProducts: [...state.cartProducts, action.payload],
      
    };
  } else {
    return state;
  }
}

 export function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].price;
  }

  return total;
} 
