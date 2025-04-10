import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";

const ProductPurchasePage = () => {
  const { state } = useLocation();
  const product = state?.product;

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

  // Dynamically load Razorpay script
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleBuyNow = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
          const response = await fetch("http://localhost:8000/payment/create_order/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: product.price * 100, 
              currency: "INR",
              receipt: "receipt_" + new Date().getTime()
        }),
      });

      const order = await response.json();

      const options = {
        key: "rzp_test_26QypB3rHZrlZL", 
        amount: order.amount,
        currency: order.currency,
        name: "WearWeb",
        description: product.name,
        image: product.image_url,
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("http://localhost:8000/payment/verify_order/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.status === "success") {
            alert("Payment Successful!");
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: { color: "#38a169" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong during the payment process.");
    }
  };

  if (!product) {
    return <p className="text-center text-gray-500 text-xl mt-10">Product not found.</p>;
  }

  const dummySizes = ["S", "M", "L", "XL"];
  const dummyColors = ["Black", "White", "Blue"];

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img src={product.image_url} alt={product.name} className="w-full rounded-2xl shadow-md" />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-700">₹{product.price}</p>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-400" />
          <span>4.5 (243 reviews)</span>
        </div>
        <p className="text-gray-600">
          Experience unmatched comfort and style with our premium hoodie, crafted for everyday wear.
        </p>

        <div>
          <label className="block mb-1 font-medium">Size</label>
          <div className="flex gap-2">
            {dummySizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded border ${
                  selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Color</label>
          <div className="flex gap-2">
            {dummyColors.map((color) => (
              <button
                key={color}
                className={`px-4 py-2 rounded border ${
                  selectedColor === color ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 text-base bg-gray-200 hover:bg-gray-300 rounded">
            Add to Cart
          </button>
          <button
            className="px-6 py-2 text-base bg-green-600 hover:bg-green-700 text-white rounded"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchasePage;
