import { createContext, useState, useEffect, useCallback } from "react";

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

  // Shopping cart order
  const [order, setOrder] = useState([]);

  //get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  //get producs by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  //get producs by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  console.log("searchByTitle:", searchByTitle);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = useCallback(
    (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === "BY_TITLE") {
        return filteredItemsByTitle(items, searchByTitle);
      }
      if (searchType === "BY_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory);
      }

      if (searchType === "BY_TITLE_AND_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory).filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
      }
      if (!searchType) {
        return items;
      }
    },
    []
  );

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );

    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory, filterBy]);

  console.log("filteredItem: ", filteredItems);

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
