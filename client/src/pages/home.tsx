import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-primary font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          AetherAlpha
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button 
            className="text-lg font-normal text-black hover:text-white bg-transparent hover:bg-primary transition-colors border-none"
          >
            Explore the Alpha Fund
          </Button>
        </motion.div>
      </div>
    </div>
  );
}