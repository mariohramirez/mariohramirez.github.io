import Head from "next/head";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import profilePic from "@/public/images/profile/profile-pic-2.png";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Variants";
import { Type } from "@/components/TypeWriter";
import { Connect } from "@/components/Connect";
import Particle from "@/components/ParticleContainer";


const Index = () => {
  return (
    <>
      <Head>
        <title>Mario | Portfolio</title>
        <meta name="description" content="index" />
      </Head>
      <main className=" items-center text-dark w-full min-h-screen">
        <Layout className="pt-o" />
        <div className="flex items-center justify-between w-[90%] mx-auto ">

          <div className="w-1/2 flex flex-col items-center self-center p-2">
            <AnimatedText text="Hi there, I&apos;m Mario Ramirez" className="!text-6xl !text-left" />
            <div className="p-50, text-left self-start">
              <Type />
            </div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 2, ease: 'easeInOut' }} className="my-4 text-base font-medium text-justify text-prelude">
              My name is Mario Ramirez, I am a Software Engineering student at the Universidad de Antioquia
              in Medellín, Colombia. I&apos;m a lifelong learner, always searching for something new to
              learn and to try, not only in my professional medium, but also in other topics that lean towards
              my own expression.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 2, ease: 'easeInOut' }} className="flex items-center self-start mt-2">
              <Link href="/CV-Resume.pdf" target={'_blank'}
                className="flex items-center bg-revolver text-prelude p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-prelude hover:text-revolver
              border-2 border-solid border-transparent hover:border-revolver">Resume</Link>
              <Link href="mailto:marioh.ramirez@udea.edu.co" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-prelude underline">Contact me</Link>
              <Connect className="w-9 mr-3" className2="w-9 mr-3" className3="w-9 mr-3" />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="w-1/2 p-2 ">
            <Image src={profilePic} alt="Profile pic" className=" rounded-3xl w-full h-auto mr-[120px]" />
          </motion.div>
        </div>
        <Layout />

      </main>
    </>
  );
}

export default Index;