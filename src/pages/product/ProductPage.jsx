import HeadProduct from "../../components/fragments/ProductSection/HeadProduct";
import IndexFooter from "../../components/fragments/Footer/IndexFooter";
import { useOutletContext } from "react-router-dom";

export const Tagline =
  "w-full h-full items-center font-bold  text-white flex flex-col  justify-center text-[3rem] sm:text-8xl overview-hidden";

function ProductPage() {
  const { isMobile, selectedColor } = useOutletContext();

  return (
    <div className="order-4 sm:order-2 w-full sm:w-1/2 sm:h-full h-fit sm:py-2 py-0 ">
      <HeadProduct selectedColor={selectedColor} />
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
