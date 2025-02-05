import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../assets/utils";

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handleCheckout = () => {
    const orderToAdd = {
      date: "30/07/24",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCount(0);
    context.setCartProducts([]);
    context.setSearchByTitle(null);
  };

  const renderCheckoutBtn = () => {
    if (context.cartProducts.length) {
      return (
        <Link to="/my-orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      );
    }

    return;
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpened ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeCheckoutSideMenu()}
            className="size-6 text-black-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        {renderCheckoutBtn()}
      </div>
    </aside>
  );
}

// const ProductDetail = () => {

// }

// export default ProductDetail
