import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import eulaAvatar from "../../assets/eula_genshin.webp";

export default function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01/03/24</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="size-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

// const OrderCard = () => {

// }

// export default OrderCard
