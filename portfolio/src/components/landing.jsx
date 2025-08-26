import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import treeImg from "../assets/tree.jpeg";
import catImg from "../assets/catt.png";

export default function Landing() {
  const figs = [
    { top: "28%", left: "45%" },
    { top: "42%", left: "63%" },
    { top: "58%", left: "38%" },
    { top: "22%", left: "68%" },
    { top: "50%", left: "52%" },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-tr from-gray-950 via-purple-950 to-gray-900 overflow-hidden font-sans text-white">
      {/* Home Icon */}
      <div className="absolute top-4 left-4 z-20 p-2 bg-purple-700/30 rounded-full backdrop-blur-md shadow-md hover:bg-purple-600/50 transition">
        <Home className="w-7 h-7 text-purple-300 hover:text-purple-200 transition" />
      </div>

      {/* Tree Illustration */}
      <div className="absolute bottom-0 left-0 w-[50vw] z-10">
        <img src={treeImg} alt="Tree" className="w-full h-auto" />

        {/* Glowing Figs */}
        <div className="absolute inset-0">
          {figs.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-7 h-7 rounded-full cursor-pointer bg-gradient-to-tr from-purple-400 to-purple-700 shadow-[0_0_25px_rgba(168,85,247,0.9)]"
              style={{ top: pos.top, left: pos.left }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="absolute right-24 top-1/3 max-w-lg text-left z-20">
        <motion.p
          className="text-3xl italic font-semibold text-purple-200 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          "Growth is not always loud.  
          Sometimes, it’s a quiet reaching toward the light."
        </motion.p>
      </div>

      {/* Cat Illustration */}
      <div className="absolute bottom-8 right-12 z-20">
        <motion.img
          src={catImg}
          alt="Cat"
          className="w-40 h-auto drop-shadow-2xl"
          initial={{ y: 10 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
