import HeadProduct from "../../components/fragments/ProductSection/HeadProduct";
import IndexFooter from "../../components/fragments/Footer/IndexFooter";
import { dataProducts } from "@/constants";
import { useOutletContext } from "react-router-dom";

function ProductPage() {
  const { isMobile, selectedColor } = useOutletContext();
  // Temukan harga produk yang sesuai dengan warna yang dipilih
  const product = dataProducts.find((p) => p.slug.includes(selectedColor));
  const price = product ? product.price : 24.99; // Default price jika produk tidak ditemukan
  const discountPrice = product ? product.discountPrice : 29.99;
  const productId = product ? product.id : null;

  return (
    <div className="order-4 sm:order-2 w-full sm:w-1/2 sm:h-full h-fit sm:py-2 py-0 ">
      <HeadProduct
        selectedColor={selectedColor}
        price={price}
        discountPrice={discountPrice}
        id={productId}
      />
      {/* Desktop */}
      {!isMobile && (
        <div className="h-svh">
          {/* Footer Desktop */}
          <IndexFooter />
          {/* endFooter Desktop */}
        </div>
      )}
      {/* end Desktop */}
    </div>
  );
}

export default ProductPage;
