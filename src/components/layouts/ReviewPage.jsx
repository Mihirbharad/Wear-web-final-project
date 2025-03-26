import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    if (rating > 0 && reviewText.trim()) {
      setReviews([...reviews, { rating, text: reviewText }]);
      setRating(0);
      setReviewText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-navyblue-700 to-blue-600 text-white p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-gray-800 p-10 rounded-3xl shadow-2xl border border-cyan-400 transform transition hover:scale-105 hover:shadow-cyan-500/50">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-cyan-300 drop-shadow-lg">Share Your Experience</h2>
        <div className="flex justify-center space-x-3 mb-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <Star
              key={num}
              className={`cursor-pointer w-12 h-12 transition-all ${num <= rating ? "fill-cyan-300 text-cyan-300 scale-110 drop-shadow-lg" : "fill-gray-500 text-gray-500"}`}
              onClick={() => setRating(num)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-4 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 resize-none min-h-[120px] shadow-inner"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button onClick={handleSubmit} className="w-full mt-5 bg-cyan-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-cyan-500/50">
          Submit Review
        </button>
      </div>

      <div className="mt-10 w-full max-w-3xl">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-800 text-white p-6 my-4 rounded-2xl shadow-lg border border-cyan-400 transform transition hover:scale-105 hover:shadow-cyan-500/50">
            <div className="flex items-center mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="fill-cyan-300 text-cyan-300 w-8 h-8 drop-shadow-lg" />
              ))}
            </div>
            <p className="text-lg italic">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
