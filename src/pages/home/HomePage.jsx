import { useEffect } from "react";
import LandingLayout from "../../components/layout/LandingLayout";
import "../index.css";
import { toast, Toaster } from "sonner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setToastShown } from "@/stores/Toast";

function HomePage() {
  const dispatch = useDispatch();
  const hasShownToast = useSelector((state) => state.toast.hasShownToast);

  useEffect(() => {
    if (!hasShownToast) {
      const timeout1 = setTimeout(() => {
        toast.success("Hello World!");
      }, 3000);
      const timeout2 = setTimeout(() => {
        toast.success("This is a Prototype Website");
        dispatch(setToastShown(true)); // Perbarui status untuk mencegah toast memuat kembali saaat berpindah halaman ke home
      }, 5000);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [dispatch, hasShownToast]);

  return (
    <>
      <section className="relative bg-[#f8f8f8]">
        <Toaster position="top-center" />
        <LandingLayout />
      </section>
    </>
  );
}

export default HomePage;
