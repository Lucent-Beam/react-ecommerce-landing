import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import eulaAvatar from "../../assets/eula_genshin.webp";

export default function OrderCard({ id, title, image, price }) {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (productIdToRemove) => {
    context.setCartProducts(
      context.cartProducts.filter((product) => product.id != productIdToRemove)
    );

    context.setCount(context.count - 1);
  };

  return (
    <div className="flex justify-between items-center pb-3">
      <div className="flex items-center gap-2">
        <figure className="w-16 h-16">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light line-clamp-2 w-36">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon
          onClick={() => handleDelete(id)}
          className="w-4 h-4 text-black-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

// const OrderCard = () => {

// }

// export default OrderCard
