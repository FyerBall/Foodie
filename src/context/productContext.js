// TODO Next create an api and use axios or fetch to fetch the data
import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { menu } from '../data';

export const IS_SIDEBAR_OPEN = 'IS_SIDEBAR_OPEN';
export const IS_SIDEBAR_CLOSE = 'IS_SIDEBAR_CLOSE';
// PRODUCTS
// TODO FOR USING API OR WHEN WE START LOADING
export const GET_PRODUCTS_ON_LOAD = 'GET_PRODUCTS_ON_LOAD';
export const GET_PRODUCTS_ON_SUCCESS = 'GET_PRODUCTS_ON_SUCCESS';
export const GET_PRODUCTS_ON_ERROR = 'GET_PRODUCTS_ON_ERROR';

// SINGLE PRODUCTS
// TODO FOR USING API OR WHEN WE START LOADING
export const GET_SINGLE_PRODUCTS_ON_LOAD = 'GET_SINGLE_PRODUCTS_ON_LOAD';
export const GET_SINGLE_PRODUCTS_ON_SUCCESS = 'GET_SINGLE_PRODUCTS_ON_SUCCESS';
export const GET_SINGLE_PRODUCTS_ON_ERROR = 'GET_SINGLE_PRODUCTS_ON_ERROR';

// FILTER
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

// CART
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const ITEMS_COUNT = 'ITEMS_COUNT';

function reducer(state, action) {
  if (action.type === IS_SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === IS_SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  // TODO FOR API
  if (action.type === GET_PRODUCTS_ON_LOAD) {
    return { ...state, isProductsLoading: true };
  }

  if (action.type === GET_PRODUCTS_ON_SUCCESS) {
    // get and filter LOCAL/FEATURED/TOP_RATED or whatever item from your DATA. ONLY IF NEEDED!!
    const localProduct = action.payload.filter((item) => item.local === true);

    // GET ALL THE ITEMS
    return {
      ...state,
      isProductsLoading: false,
      products: action.payload,
      featuredProducts: localProduct,
    };
  }
  if (action.type === GET_PRODUCTS_ON_ERROR) {
    return { ...state, isProductsLoading: false, isProductsError: true };
  }

  if (action.type === GET_SINGLE_PRODUCTS_ON_LOAD) {
    return {
      ...state,
      isSingleProductsLoading: true,
      isSingleProductsError: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCTS_ON_SUCCESS) {
    // TODO Filter and get single product === id
    const singleItem = action.payload;

    return {
      ...state,
      isSingleProductsLoading: false,
      singleProducts: singleItem,
    };
  }

  if (action.type === GET_SINGLE_PRODUCTS_ON_ERROR) {
    return {
      ...state,
      isSingleProductsLoading: false,
      isSingleProductsError: true,
    };
  }
  if (action.type === ADD_TO_CART) {
    let { id, price, amount, product } = action.payload;
    // Item is already in the cart
    const tempCart = state.cart.find((item) => item.id === id);
    if (tempCart) {
      const tempItem = state.cart.map((itemAmount) => {
        if (itemAmount.id === id) {
          let newAmount = itemAmount.amount + amount;

          return { ...itemAmount, amount: newAmount };
        } else {
          return itemAmount;
        }
      });

      return { ...state, cart: tempItem };
    } else {
      // adding a new item
      const newCart = {
        id,
        price,
        amount,
        image: product.images[0].image,
        name: product.title,
      };
      return { ...state, cart: [...state.cart, newCart] };
    }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === CHANGE_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.find((item) => item.id === id);
    if (tempCart) {
      const tempItem = state.cart.map((itemAmount) => {
        if (itemAmount.id === id && value === 'INC') {
          let newAmount = itemAmount.amount + 1;

          return { ...itemAmount, amount: newAmount };
        }
        if (itemAmount.id === id && value === 'DEC') {
          let newAmount = itemAmount.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...itemAmount, amount: newAmount };
        } else {
          return itemAmount;
        }
      });

      return { ...state, cart: tempItem };
    }
  }
  // return state;
  // ? It is is best to return the state. HOWEVER, it is NICE to see the error
  throw new Error(`Unknown action "${action.type}"`);
}

const initialState = {
  isSidebarOpen: false,
  // PRODUCTS
  products: [],
  featuredProducts: [],
  isProductsLoading: true,
  isProductsError: false,
  // SINGLE PRODUCT
  singleProducts: {},
  isSingleProductsLoading: false,
  isSingleProductsError: false,
  // TODO FILTERED PRODUCTS
  // category: {
  // ?  icon: '',
  // ?  name: '',
  // },

  // ADD TO CART
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  // 2 -> %
  tax: 2,
  deliveryFee: 2.99,
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: IS_SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: IS_SIDEBAR_CLOSE });
  };

  const getProducts = () => {
    dispatch({ type: GET_PRODUCTS_ON_LOAD });

    try {
      // TODO FETCH DATA FROM API INSTEAD OF USING LOCAL DATA
      // ? STEPS
      // -[] CREATE AN API, strapi or airtable
      // -[] FETCH DATA, axios or fetchApi (Axios is preferred)
      // -[] REPLACE local data file "menu" with whatever data you'll get
      dispatch({ type: GET_PRODUCTS_ON_SUCCESS, payload: menu });
    } catch {
      dispatch({ type: GET_PRODUCTS_ON_ERROR });
    }
  };

  const getSingleProducts = (id) => {
    const singleItem = menu.find((pro) => pro.id === parseInt(id));
    dispatch({ type: GET_SINGLE_PRODUCTS_ON_LOAD });

    try {
      // TODO SAME NOTES AS "getProducts()"
      dispatch({ type: GET_SINGLE_PRODUCTS_ON_SUCCESS, payload: singleItem });
    } catch {
      dispatch({ type: GET_SINGLE_PRODUCTS_ON_ERROR });
    }
  };

  const getCategories = () => {
    // TODO
  };

  const addToCart = (id, price, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, price, amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const changeQuantity = (id, value) => {
    dispatch({ type: CHANGE_AMOUNT, payload: { id, value } });
  };

  useEffect(() => {
    // TODO  REMOVE TIMEOUT Func. when you fetch data from a url
    const timeout = setTimeout(() => {
      getCategories();
      getProducts();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        closeSidebar,
        openSidebar,
        getSingleProducts,
        addToCart,
        clearCart,
        removeItem,
        changeQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Reusable Hook
export const useProduct = () => {
  return useContext(ProductContext);
};
