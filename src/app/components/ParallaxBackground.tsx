import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import backgroundImage from 'figma:asset/9df11588ba1922bd0a80532ee30e6349703c8689.png';

export function ParallaxBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  // Parallax transforms - very subtle movement
  const backgroundX = useTransform(mouseX, [0, 1], [-8, 8]);
  const backgroundY = useTransform(mouseY, [0, 1], [-8, 8]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: backgroundX,
          y: backgroundY,
          scale: 1.05, // Slightly scaled up to prevent edges showing during parallax
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Cool blue/purple overlay to match tech brand identity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/35 via-indigo-900/25 to-purple-900/30" />

        {/* Subtle breathing animation overlay - very light movement */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/50" />
        </motion.div>

        {/* Subtle shift overlay for depth - cooler tones */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/15"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
}