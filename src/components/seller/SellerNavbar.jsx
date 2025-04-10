import React from 'react';
import { Link } from 'react-router-dom';

export const SellerNavbar = () => {
  return (
    <nav className="bg-white px-6 py-2 shadow-md border-b border-red-500 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full">
        <ul className="flex items-center gap-4 list-none m-0 p-0">
          <li>
            <Link to="selhome" className="text-gray-800 font-medium text-base px-3 py-2 rounded-md hover:bg-red-100 transition">SelHome</Link>
          </li>
          <li>
            <a href="#" className="text-gray-800 font-medium text-base px-3 py-2 rounded-md hover:bg-red-100 transition">Orders</a>
          </li>
          <li>
            <Link to="product" className="text-gray-800 font-medium text-base px-3 py-2 rounded-md hover:bg-red-100 transition">Products</Link>
          </li>
          <li>
            <a href="#" className="text-gray-800 font-medium text-base px-3 py-2 rounded-md hover:bg-red-100 transition">Analytics</a>
          </li>
          <li>
            <Link to="review" className="text-gray-800 font-medium text-base px-3 py-2 rounded-md hover:bg-red-100 transition">Reviews</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-5 list-none">
          <li>
            <a href="#" className="flex items-center text-gray-900 font-medium text-base no-underline">
              <img src="../../src/assets/img/seller.jpg" alt="User" className="w-[42px] h-[42px] rounded-full mr-2 border-2 border-gray-200 object-cover" />
              <span className="font-bold text-gray-800">SELLER</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SellerNavbar;