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

          </div>
        </div>
        <Layout />
      </main>
    </>
  );
}

export default Index;