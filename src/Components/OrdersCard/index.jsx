import { XMarkIcon } from "@heroicons/react/24/solid";
import eulaAvatar from "../../assets/eula_genshin.webp";

export default function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center pb-3 border border-black">
      <p>
        <span>01/03/24</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

// const OrderCard = () => {

// }

// export default OrderCard
