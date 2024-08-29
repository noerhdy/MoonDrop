import { dataProducts } from "@/constants";
import { changeQuantity, removeFromCart } from "@/stores/Cart";
import { Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { productId, quantity: initialQuantity } = props.data;
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = dataProducts.find((product) => product.id === productId);
    setDetail(findDetail || {});
  }, [productId]);

  const handleMinusQuantity = () => {
    const newQuantity = quantity - 1 < 1 ? 1 : quantity - 1;
    setQuantity(newQuantity);
    dispatch(changeQuantity({ productId, quantity: newQuantity }));
  };

  const handlePlusQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(changeQuantity({ productId, quantity: newQuantity }));
  };
  const handleRemove = () => {
    dispatch(removeFromCart({ productId }));
  };

  return (
    <div className="w-full gap-2 flex border-t-2 border-zinc-600 mx-auto">
      {/* Gambar Produk */}
      <div className="relative w-32 h-32 flex-shrink-0">
        <img
          className="w-full h-auto aspect-square object-cover"
          src={detail.images?.[0]} // Mengambil gambar pertama dari array images
          alt="Product Image"
        />
      </div>

      {/* Detail Produk */}
      <div className="w-full  flex justify-between ">
        {/* Bagian Kiri - Nama Produk dan Harga */}
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col">
            <h1 className="font-medium text-[1rem] text-start">
              {detail.name}
            </h1>
            <span>{detail.color}</span>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-black text-[1rem]">
              ${detail.price}
            </h1>
            <p className="font-medium text-[1rem] line-through text-gray-800">
              ${detail.discountPrice}
            </p>
          </div>
        </div>

        {/* Bagian Kanan - Kontrol Kuantitas dan Tombol Hapus */}
        <div className="flex flex-col justify-between items-end ">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={handleMinusQuantity}
            >
              <Minus />
            </button>
            <span className="font-semibold text-[1rem]">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={handlePlusQuantity}
            >
              <Plus />
            </button>
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="text-black font-semibold tex-[1rem]"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
