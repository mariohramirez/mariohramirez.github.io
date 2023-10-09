import React from 'react';
import { Layout } from './Layout';
import { Connect } from './Connect';

const Footer = () => {
    return (
        <footer className='w-[100%] border-t-2 border-solid border-revolver mx-auto font-medium text-md
        shadow-[0px_-20px_25px_-5px_#0000001A,0px_-8px_20px_-6px_#0000001A] shadow-revolver
        bg-gradient-to-l from-grape via-revolver to-grape'>
            <Layout className="py-8 px-8 text-prelude flex items-center justify-between">
                <h3>Developed by Mario Ramirez</h3>
                <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
                <Connect className="w-5 mr-4" className2="w-5 mr-4" className3="w-5 mr-4"
                color="#DCCFED" color2="#DCCFED" color3="#DCCFED" color4="#331C52"/>
            </Layout>
        </footer>
    )
}

export { Footer }