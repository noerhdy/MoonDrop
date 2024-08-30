import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { dataProducts } from "@/constants"; // Pastikan import dataProducts
import { toast, Toaster } from "sonner";

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

  // State untuk melacak jumlah klik button
  const [clickCount, setClickCount] = useState(0);

  // State untuk menampilkan toast kosong
  const [showEmptyCartToast, setShowEmptyCartToast] = useState(true);

  const handleClick = () => {
    if (carts.length === 0) {
      if (showEmptyCartToast) {
        toast("Your cart is currently empty.");
        setShowEmptyCartToast(false); // Setel ke false agar tidak menampilkan toast kosong lagi
      }
    } else {
      // Tampilkan toast berbeda berdasarkan jumlah klik
      if (clickCount === 0) {
        toast("Please Note: This is a Prototype Version.");
      } else if (clickCount === 1) {
        toast("Thank You for Stopping By!");
      }

      // Update jumlah klik
      setClickCount((prevCount) => prevCount + 1);

      // Reset status untuk menampilkan toast kosong jika ada item di keranjang
      setShowEmptyCartToast(true);
    }
  };

  useEffect(() => {
    if (carts.length > 0) {
      // Reset status untuk menampilkan toast kosong jika ada item di keranjang
      setShowEmptyCartToast(true);
    }
  }, [carts]);

  return (
    <section className="relative gap-2 flex flex-col h-full">
      <div className="overflow-hidden leading-loose bg-[#e2e2e2] w-full h-full rounded-[1.5rem] flex flex-col justify-center items-center">
        <div className="p-[1.5rem] font-normal h-fit w-full text-justify text-[0.75rem] sm:text-[1rem] text-black">
          <div className="flex w-full justify-between items-start">
            <div className="flex text-start flex-col">
              <h1 className="font-semibold text-[2rem]">Cart</h1>
            </div>
          </div>

          {/* Render CartItem jika ada item dalam keranjang */}
          {carts.length > 0 ? (
            carts.map((item, key) => <CartItem key={key} data={item} />)
          ) : (
            <div className="flex items-center py-2 justify-between border-t-2 border-zinc-600">
              <div className="">
                <h1 className="font-semibold text-[1rem]">
                  Your Cart is empty
                </h1>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-y-2 py-2 border-zinc-600">
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
              <Toaster position="top-center" />
              <Button
                onClick={handleClick}
                className="rounded-full px-12 py-6 text-[1rem]"
              >
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
