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
            className='w-full h-10 px-6 text-prelude flex items-center justify-center
            rounded-full text-2xl font-bold drop-shadow-lg shadow-black '
            //Animacion del logo mientras el mouse este encima
            whileHover={{
                //Va del color negro, morado,rojo, morado, negro
                color: ["#DCCFED", "rgba(131,58,180,1)","#291C3A","rgba(131,58,180,1)","#DCCFED"],
                //La duracion del cambio entre colores, repeticion infinita
                transition:{duration:3, repeat:Infinity},

            }}>
                <span>M</span> 
                <span>R</span></MotionLink>
        </div>
    )
}

export {Logo}