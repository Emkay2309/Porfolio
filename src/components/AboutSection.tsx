"use client";
import React, { useTransition, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1711142674680.json";
import CompleteCard from "./skills/CompleteCard";
import { delay, motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const skills_ = ["react", "javascript", "nodejs"];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  // const item = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 }
  // }
  const item = { hidden: { opacity: 1 } };

  const list = { hidden: { opacity: 0 } };

  return (
    <section className="" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Lottie animationData={animationData} />
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-7xl font-bold  mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-white dark:text-textColor">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript , React , Java , SpringBoot , Next Js,
            Typescript , Tailwind , MySQL, HTML, CSS, and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            {/* THis is skills section card */}
            <div className="mx-4 h-32">
              <CompleteCard
                title="Frontend"
                description="Html , CSS , JavaScript , React , Next , Typescript , Tailwind"
              />
            </div>
            <div className="mx-4">
              <CompleteCard
                title="Backend"
                description="Java , Spring , GIT , MySql "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
