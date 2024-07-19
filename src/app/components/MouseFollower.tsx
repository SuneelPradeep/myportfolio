'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 250, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 40 });

  const springX1 = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY1 = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event :any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);
  // const [delay,setDelay]=useState(100)

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     mouseX.set(mousePosition.x);
  //     mouseY.set(mousePosition.y);
  //   }, delay);
  
  //   return () => clearTimeout(timeoutId); // Clear timeout on unmount
  // }, [mousePosition, mouseX, mouseY, delay]);

  return (
    <>
    {/* <motion.div
        className="fixed top-0  w-10 h-10 rounded-full border-2 border-blue-200 z-50 pointer-events-none"
        style={{
          translateX: mouseX,
          translateY: mouseY,
          transform: 'translate(-50%, -50%)',
        }}
      /> */}
    <motion.div
      className="fixed top-0 w-2 h-2 rounded-full bg-gradient-to-br  from-red-500 to-yellow-300 z-50 pointer-events-none"
      style={{
        translateX: springX1,
        translateY: springY1,
        // transform: 'translate(-50%, -50%)',
      }}
    />
    <motion.div
      className="fixed top-0  w-10 h-10 rounded-full border-2 border-violet-500 z-50 pointer-events-none"
      style={{
        translateX: springX,
        translateY: springY,
        x:-17,y:-15,
        // transform: 'translate(-150%, -150%)',
      }}
    />
  </>
  );
};

export default MouseFollower;
