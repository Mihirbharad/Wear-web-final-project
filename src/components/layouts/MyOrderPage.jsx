import { useState } from "react";

const orders = [
  {
    id: "ORD12345",
    product: "Sweat shirt",
    price: "Rs.899.99",
    status: "Shipped",
    image: "https://via.placeholder.com/100",
    date: "March 20, 2025",
  },
  {
    id: "ORD67890",
    product: "Socks",
    price: "Rs.149.99",
    status: "Processing",
    image: "https://via.placeholder.com/100",
    date: "March 22, 2025",
  },
  {
    id: "ORD54321",
    product: "Pant",
    price: "Rs.949.99",
    status: "Delivered",
    image: "https://via.placeholder.com/100",
    date: "March 18, 2025",
  },
];

export default function MyOrderPage() {
  const [orderList, setOrderList] = useState(orders);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-10 flex justify-center">
      <div className="w-full max-w-5xl bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8 drop-shadow-lg pb-8">My Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orderList.map((order) => (
            <div key={order.id} className="flex flex-col bg-gray-800 p-6 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-blue-500/50">
              <div className="flex items-center mb-4">
                <img src={order.image} alt={order.product} className="w-24 h-24 rounded-lg mr-4 border border-gray-600" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{order.product}</h3>
                  <p className="text-gray-400 text-sm">Order ID: {order.id}</p>
                  <p className="text-gray-500 text-sm">Date: {order.date}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-600 text-white' : order.status === 'Shipped' ? 'bg-yellow-500 text-black' : 'bg-red-500 text-white'}`}>{order.status}</span>
                <span className="text-lg font-bold text-green-400">{order.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
