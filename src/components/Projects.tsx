import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Card } from "./Card";

export default function Projects() {
  const projects = [
    {
      title: "UI/UX Design",
      data: [
        {
          title: "Elevate Your Brand",
          description:
            "Our UI/UX design services are designed to help your business thrive in the online world. We'll work with you to create a stunning and effective design that will elevate your brand and drive business growth.",
          image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        },
        {
          title: "Design That Works",
          description:
            "Our UI/UX design services are designed to help your business succeed. We'll work with you to create a design that not only looks great, but also works effectively to drive business growth and achieve your goals.",
          image:
            "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        },
      ],
    },
    {
      title: "Digital Marketing",
      data: [
        {
          title: "Drive Business Growth",
          description:
            "Our digital marketing services are designed to help your business thrive in the online world. We'll work with you to create a strategy that drives business growth and achieves your goals.",
          image:
            "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          title: "Effective Marketing",
          description:
            "Our digital marketing services are designed to help your business succeed. We'll work with you to create a strategy that not only looks great, but also works effectively to drive business growth and achieve your goals.",
          image:
            "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        },
      ],
    },
    {
      title: "Sosmed Management",
      data: [
        {
          title: "Social Media That Works",
          description:
            "Our social media management services are designed to help your business thrive in the online world. We'll work with you to create a strategy that drives engagement and achieves your goals.",
          image:
            "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          title: "Engage Your Audience",
          description:
            "Our social media management services are designed to help your business succeed. We'll work with you to create a strategy that not only looks great, but also engages your audience and drives business growth.",
          image:
            "https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        },
      ],
    },
    {
      title: "Development",
      data: [
        {
          title: "Custom Solutions",
          description:
            "Our development services are designed to help your business thrive in the online world. We'll work with you to create custom solutions that meet your unique needs and drive business growth. Whether you need a new website, a mobile app, or a custom software solution, we've got you covered.",
          image:
            "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2106&q=80",
        },
        {
          title: "Effective Development",
          description:
            "Our development services are designed to help your business succeed. We'll work with you to create solutions that not only look great, but also work effectively to drive business growth and achieve your goals. Our team of experienced developers can help you with everything from front-end development to back-end integration and more.",
          image:
            "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        },
      ],
    },
  ];
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div>
      <div
        className="bg-center bg-gray-900 border-b border-gray-700"
        style={{ backgroundImage: 'url("ornament/background.svg")' }}
      >
        <section className="container py-[100px]" id="projects">
          <div className="flex items-center justify-center flex-col md:mb-[56px] mb-8">
            <h1 className="md:text-display-lg text-5xl font-bold text-center md:mb-6 mb-3 text-white">
              Our Project Have Been{" "}
              <span className="primary-400 text-transparent bg-clip-text">
                Done
              </span>
            </h1>

            <p className="text-gray-200 md:text-xl text-sm font-medium text-center">
              Take a look at some of our recent projects and see how we&apos;ve
              helped other businesses elevate <br /> their brand and drive
              business growth.
            </p>
          </div>

          <div className="bg-white md:rounded-full rounded-[20px] p-2 mx-auto grid md:grid-cols-4 grid-cols-2 md:mb-[64px] mb-8 max-w-max">
            {projects.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(item)}
                className={clsx(
                  selectedProject.title === item.title
                    ? "primary-500 text-white"
                    : "text-gray-500",
                  "font-medium md:text-md text-sm md:px-6 px-4 md:py-4 py-2 md:rounded-full rounded-[20px] focus:outline-none transition-all",
                  "hover:shadow-color-2xl",
                  "active:primary-400 active:text-white"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {selectedProject.data &&
              selectedProject.data.map((item, idx) => (
                <Card
                  key={idx}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
          </div>
        </section>
      </div>

      <section className="flex items-center justify-center gap-x-16 gap-y-0 flex-wrap py-8">
        <Image src="/logo/slack.svg" width={160} height={94} alt="Slack" />
        <Image src="/logo/google.svg" width={160} height={94} alt="Google" />
        <Image src="/logo/netflix.svg" width={160} height={94} alt="Netflix" />
        <Image src="/logo/air-bnb.svg" width={160} height={94} alt="Air bnb" />
        <Image src="/logo/adobe.svg" width={160} height={94} alt="Adobe" />
        <Image
          src="/logo/microsoft.svg"
          width={160}
          height={94}
          alt="Microsoft"
        />
      </section>
    </div>
  );
}
