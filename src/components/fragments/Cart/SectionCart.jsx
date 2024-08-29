import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { dataProducts } from "@/constants"; // Pastikan import dataProducts

function CartSection() {
  const carts = useSelector((store) => store.cart.items);

  // Menghitung total harga
  const totalPrice = carts.reduce((acc, item) => {
    // Temukan detail produk berdasarkan productId
    const product = dataProducts.find(
      (product) => product.id === item.productId
    );
    // Jika produk ditemukan, tambahkan harga item * quantity ke total
    if (product) {
      const itemTotal = product.price * item.quantity;
      return acc + itemTotal;
    }
    return acc;
  }, 0);

  return (
    <section className="relative gap-2 flex flex-col h-full">
      <div className="overflow-hidden leading-loose bg-zinc-400 w-full h-full rounded-[1.5rem] flex flex-col justify-center items-center">
        <div className="p-[1.5rem] font-normal h-fit w-full text-justify text-[0.75rem] sm:text-[1rem] text-zinc-100">
          <div className="flex w-full justify-between items-start">
            <div className="flex text-start flex-col">
              <h1 className="font-semibold text-[2rem]">Cart</h1>
            </div>
          </div>

          {/* Render CartItem jika ada item dalam keranjang */}
          {carts.length > 0 ? (
            carts.map((item, key) => <CartItem key={key} data={item} />)
          ) : (
            <div className="flex items-center py-2 justify-between border-t-2">
              <div className="">
                <h1 className="font-semibold text-[1rem]">
                  Your Cart is empty
                </h1>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-y-2 py-2">
            <div className="">
              <h1 className="font-semibold text-[1rem]">Total Shipping</h1>
            </div>
            <div>
              <h1 className="font-semibold text-[2rem]">
                ${totalPrice.toFixed(2)}
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="py-4">
              <Button className="rounded-full px-12 py-6 text-[1rem]">
                Check Out
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

export default CartSection;
