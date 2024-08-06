import { useState, useEffect } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { CartContext } from "./Store/shop-cart-context";
import { useReducer } from "react";
import Modal from "./components/Modal";
function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchProduct() {
      setIsFetching(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("failed to fetch products");
        }
        // console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        setError({
          message:
            error.message ||
            "could not fetch the product, Please try again later",
        });
      }
      setIsFetching(false);
    }
    fetchProduct();
  }, []);

  //reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT": {
        // Find the index of the existing product in the cart
        const existingProductIndex = state.product.findIndex(
          (product) => product.id === action.id
        );

        if (existingProductIndex >= 0) {
          // If product exists, increase its quantity
          return {
            ...state,
            product: state.product.map((product, index) =>
              index === existingProductIndex
                ? { ...product, quantity: (product.quantity || 1) + 1 }
                : product
            ),
          };
        } else {
          // If product does not exist, add it with an initial quantity of 1
          const newProduct = products.find(
            (product) => product.id === action.id
          );
          return {
            ...state,
            product: [...state.product, { ...newProduct, quantity: 1 }],
          };
        }
      }
      case "INCREMENT": {
        return {
          ...state,
          product: state.product.map((product) =>
            product.id === action.id
              ? { ...product, quantity: (product.quantity || 1) + 1 }
              : product
          ),
        };
      }
      case "DECREMENT": {
        return {
          ...state,
          product: state.product
            .map((product) =>
              product.id === action.id
                ? { ...product, quantity: (product.quantity || 1) - 1 }
                : product
            )
            .filter((product) => product.quantity > 0), // Remove product if quantity goes to 0
        };
      }
      default: {
        return state;
      }
    }
  };

  const [cartstate, dispatch] = useReducer(reducer, {
    product: [],
  });

  const CartState = {
    product: cartstate.product,
    addProduct: (key) => dispatch({ type: "ADD_PRODUCT", id: key }),
    increment: (key) => dispatch({ type: "INCREMENT", id: key }),
    decrement: (key) => dispatch({ type: "DECREMENT", id: key }),
  };
  return (
    <CartContext.Provider value={{ cart: CartState }}>
      <Header />
      <Shop products={products} fetching={isFetching} />
    </CartContext.Provider>
  );
}

export default App;
