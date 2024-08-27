import React from "react";
import AccordionProduct from "./AccordionProduct";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "@/stores/Cart";

// Pastikan untuk menambahkan price ke props
function HeadProduct({ selectedColor, price, discountPrice, id }) {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addtoCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <section className="relative gap-2 flex flex-col h-full sm:h-dvh">
      <div className="overflow-hidden leading-loose bg-zinc-800 w-full h-full rounded-[1.5rem] flex flex-col justify-center items-center">
        <div className="p-[1.5rem] font-normal h-fit w-full text-justify text-[0.75rem] sm:text-[1rem] text-zinc-100">
          <div className="flex w-full justify-between items-start">
            <div className="flex text-start flex-col">
              <div className="leading-normal">
                <h1 className="font-semibold text-[1.2rem]">
                  MOONDROP SPACE TRAVEL
                </h1>
                <p className="font-medium text-[0.75rem]">
                  True Wireless Stereo
                </p>
              </div>
              <p className="font-semibold text-[0.875rem]">
                {selectedColor === "white" ? "White" : "Black"}
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-[1.2rem] normal-nums">
                ${price}
              </h1>
              <p className="font-medium text-[0.875rem] text-end normal-nums line-through">
                ${discountPrice}
              </p>
            </div>
          </div>
          <div className="max-h-[400px] w-full justify-center flex items-start overflow-y-auto overflow-x-hidden">
            <AccordionProduct />
          </div>
          <div className="flex items-center justify-between">
            <div className="py-8">
              <Button
                onClick={handleAddToCart}
                className="rounded-full px-12 py-6"
              >
                Add to Cart
              </Button>
            </div>
            <div>
              <p className="text-[0.675rem] sm:text-[0.75rem] text-end leading-snug">
                Shipping & Taxes are
                <br />
                calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadProduct;
