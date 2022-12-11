import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
    "JQuery",
    "JavaScript",
    "TypeScript",
    "React Native",
    "React.JS",
    "Next.JS",
    "Node.JS",
    "Express.JS",
    "REST APIs",
    "MongoDB",
    "AWS tools",
    "Git",
    "GitHub",
    "SQLite",
    "Docker",
    "Postman",
    "Lighthouse",
    "Google dev tools",
  ];
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[50vh] w-1/2 sm:w-full">
        <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_4rlayuvp.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Good day! My name is Marvin Reginaldo. I enjoy creating website and
            different apps. My interest in web development started way back in
            2021 when I decided to study bubble.io a drag and drop app for
            building a website and this app taught me to create a site from
            scratch.
          </p>
          <p className="text-white">
            Then I became a Technical recruiter, which helps me to get familiar
            with different technologies and helps me to continue my journey. I
            ended-up in completing full-stack course. At the moment, I'am focus
            on building app using MERN stack, and these are my main frameworks
            that I use in building a website. I enjoying creating different site
            and as I explore the world of web development, I would like to
            search for company that can guide me to become a good developer.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-2xl ">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 sm:w-full">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
