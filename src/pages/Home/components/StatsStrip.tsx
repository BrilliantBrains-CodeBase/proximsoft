"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 95, suffix: "%", label: "Learner Satisfaction" },
  { value: 10, suffix: "+", label: "Years Of Industry Experience" },
  { prefix: "$", value: 10, suffix: "M+", label: "Career Value Created" },
  { value: 50, suffix: "M+", label: "Learning Hours Delivered" },
];

function CountUp({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix?: string;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // 🔁 Reset when not visible
    if (!inView) {
      setDisplay(0);
      return;
    }

    let flickerInterval: ReturnType<typeof setInterval>;
    let controls: any;

    // ⚡ Flicker phase
    flickerInterval = setInterval(() => {
      const random = Math.floor(Math.random() * value * 1.2);
      setDisplay(random);
    }, 60);

    // 🎯 Final animation
    const timeout = setTimeout(() => {
      clearInterval(flickerInterval);

      controls = animate(0, value, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setDisplay(Math.floor(v)),
      });
    }, 900);

    return () => {
      clearInterval(flickerInterval);
      clearTimeout(timeout);
      if (controls) controls.stop();
    };
  }, [inView, value]);

  return (
    <h2 className="text-white text-[48px] font-semibold tracking-tight leading-none">
      {prefix}
      {display}
      {suffix}
    </h2>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.6, // 👈 trigger only when 60% visible
  });

  return (
    <div className="w-full mx-auto flex justify-center">
      <motion.div
        ref={ref}
        className="w-[1200px] rounded-[32px] px-16 py-12 flex items-center justify-between"
        style={{
          background: "#312e81",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map((item, i) => (
          <div key={i} className="flex items-center">
            
            {/* Stat */}
            <motion.div
              className="flex flex-col items-center text-center min-w-[180px]"
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CountUp
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                inView={inView}
              />

              <p className="text-white/70 text-sm mt-2 font-medium">
                {item.label}
              </p>
            </motion.div>

            {/* Divider */}
            {i !== stats.length - 1 && (
              <motion.div
                className="h-[60px] w-px bg-white/20 mx-10"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  inView
                    ? { scaleY: 1, opacity: 1 }
                    : { scaleY: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.15,
                }}
                style={{ transformOrigin: "top" }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}