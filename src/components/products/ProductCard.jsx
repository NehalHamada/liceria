import { ShoppingCart, Star } from "lucide-react";
import "../../App.css";

function ProductCard({ product }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col p-4 sm:p-5 md:p-6 text-right w-full max-w-90 sm:max-w-[320px] md:max-w-95 mx-auto"
      style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
      <div className="relative w-full mb-3 sm:mb-4 md:mb-5 overflow-hidden rounded-2xl group">
        <img
          src={product.main_image || "/placeholder.png"}
          alt={product.name}
          className="w-full h-40 sm:h-52 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-[#bfa46f] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold shadow z-10">
          الاكثر مبيعا
        </span>
      </div>

      <div className="flex justify-end items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
        <span className="text-xs sm:text-sm text-gray-500">
          {parseFloat(product.average_rating || 0).toFixed(1)}
        </span>
        <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800 text-right wrap-break-words">
        {product.name}
      </h3>

      <div className="flex flex-row justify-between items-center gap-2 sm:gap-4 w-full flex-nowrap">
        <button className="bg-[#bfa46f] hover:bg-[#a68650] text-white p-2 sm:p-3 md:p-4 rounded-full shadow-md transition-transform duration-200 hover:scale-110 flex items-center justify-center">
          <ShoppingCart size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {product.has_discount ? (
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <span className="text-red-500 font-bold text-sm sm:text-base md:text-lg">
              {product.discount_percent} ريال
            </span>
            <span className="line-through text-gray-400 text-xs sm:text-sm md:text-base">
              {product.original_price} ريال
            </span>
          </div>
        ) : (
          <span className="text-gray-700 font-bold text-sm sm:text-base md:text-lg">
            {product.price} ريال
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
