import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "./../../assets/img/pant.jpg"
import image2 from "./../../assets/img/sweatshirt.jpg"
import image3 from "./../../assets/img/shoes.webp"


const LandPage = () => {
  return (
    <div className="font-sans text-center text-gray-100 bg-gradient-to-r from-[#0a0f29] to-[#1c2541]">
      <nav className="flex justify-between items-center h-20 px-12 bg-[#141428e6] text-[#12AC17] font-semibold shadow-lg w-full">
        <h2 className="text-xl font-extrabold uppercase tracking-wider">WearWeb</h2>
        <ul className="flex gap-6 list-none text-sm">
          <li><a href="#features" className="hover:text-[#f8e1a1] transition duration-300">Features</a></li>
          <li><a href="#testimonials" className="hover:text-[#f8e1a1] transition duration-300">Testimonials</a></li>
          <li><a href="#gallery" className="hover:text-[#f8e1a1] transition duration-300">Gallery</a></li>
          <li><Link to="/contact" className  ="hover:text-[#f8e1a1] transition duration-300">Contact</Link></li>
          <li>
            <Link 
              to="/signup  " 
              className="px-4 py-2 bg-[#ff9800] text-black rounded-full font-bold text-sm transition duration-300 border-2 border-white hover:bg-[#f57c00]"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>

      <header className="py-32 bg-gradient-to-r from-[#1a1f40] to-[#222b5e] text-white">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold uppercase tracking-widest">
          Welcome to WearWeb
        </motion.h1>
        <p className="text-xl font-medium mt-3">Your ultimate web experience, simplified.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-6 px-8 py-3 bg-[#12AC17] text-[#0a0f29] rounded-lg font-bold text-lg transition duration-300 hover:bg-[#f8e1a1] shadow-lg">
          Explore Features
        </motion.button>
      </header>

      <section id="features" className="py-16">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <motion.div className="flex justify-center gap-8 mt-6">
          {["Fast Performance", "Secure Platform", "User Friendly", "24/7 Support"].map((feature, index) => (
            <motion.div key={index} className="p-8 bg-[#d4af3726] text-[#f5f3f0] rounded-lg font-semibold text-lg border-2 border-[#12AC17] shadow-xl hover:scale-105 transition duration-300">
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="gallery" className="py-16">
  <h2 className="text-3xl font-bold">Gallery</h2>
  <div className="flex justify-center gap-8 mt-6">
    {[`${image1}`, `${image2}`,`${image3}`].map((img, index) => (
      <motion.img 
        key={index} 
        src={img} 
        alt="Gallery Item" 
        className="w-80 h-80 rounded-lg border-4 border-[#12AC17] shadow-xl hover:scale-105 transition duration-300" 
      />
    ))}
  </div>
</section>

      

      <section id="testimonials" className="py-16">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <motion.p animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-4 text-lg italic font-medium">
          "WearWeb has transformed the way I work!" - Alex
        </motion.p>
      </section>

      <footer className="bg-[#0a0f29e6] text-[#12AC17] py-10 text-center font-semibold">
        <div className="flex justify-around mb-6 text-lg">
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="list-none">
              <li><Link to="/contact" className="hover:text-[#f8e1a1] transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <ul className="flex justify-center gap-6 list-none">
              <li><a href="#" className="hover:text-[#f8e1a1] transition duration-300">Facebook</a></li>
              <li><a href="#" className="hover:text-[#f8e1a1] transition duration-300">Twitter</a></li>
              <li><a href="#" className="hover:text-[#f8e1a1] transition duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-[#f8e1a1] transition duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="text-lg">© 2025 WearWeb. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandPage;
