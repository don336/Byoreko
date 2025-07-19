import { FaCar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const isTukTuk = product.category === "tuktuks";

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Image/Icon Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center overflow-hidden">
        {isTukTuk ? (
          <div className="text-6xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
            <img src={product.image} alt="img" />
          </div>
        ) : (
          <div className="text-4xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
            {product.icon}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
