import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../UI/Loader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../App.css";

function ProductsSection() {
  const { products, loading } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const total = products.length;
  useEffect(() => {
    const update = () => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      setVisible(isMobile ? 1 : 3);
      // Ensure currentIndex is valid after changing visible
      if (currentIndex > total - (isMobile ? 1 : 3)) {
        setCurrentIndex(Math.max(0, total - (isMobile ? 1 : 3)));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [total, currentIndex]);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + visible < total ? prev + visible : 0));
  };
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - visible >= 0 ? prev - visible : total - visible,
    );
  };
  if (loading) return <Loader />;
  const visibleProducts = products.slice(currentIndex, currentIndex + visible);
  return (
    <div className="container mx-auto py-12 px-4 text-right">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
        منتجات جاهزة للطلب
      </h2>
      <p className="text-gray-600 mb-8 text-right">
        يمكنك اختيار القطعة المناسبة وطلبها مباشرة بدون أي خطوات إضافية، مع ضمان
        جودة الخامة ودقة التنفيذ
      </p>
      <div className="relative">
        <div className="flex justify-center gap-6 overflow-hidden">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="flex-1 w-full sm:w-80 transition-transform duration-300 hover:scale-105">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
      {/* <div className="border-t border-gray-200 mt-8"></div> */}
    </div>
  );
}

export default ProductsSection;
