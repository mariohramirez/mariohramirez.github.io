import React from 'react';
import { motion } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },

    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },

    animate: {
        opacity: 1,
        y: 0,
    },
};

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
                variants={quote}
                initial='initial'
                animate='animate'
            >
                {text.split(' ').map((word, index) => (
                    <motion.span
                        key={word + '-' + index}
                        className='inline-block'
                        variants={singleWord}
                        initial='initial'
                        animate='animate'
                        transition={{
                            delay: index * 0.15, // Adjust the delay based on the word's index
                        }}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export { AnimatedText };
