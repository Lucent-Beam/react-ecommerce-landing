import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/electronics",
      element: <Home />,
    },
    {
      path: "/jewelery",
      element: <Home />,
    },
    {
      path: "/mens-clothing",
      element: <Home />,
    },
    {
      path: "/womens-clothing",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
