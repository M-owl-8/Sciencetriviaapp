import { motion } from 'motion/react';
import { AlertCircle, CreditCard, Sparkles, MessageSquare } from 'lucide-react';
import { Header } from './components/Header';
import { CherryBlossomEffect } from './components/CherryBlossomEffect';
import backgroundImage from 'figma:asset/9df11588ba1922bd0a80532ee30e6349703c8689.png';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Japanese Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle overlay to enhance readability without changing colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/30" />
      </div>

      {/* Cherry Blossom Petals Animation */}
      <CherryBlossomEffect />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-6 pt-28 pb-12">
          {/* Subscription Alert */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Glass background with subtle color */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/15 via-red-900/15 to-orange-900/15 backdrop-blur-xl" />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-orange-200/20" />
              
              {/* Content */}
              <div className="relative flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <AlertCircle className="w-6 h-6 text-orange-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Subscription Required</h3>
                    <p className="text-white/70 text-sm">Activate your subscription to access all features.</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-medium transition-all"
                >
                  <CreditCard className="w-5 h-5" />
                  Go to Billing
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Main Applications Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            {/* Subtle glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
            
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glass background - subtle and natural */}
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />
              
              {/* Elegant border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20" />
              
              {/* Top accent bar (subtle like traditional Japanese lacquerware) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
              
              {/* Decorative corners with traditional Japanese pattern */}
              <div className="absolute top-4 left-4 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="text-white">
                  <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="text-white">
                  <circle cx="100" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative px-16 py-24">
                {/* Icon with floating animation */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex justify-center mb-8"
                >
                  <div className="relative">
                    {/* Soft glow */}
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl scale-150" />
                    
                    {/* Icon container */}
                    <div className="relative p-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/20">
                      <Sparkles className="w-16 h-16 text-blue-100" strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
                    No applications yet
                  </h2>
                  <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                    Start your first application to unlock personalized timelines,<br />
                    AI planning, and shared mobile progress.
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center justify-center gap-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20"
                  >
                    {/* Gradient background inspired by Japanese indigo dye */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Button content */}
                    <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
                      <Sparkles className="w-5 h-5" />
                      Start New Application
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-2xl overflow-hidden"
                  >
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20" />
                    
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Button content */}
                    <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
                      <MessageSquare className="w-5 h-5" />
                      Open AI assistant
                    </span>
                  </motion.button>
                </motion.div>

                {/* Bottom hint text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-center mt-8 text-white/50 text-sm"
                >
                  Takes only 3-5 minutes to complete
                </motion.p>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="relative container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-white/50 text-sm"
            >
              © 2026 Ketdik. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                AI Assistant
              </a>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}