import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

function DetailCart({}) {
  return (
    <div className="w-full gap-2 flex border-y-2 mx-auto">
      {/* Gambar Produk */}
      <div className="relative w-32 h-32 flex-shrink-0">
        <img
          className="w-full h-auto aspect-square object-cover"
          src="./21.jpg"
          alt="Product Image"
        />
      </div>

      {/* Detail Produk */}
      <div className="w-full bg-zinc-800 py-2 flex justify-between">
        {/* Bagian Kiri - Nama Produk dan Harga */}
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col">
            <h1 className="font-medium text-[1rem] whitespace-nowrap">
              MOONDROP SPACE TRAVEL
            </h1>
            <span>helo</span>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-[1rem]">$02</h1>
            <p className="font-medium text-[1rem] line-through text-gray-400">
              $29.99
            </p>
          </div>
        </div>

        {/* Bagian Kanan - Kontrol Kuantitas dan Tombol Hapus */}
        <div className="flex flex-col justify-between items-end ">
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Decrease quantity" onClick="">
              <Minus />
            </button>
            <span className="font-semibold text-[1rem]">lolo</span>
            <button type="button" aria-label="Increase quantity" onClick="">
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

export default DetailCart;
