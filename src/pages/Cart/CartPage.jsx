import HeadProduct from "../../components/fragments/ProductSection/HeadProduct";
import IndexFooter from "../../components/fragments/Footer/IndexFooter";
import { useOutletContext } from "react-router-dom";
import CartSection from "@/components/fragments/Cart/SectionCart";

function CartPage() {
  const { isMobile, selectedColor } = useOutletContext();

  return (
    <div className="order-4 sm:order-2 w-full sm:w-1/2 sm:h-full h-fit sm:py-2 py-0 ">
      <CartSection selectedColor={selectedColor} />
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

export default CartPage;
