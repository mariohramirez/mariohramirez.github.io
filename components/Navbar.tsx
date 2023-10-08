import Link from 'next/link';
import React from 'react';
import { Logo } from '@/components/Logo'
import { useRouter } from 'next/router';
import {GithubIcon, LinkedInIcon, TwitterIcon} from '@/components/Icons';
import {motion} from "framer-motion";

interface CustomLinkProps{
    href: string;
    title: string;
    className?: string;
}

const CustomLink = ({href, title, className=""}:CustomLinkProps)=>{
    const router = useRouter();
    return(
        //Recibe la direccion como parametro, al igual que la clase, esta vez siendo una variable
        <Link href={href} className={` ${className} relative group`}>
            {title}
            {/*Agrega una linea debajo del link, en &nbsp es non breaking space point. Primero damos las propiedades de la linea
            antes de la animacion que definimos a partir del group-hover.
            Por ultimo tenemos en el $routes.asPath===href que si el link coincide con el path actual
            el tamano de la lineal sera del 100% de lo contrario sera de 0*/}
            <span className={`h-[1px] inline-block bg-dark absolute
            left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href?'w-full':'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    return (

        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4'/>
                <CustomLink href='/about' title='About' className='mx-4'/>
                <CustomLink href='/projects' title='Projects' className='mx-4'/>
                <CustomLink href='/articles' title='Articles' className='ml-4'/>
            </nav>

            <nav className='flex item-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com/marioh_ramirez" target={"blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mr-3">
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://github.com/mariohramirez" target={"blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3">
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/mariohramirez/" target={"blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3">
                    <LinkedInIcon />
                </motion.a>
            </nav>

            {/*Centra el logo en la pagina*/}
            <div className='absolute left-[50%] top-2 translate-x-[50%]'>
            <Logo />

            </div>
        </header>
    );
}

export { Navbar }