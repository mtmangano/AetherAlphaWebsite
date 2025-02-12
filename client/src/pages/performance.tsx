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
    { Icon: Zap, title: 'Disruptive Potential', description: 'Investments must be on the cutting edge of AI, blockchain, biotech, or automation.' },
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
      {/* Logo/Home button */}
      <Link href="/">
        <motion.h1 
          className="text-3xl font-bold text-primary font-['Inter'] cursor-pointer"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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

        {/* Vanguard Portfolio Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-black">
            The Vanguard Portfolio
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Strategically positioned at the frontier of digital assets, AI, and emerging technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="h-[400px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => `${value}%`}
                    contentStyle={{ background: 'white', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
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
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-black">
            Precision Strategy
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Meticulously engineered for maximum alpha, every investment undergoes rigorous evaluation before earning its place in our portfolio.
          </p>

          {/* Selection Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {selectionCriteria.map((criteria, index) => (
              <motion.div
                key={criteria.title}
                className="p-6 bg-white rounded-lg shadow-lg text-left"
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
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary text-white px-4 py-2 rounded-lg">
                  {step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mx-2 text-primary">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p 
          className="text-xs text-gray-500 max-w-3xl mx-auto mt-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Disclaimer: The performance metrics displayed under "Unrivaled Yield" represent historical average annual returns of AetherAlpha and do not guarantee future results. All investments involve risk, including the potential loss of capital. AetherAlpha operates as a private hedge fund and is not open to the public. Participation is restricted to accredited investors as defined by applicable securities laws. No offer to buy or sell securities is being made, and this information is for informational purposes only. Prospective investors should conduct their own due diligence and consult with a financial advisor before making any investment decisions.
        </motion.p>
      </div>
    </div>
  );
}