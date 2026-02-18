import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CherryBlossomProps {
  delay?: number;
}

export function CherryBlossom({ delay = 0 }: CherryBlossomProps) {
  const [position] = useState({
    left: Math.random() * 100,
    animationDuration: 15 + Math.random() * 15,
    size: 6 + Math.random() * 8,
    opacity: 0.2 + Math.random() * 0.3,
    rotationSpeed: 2 + Math.random() * 3,
  });

  return (
    <motion.div
      className="fixed pointer-events-none"
      initial={{ top: -20, left: `${position.left}%`, opacity: 0, rotate: 0 }}
      animate={{
        top: ['0%', '110%'],
        left: [
          `${position.left}%`,
          `${position.left + Math.sin(delay) * 15}%`,
          `${position.left + Math.cos(delay) * 10}%`,
          `${position.left}%`,
        ],
        opacity: [0, position.opacity, position.opacity, 0],
        rotate: [0, 360 * position.rotationSpeed],
      }}
      transition={{
        duration: position.animationDuration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg
        width={position.size}
        height={position.size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C12 2 10 6 10 8C10 10 11 11 12 11C13 11 14 10 14 8C14 6 12 2 12 2Z"
          fill="#FFF5F7"
        />
        <path
          d="M12 22C12 22 10 18 10 16C10 14 11 13 12 13C13 13 14 14 14 16C14 18 12 22 12 22Z"
          fill="#FFF5F7"
        />
        <path
          d="M2 12C2 12 6 10 8 10C10 10 11 11 11 12C11 13 10 14 8 14C6 14 2 12 2 12Z"
          fill="#FFE5EA"
        />
        <path
          d="M22 12C22 12 18 10 16 10C14 10 13 11 13 12C13 13 14 14 16 14C18 14 22 12 22 12Z"
          fill="#FFE5EA"
        />
        <path
          d="M5 5C5 5 8 7 9 8.5C10 10 9.5 11.5 8.5 11.5C7.5 11.5 6 10.5 5.5 9C5 7.5 5 5 5 5Z"
          fill="#FFD5DD"
        />
        <circle cx="12" cy="12" r="2.5" fill="#FFC0CB" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

export function CherryBlossomEffect() {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <>
      {petals.map((i) => (
        <CherryBlossom key={i} delay={i * 1.2} />
      ))}
    </>
  );
}