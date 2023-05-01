import Image from "next/image";

import Button from "@/components/Button";

export default function Hero() {
  return (
    <div
      className="bg-center bg-gray-900"
      style={{ backgroundImage: 'url("ornament/background.svg")' }}
    >
      <section className="container pt-[150px] pb-[100px]" id="home">
        <div className="flex items-center justify-center flex-col mb-[60px]">
          <span className="md:overline-md overline-sm text-white md:py-3 py-2 md:px-4 px-3 rounded-full bg-white/10 text-center md:mb-3 mb-2">
            number one creative digital agency
          </span>

          <h1 className="md:text-display-lg text-5xl font-bold text-center md:mb-6 mb-3 text-white">
            <span className="primary-400 text-transparent bg-clip-text">
              Smart Choices
            </span>{" "}
            <br /> For Your Business Growth
          </h1>

          <p className="text-gray-200 md:text-xl text-sm font-medium text-center md:mb-14 mb-10">
            We&apos;re a team of experienced designers, developers, <br /> and
            marketers, passionate about delivering exceptional digital
            solutions.
          </p>

          <Button variant="lg" withArrow>
            Contact Us
          </Button>
        </div>

        <div className="primary-400 px-[60px] py-14 rounded-[20px] relative backdrop-blur-2xl overflow-hidden">
          <h2 className="md:text-4xl text-lg font-semibold text-white text-center mb-10">
            Benefit of improving your business
          </h2>
          <div className="grid md:grid-cols-4 relative z-10 gap-y-6">
            <Benefit img="expand" desc="Expanding the Market" />
            <Benefit img="star" desc="Cost-Effective" />
            <Benefit img="wallet" desc="More Professional" />
            <Benefit img="client" desc="Attract Client" />
          </div>
          <svg
            className="absolute -top-[155px] -left-[67px]"
            width="364"
            height="364"
            viewBox="0 0 364 364"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M364 182C364 81.4842 282.516 0 182 0C81.4842 0 0 81.4842 0 182C0 282.516 81.4842 364 182 364C282.516 364 364 282.516 364 182ZM85.2781 182C85.2781 128.582 128.582 85.2781 182 85.2781C235.418 85.2781 278.722 128.582 278.722 182C278.722 235.418 235.418 278.722 182 278.722C128.582 278.722 85.2781 235.418 85.2781 182Z"
              fill="url(#paint0_linear_217_1478)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_217_1478"
                x1="182"
                y1="364"
                x2="182"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="absolute -bottom-[155px] -right-[67px]"
            width="364"
            height="364"
            viewBox="0 0 364 364"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M364 182C364 81.4842 282.516 0 182 0C81.4842 0 0 81.4842 0 182C0 282.516 81.4842 364 182 364C282.516 364 364 282.516 364 182ZM85.2781 182C85.2781 128.582 128.582 85.2781 182 85.2781C235.418 85.2781 278.722 128.582 278.722 182C278.722 235.418 235.418 278.722 182 278.722C128.582 278.722 85.2781 235.418 85.2781 182Z"
              fill="url(#paint0_linear_217_1478)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_217_1478"
                x1="182"
                y1="364"
                x2="182"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
}

const Benefit = ({ desc, img }: { desc: string; img: string }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2.5">
      <div className="w-[108px] h-[108px] rounded-full circle-link flex items-center justify-center cursor-pointer">
        <div className="w-[81.19%] h-[81.19%] rounded-full flex items-center justify-center primary-400">
          <div className="w-[97.74%] h-[97.74%] rounded-full bg-white flex items-center justify-center">
            <Image
              src={`icons/${img}.svg`}
              alt={`${img} logo`}
              width={52}
              height={52}
            />
          </div>
        </div>
      </div>

      <p className="text-white text-2xl font-medium text-center">{desc}</p>
    </div>
  );
};
