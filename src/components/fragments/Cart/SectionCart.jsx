import { Button } from "@/components/ui/button";

function CartSection() {
  return (
    <section className="relative gap-2 flex flex-col h-full">
      <div className="overflow-hidden leading-loose bg-zinc-400 w-full h-full rounded-[1.5rem] flex flex-col justify-center items-center">
        <div className="p-[1.5rem] font-normal h-fit w-full text-justify text-[0.75rem] sm:text-[1rem] text-zinc-100">
          <div className="flex w-full justify-between items-start">
            <div className="flex text-start flex-col">
              <h1 className="font-semibold text-[1.2rem]">Cart</h1>
            </div>
          </div>
          <div className="flex items-center py-2 justify-between border-t-2">
            <div className="">
              <h1 className="font-semibold text-[1rem]">Your Cart is empty</h1>
            </div>
          </div>

          <div className="flex items-center justify-between border-y-2">
            <div className="">
              <h1 className="font-semibold text-[1rem]">Total Shiping</h1>
            </div>
            <div>
              <h1 className="font-semibold text-[2rem]">$00</h1>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="py-4">
              <Button className="rounded-full px-12 py-6 text-[1rem]">
                Check Out
              </Button>
            </div>
            <div>
              <p className=" text-[0.675rem] sm:text-[0.75rem] text-end leading-snug">
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

export default CartSection;
