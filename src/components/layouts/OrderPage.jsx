import { useState } from "react";

export default function OrderPage() {
  const [formData, setFormData] = useState({ name: "", email: "", product: "", quantity: 1, address: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    setFormData({ name: "", email: "", product: "", quantity: 1, address: "" });
  };

  return (
    <div className="min-h-screen bg-white text-b p-10 flex justify-center border-2 border-blue-900">
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-300 via-gray-100 to-gray-500 p-8 rounded-2xl shadow-2xl border border-blue-900">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-6 drop-shadow-lg">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-300 text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 shadow-inner transition-colors duration-300"
            required
          /></div>
          <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-300 text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 shadow-inner transition-colors duration-300"
            required
          /></div>
          <div>
          <input
            type="text"
            name="product"
            placeholder="Product Name"
            value={formData.product}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-300 text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 shadow-inner transition-colors duration-300"
            required
          /></div>
          <div>
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-300 text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 shadow-inner transition-colors duration-300"
            required
          /></div>
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-300 text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 shadow-inner min-h-[100px] transition-colors duration-300"
            required
          ></textarea>
          <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-blue-500/50">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
