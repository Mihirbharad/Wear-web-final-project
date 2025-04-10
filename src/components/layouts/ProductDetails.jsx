// // import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ProductDetails = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/get_products/")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   const handleBuyClick = (product) => {
//     navigate("purchase", { state: { product } });
//   };

//   if (products.length === 0)
//     return (
//       <p className="text-center text-gray-300 text-xl">
//         Loading products...
//       </p>
//     );

//   return (
//     <div className="container mx-auto p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center">
//       <h1 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide uppercase border-b-4 border-gray-600 pb-2">
//         Premium Collection
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-gray-800 p-4 rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-500 relative overflow-hidden"
//           >
//             <img
//               className="h-40 w-full object-cover rounded-md mb-3 border border-gray-700 hover:border-gray-500 transition-all"
//               src={product.image_url}
//               alt={product.name}
//             />
//             <h2 className="text-lg font-semibold text-white text-center">
//               {product.name}
//             </h2>
//             <h3 className="text-white text-center text-lg font-medium mt-1">
//               Rs.{product.price}
//             </h3>
//             <button className="w-full mt-3 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all">
//               Add to Wishlist
//             </button>
//             <button
//               onClick={() => handleBuyClick(product)}
//               className="w-full mt-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all"
//             >
//               Buy Product
//             </button>
//             <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded-full shadow">
//               New
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Add wishlist state
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/get_products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleBuyClick = (product) => {
    navigate("purchase", { state: { product } });
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  if (products.length === 0)
    return (
      <p className="text-center text-gray-300 text-xl">
        Loading products...
      </p>
    );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide uppercase border-b-4 border-gray-600 pb-2">
        Premium Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products.map((product) => (
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
            <button
              onClick={() => handleAddToWishlist(product)} // Add to wishlist logic
              className="w-full mt-3 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all"
            >
              Add to Wishlist
            </button>
            <button
              onClick={() => handleBuyClick(product)}
              className="w-full mt-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all"
            >
              Buy Product
            </button>
            <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded-full shadow">
              New
            </div>
          </div>
        ))}
      </div>
      {/* Pass wishlist to Wishlist component using React Router */}
      <button
        onClick={() => navigate("/user/wishlist", { state: { wishlist } })}
        className="mt-4 py-2 px-6 bg-green-600 text-white font-medium rounded-lg hover:bg-green-500 transition-all"
      >
        Go to Wishlist
      </button>
    </div>
  );
};

export default ProductDetails;
