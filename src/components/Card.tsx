import Image from "next/image";

const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-gray-800 rounded-[32px] p-4">
      <div className="relative rounded-[20px] overflow-hidden group md:mb-6 mb-4">
        <div className="md:max-w-[600px] max-w-[300px] w-full md:max-h-[600px] max-h-[300px] h-full bg-white/50 rounded-[20px] aspect-square">
          <Image alt="" src={image} fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 group-hover:opacity-100 opacity-0 transition-opacity flex items-center justify-center">
          <div className="md:w-[218px] w-[108px] md:h-[218px] h-[108px] rounded-full circle-link flex items-center justify-center cursor-pointer">
            <div className="md:w-[177px] w-[88px] md:h-[177px] h-[88pxj]  rounded-full flex items-center justify-center primary-400">
              <div className="md:w-[173px] w-[84px] md:h-[173px] h-[84px] rounded-full bg-white flex items-center justify-center">
                <div className="cursor-pointer">
                  <svg
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:animate-pulse"
                  >
                    <path
                      d="M56.4451 99.7399L90.9883 65.1967L90.9883 95.3795C90.9883 97.7917 92.9675 99.7709 95.3797 99.7709C97.7918 99.7709 99.7401 97.8226 99.7401 95.4104L99.7401 54.6513C99.7401 52.2391 97.7918 50.2909 95.3797 50.2909L54.6205 50.229C52.2084 50.229 50.2601 52.1773 50.2601 54.5894C50.2601 57.0016 52.2084 58.9499 54.6205 58.9499L84.8033 59.0117L50.2601 93.5549C48.5592 95.2558 48.5592 98.0391 50.2601 99.7399C51.961 101.441 54.7442 101.441 56.4451 99.7399Z"
                      fill="url(#paint0_linear_147_1252)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_147_1252"
                        x1="121.929"
                        y1="75.0309"
                        x2="57.5958"
                        y2="120.174"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00796D" />
                        <stop offset="1" stopColor="#38C682" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="md:text-4xl text-lg font-bold text-white md:mb-3 mb-2">
        {title}
      </p>
      <p className="text-gray-100 md:text-xl text-md md:mb-3 mb-2">
        {description}
      </p>
    </div>
  );
};

export { Card };
