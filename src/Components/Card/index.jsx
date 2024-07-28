import tsubasaAvatar from "../../assets/tsubasa_tof.jpg";
import eulaAvatar from "../../assets/eula_genshin.webp";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function Card({
  title,
  image,
  price,
  categoryName,
  description,
}) {
  const context = useContext(ShoppingCartContext);

  const showProduct = () => {
    context.openProductDetail();
    context.setProductToShow({
      title,
      image,
      price,
      categoryName,
      description,
    });
    context.closeCheckoutSideMenu();
  };

  const addProductToCart = (event) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, { title }]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    console.log(context.isCheckoutSideMenuOpened);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {categoryName}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt="Eula"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event)}
        >
          <PlusIcon className="size-6 text-black-500" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium ">${price}</span>
      </p>
    </div>
  );
}
