import { motion } from "framer-motion";
import { Link } from "wouter";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap, TrendingUp, Clock, Shield, LandmarkIcon, Rocket } from 'lucide-react';

export default function Performance() {
  const performanceData = [
    { year: 2024, return: 342 },
    { year: 2023, return: 112 },
    { year: 2022, return: 63 },
  ];

  const portfolioData = [
    { name: 'Digital Assets & Blockchain', value: 25 },
    { name: 'AI & Advanced Computing', value: 20 },
    { name: 'Biotech & Longevity', value: 15 },
    { name: 'Autonomous Systems & Robotics', value: 15 },
    { name: 'Metaverse & Spatial Computing', value: 10 },
    { name: 'Space & Energy Innovations', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C4B4', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const selectionCriteria = [
    { Icon: Zap, title: 'Disruptive Potential', description: 'Investments selected from AI, blockchain, biotech, and automation sectors, driving future innovation.' },
    { Icon: TrendingUp, title: 'Scalability', description: 'Companies or assets must demonstrate exponential growth potential.' },
    { Icon: Clock, title: 'Market Timing', description: 'Utilizing advanced data analytics and AI-driven models to determine optimal entry points.' },
    { Icon: Shield, title: 'Risk Management', description: 'Strategic hedging techniques and diversified allocations to mitigate volatility.' },
    { Icon: LandmarkIcon, title: 'Institutional Backing', description: 'We prioritize assets supported by top VCs, hedge funds, and tech leaders.' },
    { Icon: Rocket, title: 'Long-Term Viability', description: 'Focus on assets positioned for sustainable market dominance.' },
  ];

  const processSteps = [
    'Research & Analysis',
    'Risk Modeling',
    'AI-Powered Predictions',
    'Strategic Entry',
    'Performance Optimization'
  ];

  return (
    <div className="min-h-screen w-full bg-white p-8">
      <div className="container mx-auto px-4">

        {/* Logo/Home button */}
        <Link href="/">
          <motion.h1 
            className="text-3xl font-bold text-primary font-['Inter'] cursor-pointer mb-8"
            whileHover={{ 
              scale: 1.05,
              color: "hsl(var(--primary))",
              transition: {
                duration: 0.2,
                ease: "easeInOut"
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            AetherAlpha
          </motion.h1>
        </Link>

        {/* Main Content */}
        <div className="flex flex-col items-center">

          <motion.h2 
            className="text-5xl font-bold mb-12 text-black text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unrivaled Yield.
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {performanceData.map((data, index) => (
              <div 
                key={data.year}
                className="p-6 rounded-lg bg-white shadow-lg border border-gray-200"
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


          {/* Portfolio Section */}
          <motion.div
            className="mb-16 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black text-center">
              Portfolio Composition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="h-[400px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: any) => `${value}%`}
                      contentStyle={{ background: 'white', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '10px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-left space-y-4">
                {portfolioData.map((sector, index) => (
                  <div key={sector.name} className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">
                      {sector.name} - {sector.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>


          {/* Precision Strategy Section */}
          <motion.div
            className="mb-16 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black text-center">
              Investment Strategy
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
              Meticulously engineered for maximum alpha, every investment undergoes rigorous evaluation before earning its place in our portfolio.
            </p>

            {/* Selection Criteria Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {selectionCriteria.map((criteria, index) => (
                <motion.div
                  key={criteria.title}
                  className="p-6 bg-white rounded-lg shadow-lg text-left border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    <criteria.Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{criteria.title}</h3>
                  <p className="text-sm text-gray-600">{criteria.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Investment Process Flowchart */}
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-wrap justify-center items-center gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <span className="font-semibold">{index + 1}. {step}</span>
                    </motion.div>
                    {index < processSteps.length - 1 && (
                      <motion.div 
                        className="mx-4 text-primary text-xl font-bold"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>


          {/* Disclaimer */}
          <motion.p 
            className="text-xs text-gray-500 max-w-3xl mx-auto mt-16 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Disclaimer: The performance metrics displayed under "Unrivaled Yield" represent historical average annual returns of AetherAlpha and do not guarantee future results. All investments involve risk, including the potential loss of capital. AetherAlpha operates as a private hedge fund and is not open to the public. Participation is restricted to accredited investors as defined by applicable securities laws. No offer to buy or sell securities is being made, and this information is for informational purposes only. Prospective investors should conduct their own due diligence and consult with a financial advisor before making any investment decisions.
          </motion.p>
        </div>
      </div>
    </div>
  );
}