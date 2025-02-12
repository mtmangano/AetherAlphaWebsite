import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Performance() {
  const performanceData = [
    { year: 2024, return: 342 },
    { year: 2023, return: 112 },
    { year: 2022, return: 63 },
  ];

  return (
    <div className="min-h-screen w-full bg-white p-8">
      {/* Logo/Home button */}
      <Link href="/">
        <motion.h1 
          className="text-3xl font-bold text-primary font-['Inter'] cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          AetherAlpha
        </motion.h1>
      </Link>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unrivaled Yield.
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {performanceData.map((data, index) => (
            <div 
              key={data.year}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {data.return}%
              </div>
              <div className="text-gray-600">
                {data.year} Return
              </div>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p 
          className="text-xs text-gray-500 max-w-3xl mx-auto mt-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Disclaimer: The performance metrics displayed under "Unrivaled Yield" represent historical average annual returns of AetherAlpha and do not guarantee future results. All investments involve risk, including the potential loss of capital. AetherAlpha operates as a private hedge fund and is not open to the public. Participation is restricted to accredited investors as defined by applicable securities laws. No offer to buy or sell securities is being made, and this information is for informational purposes only. Prospective investors should conduct their own due diligence and consult with a financial advisor before making any investment decisions.
        </motion.p>
      </div>
    </div>
  );
}