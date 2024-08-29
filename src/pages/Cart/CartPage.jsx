import IndexFooter from "../../components/fragments/Footer/IndexFooter";
import { useOutletContext } from "react-router-dom";
import CartSection from "@/components/fragments/Cart/SectionCart";

function CartPage() {
  const { isMobile, selectedColor } = useOutletContext();

  return (
    <div className="order-2 lg:order-2 w-full lg:w-1/2 lg:h-full h-fit lg:py-2 py-0 ">
      <CartSection selectedColor={selectedColor} />
      {/* Desktop */}
      {!isMobile && (
        <div className="h-svh">
          {/* Footer Desktop */}
          <IndexFooter />
          {/* endFooter Desktop */}
        </div>
      )}
    </div>
  );
}

export default CartPage;
