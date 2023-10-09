import { motion } from "framer-motion";
import React from "react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';

interface ConnectProps {
    className?: string;
    className2?: string;
    className3?: string;
    color?: string;
    color2?: string;
    color3?: string;
    color4?: string;
}

const Connect = ({className="", className2="", className3="",
    color, color2, color3, color4}:ConnectProps) => {
    return (
        <>
        <nav className='ml-4 flex item-center justify-center flex-wrap'>
            <motion.a href="https://twitter.com/marioh_ramirez" target={"blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`${className}`}>
                <TwitterIcon color={color}/>
            </motion.a>
            <motion.a href="https://github.com/mariohramirez" target={"blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`${className2}`}>
                <GithubIcon color2={color2}/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/mariohramirez/" target={"blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`${className3}`}>
                <LinkedInIcon color3={color3} color4={color4}/>
            </motion.a>
        </nav>
        </>
    )
}

export {Connect}