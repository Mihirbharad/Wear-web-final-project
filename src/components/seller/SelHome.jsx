// import React from "react";
// import { Link } from "react-router-dom";
// import { BarChart2, Package, ShoppingCart } from "lucide-react";

// export const ProductCard = ({ image, title, price, rating, reviews }) => {
//   return (
//     <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transition hover:scale-105">
//       <img src={image} alt={title} className="w-full h-52 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold truncate">{title}</h3>
//         <p className="text-red-500 font-bold mt-1">${price}</p>
//         <div className="flex items-center text-yellow-500 mt-1 text-sm">
//           ⭐ {rating} ({reviews} Reviews)
//         </div>
//         <button className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
//           View Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export const SelHome = () => {
//   return (
//     <div className="bg-gray-50 text-gray-900 min-h-screen p-8 font-sans">
//       {/* Top Greeting */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-bold mb-2">Welcome back, Seller 👋</h1>
//         <p className="text-gray-600">Here's what's happening with your store today.</p>
//       </div>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
//           <Package className="text-red-500 w-10 h-10" />
//           <div>
//             <h2 className="text-sm text-gray-500">Total Products</h2>
//             <p className="text-2xl font-semibold">24</p>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
//           <BarChart2 className="text-green-500 w-10 h-10" />
//           <div>
//             <h2 className="text-sm text-gray-500">Total Sales</h2>
//             <p className="text-2xl font-semibold">$1,250</p>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
//           <ShoppingCart className="text-yellow-500 w-10 h-10" />
//           <div>
//             <h2 className="text-sm text-gray-500">Pending Orders</h2>
//             <p className="text-2xl font-semibold">5</p>
//           </div>
//         </div>
//       </div>

//       {/* Call To Action */}
//       <div className="bg-red-500 text-white rounded-xl p-8 text-center mb-10 shadow-md">
//         <h2 className="text-2xl font-semibold mb-2">Want to add a new product?</h2>
//         <p className="mb-4">Keep your store fresh by adding something new.</p>
//         <Link to="/seller/addproduct">
//           <button className="bg-white text-red-500 font-medium px-6 py-2 rounded hover:bg-gray-100 transition">
//             Add Product
//           </button>
//         </Link>
//       </div>

//       {/* Recently Added Products */}
//       <div className="mb-10">
//         <h2 className="text-2xl font-bold mb-4">Recently Added Products</h2>
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {[1, 2, 3].map((item) => (
//             <ProductCard
//               key={item}
//               image={`/product-${item}.jpg`}
//               title={`Outfit ${item}`}
//               price={Math.floor(30 + Math.random() * 70)}
//               rating={(4 + Math.random()).toFixed(1)}
//               reviews={Math.floor(Math.random() * 200)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Seller Benefits */}
//       <div className="bg-white p-6 text-center rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-2">Why Sell With Us?</h2>
//         <p className="text-gray-600 mb-4">
//           Get access to a wide customer base, real-time insights, and guaranteed payments.
//         </p>
//         <Link to="/signup">
//           <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
//             Join Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default SelHome;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart2, Package, ShoppingCart } from "lucide-react";

export const ProductCard = ({ image, title, price, rating, reviews }) => {
  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transition hover:scale-105">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-red-500 font-bold mt-1">${price}</p>
        <div className="flex items-center text-yellow-500 mt-1 text-sm">
          ⭐ {rating} ({reviews} Reviews)
        </div>
        <button className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          View Product
        </button>
      </div>
    </div>
  );
};

export const SelHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/get_products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-8 font-sans">
      {/* Top Greeting */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome back, Seller 👋</h1>
        <p className="text-gray-600">Here's what's happening with your store today.</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <Package className="text-red-500 w-10 h-10" />
          <div>
            <h2 className="text-sm text-gray-500">Total Products</h2>
            <p className="text-2xl font-semibold">{products.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <BarChart2 className="text-green-500 w-10 h-10" />
          <div>
            <h2 className="text-sm text-gray-500">Total Sales</h2>
            <p className="text-2xl font-semibold">$1,250</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <ShoppingCart className="text-yellow-500 w-10 h-10" />
          <div>
            <h2 className="text-sm text-gray-500">Pending Orders</h2>
            <p className="text-2xl font-semibold">5</p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-red-500 text-white rounded-xl p-8 text-center mb-10 shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Want to add a new product?</h2>
        <p className="mb-4">Keep your store fresh by adding something new.</p>
        <Link to="/seller/addproduct">
          <button className="bg-white text-red-500 font-medium px-6 py-2 rounded hover:bg-gray-100 transition">
            Add Product
          </button>
        </Link>
      </div>

      {/* Recently Added Products */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Recently Added Products</h2>
        <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard
              key={product._id}
              image={product.image_url}
              title={product.name}
              price={product.price}
              rating={(4 + Math.random()).toFixed(1)} // Placeholder rating
              reviews={Math.floor(Math.random() * 200)} // Placeholder reviews
            />
          ))}
        </div>
      </div>

      {/* Seller Benefits */}
      <div className="bg-white p-6 text-center rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Why Sell With Us?</h2>
        <p className="text-gray-600 mb-4">
          Get access to a wide customer base, real-time insights, and guaranteed payments.
        </p>
        <Link to="/signup">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SelHome;
