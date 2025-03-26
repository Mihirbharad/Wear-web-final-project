import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl h-full max-h-2xl bg-gray-800 p-8 rounded-3xl shadow-2xl border border-blue-500 transform transition hover:scale-105 hover:shadow-blue-500/50">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-blue-400 drop-shadow-lg">Contact Us</h2>
        <p className="text-center text-gray-300 mb-6">Have any questions? Feel free to reach out!</p>
        
        <div className="flex flex-col sm:flex-row justify-between mb-8 text-gray-300">
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-400" />
            <span>+91 9510422295</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-400" />
            <span>Wearweb@clothstore.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-400" />
            <span>Ahmedabad, India</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div><input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-inner"
            required
          />
          </div>
          <div><input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-inner"
            required
          /></div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-inner min-h-[120px]"
            required
          ></textarea>
          <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-blue-500/50">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
