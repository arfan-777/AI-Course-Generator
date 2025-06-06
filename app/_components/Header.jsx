import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
     <Head>
        <title>SARA AI - Create Personalized AI Courses</title>
        <meta name="description" content="Generate personalized AI courses with our easy-to-use tool. Explore various topics and create your own curriculum today!" />
        <meta name="keywords" content="AI, Course Generator, Online Learning, Educational Tool, Machine Learning, Deep Learning" />
        <link rel="canonical" href="https://https://mrpankajpandey-ai-course.vercel.app//" />
        <meta property="og:title" content="AI Course Generator" />
        <meta property="og:description" content="Create personalized AI courses tailored to your needs." />
        <meta property="og:image" content="https://https://mrpankajpandey-ai-course.vercel.app//image.jpg" />
        <meta property="og:url" content="https://https://mrpankajpandey-ai-course.vercel.app//" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SARA AI" />
        <meta name="twitter:description" content="Generate personalized AI courses with our easy-to-use tool." />
        
      </Head>
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">
      <Link  href={'/'}  className="flex justify-center items-center gap-2">
      <Image src={'/logo.png'} width={44} height={44} /> <span className="font-bold text-xl">SARA AI</span>
      </Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
           
      <Link href={'/dashboard'} >

      <Button variant="startButton" > Get started</Button>
      </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
