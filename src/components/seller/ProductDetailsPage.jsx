import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return (
      <div className="text-center text-gray-300 text-xl mt-10">
        No product data found.
        <br />
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-2 text-lg">
          <strong>Price:</strong> ₹{product.price}
        </p>
        <p className="text-gray-600 mb-4">
          {product.description || "No description available."}
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
          onClick={() => navigate(-1)}
        >
          Back to My Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
