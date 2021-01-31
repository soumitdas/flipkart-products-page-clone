import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const cartContext = createContext({
  cart: [],
  saveLater: [],
  addToCart: () => {},
  subTotal: 0,
  discount: 0,
  addToSaveLater: () => {},
});

export function ProvideCart({ children }) {
  const cart = useProvideCart();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

export const useCart = () => useContext(cartContext);

function useProvideCart() {
  const [cart, setCart] = useLocalStorage("__cart", []);
  const [saveLater, setSaveLater] = useLocalStorage("__save_later", []);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let total = 0;
    let disc = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
      disc += (item.price - item.offerPrice) * item.quantity;
    });
    setSubTotal(total);
    setDiscount(disc);
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    const tempCartItems = cart;

    let itemIndex = tempCartItems.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      //product exists in the cart, update the quantity
      tempCartItems[itemIndex].quantity += qty;

      if (qty === 0 || tempCartItems[itemIndex].quantity < 1) {
        tempCartItems.splice(itemIndex, 1);
      }
    } else {
      //product does not exists in cart, add new item
      tempCartItems.push({ ...product, quantity: qty });
    }
    setCart([...tempCartItems]);
  };

  const addToSaveLater = (product, remove = false) => {
    const tempSaveLater = saveLater;

    let itemIndex = tempSaveLater.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      console.log(itemIndex);
      if (!remove) {
        return;
      }
      tempSaveLater.splice(itemIndex, 1);
    } else {
      addToCart(product, 0);
      tempSaveLater.push(product);
    }
    setSaveLater([...tempSaveLater]);
  };

  return {
    cart,
    saveLater,
    addToCart,
    subTotal,
    discount,
    addToSaveLater,
  };
}
