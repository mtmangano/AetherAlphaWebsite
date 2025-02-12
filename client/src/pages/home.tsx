import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AetherAlpha
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore the Alpha Fund
        </motion.p>
      </div>
    </div>
  );
}
