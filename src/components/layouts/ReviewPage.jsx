import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:8000/reviews";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const fetchReviews = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("API Response:", response.data);
      if (Array.isArray(response.data)) {
        setReviews(response.data);
      } else if (response.data && Array.isArray(response.data.reviews)) {
        setReviews(response.data.reviews);
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const onSubmit = async (data) => {
    const newReview = {
      name: data.name || "Anonymous",
      rating: Number(data.rating),
      review: data.reviewText,
    };

    try {
      await axios.post(API_URL, newReview, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Review submitted successfully! ✅");
      fetchReviews();
      reset();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review! ❌");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Wear Web - Reviews</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 p-6 rounded-xl shadow-lg border border-blue-500 space-y-4">
          <h3 className="text-xl font-semibold text-center text-white">Leave a Review</h3>

          <div className="flex flex-col space-y-4">
            <div><input type="text" placeholder="Your Name (optional)" {...register("name")} className="w-full p-3 border border-gray-600 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white" />
            </div>
            <select {...register("rating", { required: "Rating is required" })} className="w-full p-3 border border-gray-600 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white">
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
              ))}
            </select>
            {errors.rating && <p className="text-red-400 text-sm">{errors.rating.message}</p>}
          </div>

          <textarea placeholder="Write your review..." {...register("reviewText", { required: "Review text is required" })} className="w-full p-3 border border-gray-600 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-24 text-white" />
          {errors.reviewText && <p className="text-red-400 text-sm">{errors.reviewText.message}</p>}

          <button type="submit" className={`w-full bg-blue-500 text-gray-900 py-2 rounded-lg text-lg font-semibold transition-all ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>

        {loading && <p className="text-gray-400 text-center mt-4">Loading reviews...</p>}
        {!loading && reviews.length === 0 && <p className="text-gray-400 text-center mt-4">No reviews available.</p>}

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-center text-blue-400">Customer Reviews</h3>
          {reviews.length > 0 && (
            <div className="grid grid-cols-1 gap-6 mt-4">
              {reviews.map((review) => (
                <div key={review.id} className="p-2 border border-blue-500 rounded-lg bg-gray-700 shadow-md transform transition duration-300 hover:scale-105">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold text-blue-400">{review.name || "Anonymous"}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white mt-2">{review.review}</p>
                  <p className="text-sm text-gray-400 mt-2">{review.created_at ? new Date(review.created_at).toLocaleDateString() : "Unknown date"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
