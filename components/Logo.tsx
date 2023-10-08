import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

//Definimos la variable para Motion que sera para nuestra animacion
//Le damos como parametro un tipo Link
const MotionLink = motion(Link);

const Logo = () => {
    return(
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/About" 
            className='w-16 h-16 bg-dark text-white flex items-center justify-center
            rounded-full text-2xl font-bold'
            //Animacion del logo mientras el mouse este encima
            whileHover={{
                //Va del color negro, morado,rojo, morado, negro
                backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(131,58,180,1)","#121212"],
                //La duracion del cambio entre colores, repeticion infinita
                transition:{duration:3, repeat:Infinity},

            }}>
                MR</MotionLink>
        </div>
    )
}

export {Logo}