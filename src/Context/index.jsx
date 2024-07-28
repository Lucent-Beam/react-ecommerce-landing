import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping card increment quantity
  const [count, setCount] = useState(0);

  //Product detail open/close
  const [isProductDetailOpened, setIsProductDetailOpened] = useState(false);

  const openProductDetail = () => {
    setIsProductDetailOpened(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpened(false);
  };

  //Checkout side menu open/close
  const [isCheckoutSideMenuOpened, setIsCheckoutSideMenuOpened] =
    useState(false);

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpened(true);
  };

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpened(false);
  };

  //Product detail  - show product
  const [productToShow, setProductToShow] = useState({});

  //Cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpened,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpened,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
