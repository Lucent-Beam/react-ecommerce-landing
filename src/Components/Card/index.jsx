import tsubasaAvatar from "../../assets/tsubasa_tof.jpg";
import eulaAvatar from "../../assets/eula_genshin.webp";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Card({
  id,
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
    context.setCartProducts([
      ...context.cartProducts,
      { id, title, image, price },
    ]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    console.log(context.isCheckoutSideMenuOpened);
  };

  const renderIcon = (productAddedId) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === productAddedId)
        .length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event)}
        >
          <PlusIcon className="size-6 text-black-500" />
        </div>
      );
    }
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
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light line-clamp-2">{title}</span>
        <span className="text-lg font-medium ">${price}</span>
      </p>
    </div>
  );
}
