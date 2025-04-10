import React from "react";
import { useLocation } from "react-router-dom";

export const Wishlist = () => {
  const location = useLocation();
  const { wishlist } = location.state || {}; // Get wishlist from the location state

  if (!wishlist || wishlist.length === 0) {
    return (
      <p className="text-center text-gray-300 text-xl">
        Your wishlist is empty.
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide uppercase border-b-4 border-gray-600 pb-2">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {wishlist.map((product) => (
          <div
            key={product._id}
            className="bg-gray-800 p-4 rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-500 relative overflow-hidden"
          >
            <img
              className="h-40 w-full object-cover rounded-md mb-3 border border-gray-700 hover:border-gray-500 transition-all"
              src={product.image_url}
              alt={product.name}
            />
            <h2 className="text-lg font-semibold text-white text-center">
              {product.name}
            </h2>
            <h3 className="text-white text-center text-lg font-medium mt-1">
              Rs.{product.price}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
