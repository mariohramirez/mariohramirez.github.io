import Head from "next/head";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import profilePic from "@/public/images/profile/profile-pic-1.jpg";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>index</title>
        <meta name="description" content="index" />
      </Head>
      <main className=" items-center text-dark w-full min-h-screen">
        <Layout className="pt-o" />
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="Profile pic" className="rounded-full  w-[450px] h-[450px] mx-[120px]" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center mx-[4px]">
          <AnimatedText text="Hi, I&apos;m Mario Ramirez, Software Engineering Student" className="!text-6xl !text-left" />
            <p className="my-4 text-base font-medium text-justify">
            My name is Mario Ramirez, I am a Software Engineering student at the Universidad de Antioquia in Medellín, Colombia. I'm a lifelong learner, always searching for something new to learn and to try, not only in my professional medium, but also in other topics that leans towards my own expression.  
            </p>
           
          </div>
        </div>
        <Layout />
      </main>
    </>
  );
}

export default Index;