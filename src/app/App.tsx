import { motion } from 'motion/react';
import { AlertCircle, CreditCard, Sparkles, MessageSquare } from 'lucide-react';
import { Header } from './components/Header';
import { CherryBlossomEffect } from './components/CherryBlossomEffect';
import { ParallaxBackground } from './components/ParallaxBackground';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Japanese Background with Parallax */}
      <ParallaxBackground />

      {/* Cherry Blossom Petals Animation */}
      <CherryBlossomEffect />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-6 pt-28 pb-12">
          {/* Subscription Alert - Redesigned to match tech brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Cool tech-themed glass background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-indigo-950/25 to-blue-950/20 backdrop-blur-md" />
              
              {/* Stronger border for definition */}
              <div className="absolute inset-0 rounded-2xl border border-blue-400/30" />
              
              {/* Subtle tech glow */}
              <div className="absolute inset-0 rounded-2xl shadow-lg shadow-blue-500/5" />
              
              {/* Content */}
              <div className="relative flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/15 backdrop-blur-sm border border-blue-400/20">
                    <AlertCircle className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Subscription Required</h3>
                    <p className="text-blue-200/70 text-sm">Activate your subscription to access all features.</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 text-white font-medium transition-all"
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
            {/* Stronger outer glow for separation */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glass background - reduced opacity, medium blur */}
              <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-md" />
              
              {/* Stronger, crisper border - the hard anchor */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/40 shadow-2xl shadow-blue-900/30" />
              
              {/* Top accent bar - tech themed */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
              
              {/* Decorative corners with traditional Japanese pattern */}
              <div className="absolute top-4 left-4 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="text-blue-300">
                  <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="text-blue-300">
                  <circle cx="100" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative px-16 py-24">
                {/* Icon with floating animation - sharper shadow */}
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
                    {/* Cooler glow */}
                    <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-3xl scale-150" />
                    
                    {/* Icon container - stronger border for anchor */}
                    <div className="relative p-8 rounded-full bg-white/10 backdrop-blur-xl border-2 border-blue-300/30 shadow-2xl shadow-blue-900/40">
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
                  <h2 className="text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-2xl">
                    No applications yet
                  </h2>
                  <p className="text-blue-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
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
                    className="group relative px-8 py-4 rounded-2xl overflow-hidden shadow-xl shadow-blue-600/30"
                  >
                    {/* Gradient background - tech indigo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
                    
                    {/* Sharper border for definition */}
                    <div className="absolute inset-0 rounded-2xl border border-blue-300/20" />
                    
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
                    {/* Glass background with stronger border */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border-2 border-blue-300/25" />
                    
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
                  className="text-center mt-8 text-blue-200/50 text-sm"
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