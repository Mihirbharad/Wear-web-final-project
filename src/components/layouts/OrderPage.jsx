import { useState } from "react";

export default function OrderPage() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: 1,
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    setFormData({ name: "", phone: "", product: "", quantity: 1, address: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-b p-10 flex justify-center">
      <div className="w-full max-w-3xl h-1xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-2xl shadow-2xl border-4 border-blue-700">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-extrabold text-center text-white hover:text-blue-600 transition-colors duration-300 mb-6 drop-shadow-lg">
            Place Your Order
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-600 text-blue-300 hover:text-blue-500 focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 shadow-inner transition-colors duration-300"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="integer"
              name="phone"
              placeholder="Your Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-600 text-blue-300 hover:text-blue-500 focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 shadow-inner transition-colors duration-300"
              required
            />
          </div>

          {/* Product Input */}
          <div>
            <input
              type="text"
              name="product"
              placeholder="Product Name"
              value={formData.product}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-600 text-white-300 hover:text-white-500 focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 shadow-inner transition-colors duration-300"
              required
            />
          </div>

          {/* Quantity Input */}
          <div>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-600 text-blue-300 hover:text-blue-500 focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 shadow-inner transition-colors duration-300"
              required
            />
          </div>

          {/* Address Input */}
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-600 text-blue-300 hover:text-blue-500 focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 shadow-inner min-h-[100px] transition-colors duration-300"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-blue-500/50"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
