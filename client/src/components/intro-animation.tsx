import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        onAnimationComplete={onComplete}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-primary font-['Crimson_Text']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        >
          AetherAlpha
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}