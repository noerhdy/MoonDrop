import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

function CartCard({
  color = "black",
  initialQuantity = 1,
  pricePerItem = 24.99,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const totalPrice = (quantity * pricePerItem).toFixed(2);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="w-full gap-2 flex border-y-2 py-4">
      <div className="relative w-[200px] h-fit">
        <img
          className="w-full h-auto aspect-square object-cover"
          src={`./${color === "white" ? "white" : "black"}.jpg`}
          alt="Product Image"
        />
      </div>

      <div className="w-full h-full bg-zinc-800 p-4 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className="font-medium text-[1rem] whitespace-nowrap">
              MOONDROP SPACE TRAVEL
            </h1>
            <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-[1rem]">
              ${pricePerItem.toFixed(2)}
            </h1>
            <p className="font-medium text-[1rem] line-through text-gray-400">
              $29.99
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end w-1/2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={handleDecrease}
            >
              <Minus />
            </button>
            <span className="font-semibold text-[1rem]">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={handleIncrease}
            >
              <Plus />
            </button>
          </div>
          <div className="mt-2">
            <button type="button" className="text-red-500 underline">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
