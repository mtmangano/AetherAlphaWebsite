import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-primary font-['Playfair_Display']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AetherAlpha
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Explore the Alpha Fund
          </Button>
        </motion.div>
      </div>
    </div>
  );
}