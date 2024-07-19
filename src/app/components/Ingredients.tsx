'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type FormatterChar = {
  char: string;
  delay: number;
};

const getFormattedTextArray = (): FormatterChar[] => {
  const formattedText = [
    { char: '<span class="text-blue-500">const </span>', delay: 0 },
    { char: 'suneel: Array<', delay: 0 },
    { char: '<span class="text-green-500">Ingredient</span>', delay: 0 },
    { char: '> ', delay: 0 },
    { char: '<span class="text-blue-500">= </span>', delay: 0 },
    { char: '[<br>', delay: 0 },
    { char: '<span class="pl-5"></span>', delay: 0 },
    { char: '<span class="text-red-500">Developer</span>, ', delay: 0 },
    { char: '<span class="text-red-500">Photographer</span>, ', delay: 0 },
    { char: '<span class="text-red-500">Singer</span>, ', delay: 0 },
    { char: '<span class="text-red-500">Guitarist</span>, ', delay: 0 },
    { char: '<span class="text-red-500">Artist</span>, ', delay: 0 },
    { char: '<span class="text-red-500">Fitness Freak</span>,<br>', delay: 0 },
    { char: '<span class="pl-5"></span>', delay: 0 },
    { char: '<span class="text-red-500">Sugar</span>, ', delay: 0 },
    { char: '<span class="text-red-500">Spice</span>, ', delay: 0 },
    { char: '<span class="text-red-500">...everythingNice</span>,<br>', delay: 0 },
    { char: '];', delay: 0 },
  ];
  return formattedText.map((i, id) => ({
    char: i.char,
    delay: id * 80,
  }));
};

const Ingredients = ({ speed = 200, initialDelay = 3800 }) => {
  const text: FormatterChar[] = getFormattedTextArray();
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text[index].char);
        setIndex((prev) => prev + 1);
      }, index === 0 ? initialDelay : speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed, initialDelay]);

  return (
    <motion.div className='mx-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <code dangerouslySetInnerHTML={{ __html: displayText }} />
    </motion.div>
  );
};

export default Ingredients;
