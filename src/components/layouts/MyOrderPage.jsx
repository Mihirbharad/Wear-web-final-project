// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { CheckCircle, Clock } from "lucide-react";

// const orders = [
//   {
//     id: "ORD123456",
//     date: "2025-04-05",
//     total: "₹2,499",
//     status: "Delivered",
//     products: [
//       {
//         name: "T-shirt",
//         image:
//           "https://images.unsplash.com/photo-1602810311384-4e57c54f3e2d?auto=format&fit=crop&w=600&q=80",
//         price: "₹599",
//       },
//       {
//         name: "Jeans",
//         image:
//           "https://images.unsplash.com/photo-1583003071478-1c27f84c7995?auto=format&fit=crop&w=600&q=80",
//         price: "₹999",
//       },
//       {
//         name: "Sneakers",
//         image:
//           "https://images.unsplash.com/photo-1519741491041-0d3f58c9b7b5?auto=format&fit=crop&w=600&q=80",
//         price: "₹901",
//       },
//     ],
//   },
//   {
//     id: "ORD123457",
//     date: "2025-03-29",
//     total: "₹999",
//     status: "Shipped",
//     products: [
//       {
//         name: "Backpack",
//         image:
//           "https://images.unsplash.com/photo-1598032893764-bf3c2892b2e2?auto=format&fit=crop&w=600&q=80",
//         price: "₹799",
//       },
//       {
//         name: "Cap",
//         image:
//           "https://images.unsplash.com/photo-1606813904661-7c5f51ec6c95?auto=format&fit=crop&w=600&q=80",
//         price: "₹200",
//       },
//     ],
//   },
// ];

// export default function MyOrders() {
//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>
//       <div className="space-y-5">
//         {orders.map((order) => (
//           <Card key={order.id} className="rounded-2xl shadow-md">
//             <CardContent className="p-5">
//               <div className="flex justify-between items-center mb-3">
//                 <div>
//                   <h2 className="text-xl font-semibold">Order #{order.id}</h2>
//                   <p className="text-sm text-gray-500">Date: {order.date}</p>
//                 </div>
//                 <Badge
//                   variant="outline"
//                   className={`text-sm px-3 py-1 ${
//                     order.status === "Delivered"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-yellow-100 text-yellow-700"
//                   }`}
//                 >
//                   {order.status === "Delivered" ? (
//                     <CheckCircle className="inline w-4 h-4 mr-1" />
//                   ) : (
//                     <Clock className="inline w-4 h-4 mr-1" />
//                   )}
//                   {order.status}
//                 </Badge>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {order.products.map((product, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-16 h-16 object-cover rounded-lg"
//                     />
//                     <div>
//                       <p className="font-medium">{product.name}</p>
//                       <p className="text-sm text-gray-600">{product.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 text-right text-lg font-semibold text-gray-800">
//                 Total Paid: {order.total}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { CheckCircle, Clock } from "lucide-react";

const orders = [
  {
    id: "ORD123456",
    date: "2025-04-05",
    total: "₹2,499",
    status: "Delivered",
    products: [
      {
        name: "T-shirt",
        image:
          "https://images.unsplash.com/photo-1602810311384-4e57c54f3e2d?auto=format&fit=crop&w=600&q=80",
        price: "₹599",
      },
      {
        name: "Jeans",
        image:
          "https://images.unsplash.com/photo-1583003071478-1c27f84c7995?auto=format&fit=crop&w=600&q=80",
        price: "₹999",
      },
      {
        name: "Sneakers",
        image:
          "https://images.unsplash.com/photo-1519741491041-0d3f58c9b7b5?auto=format&fit=crop&w=600&q=80",
        price: "₹901",
      },
    ],
  },
  {
    id: "ORD123457",
    date: "2025-03-29",
    total: "₹999",
    status: "Shipped",
    products: [
      {
        name: "Backpack",
        image:
          "https://images.unsplash.com/photo-1598032893764-bf3c2892b2e2?auto=format&fit=crop&w=600&q=80",
        price: "₹799",
      },
      {
        name: "Cap",
        image:
          "https://images.unsplash.com/photo-1606813904661-7c5f51ec6c95?auto=format&fit=crop&w=600&q=80",
        price: "₹200",
      },
    ],
  },
];

const MyOrders = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">🛒 My Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-xl border-l-4 border-blue-600 rounded-xl p-6 relative"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.status === "Delivered" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
                {order.status}
              </span>
            </div>

            {/* Order Info */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Order #{order.id}
              </h2>
              <p className="text-sm text-gray-500">Placed on {order.date}</p>
            </div>

            {/* Product Images */}
            <div className="flex overflow-x-auto gap-4 py-3 scrollbar-thin scrollbar-thumb-gray-300">
              {order.products.map((product, idx) => (
                <div
                  key={idx}
                  className="min-w-[140px] bg-gray-100 p-2 rounded-lg shadow-sm flex-shrink-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-gray-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-4 text-right text-lg font-semibold text-blue-600">
              Total Paid: {order.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
