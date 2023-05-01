import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900" id="contact-us">
      <div className="container border-t border-gray-700 pt-[100px] pb-10 grid grid-cols-12 gap-y-10">
        <div className="md:col-span-6 col-span-12">
          <div className="md:col-span-2 col-span-11 flex items-center gap-3 mb-6">
            <Image src="logo/default.svg" width={52} height={34} alt="" />
            <p className="text-white font-bold italic text-2xl">Agenone</p>
          </div>

          <p className="md:text-lg text-md text-gray-200 mb-10">
            We&apos;re a team of experienced designers, <br /> developers, and
            marketers, passionate about <br /> delivering exceptional digital
            solutions.
          </p>

          <a
            href="mailto:wwicaksono96@gmail.com"
            className="md:text-lg text-md text-gray-200 font-medium"
          >
            hello@agenone.com
          </a>
        </div>

        <div className="grid grid-cols-6 md:col-span-6 col-span-12">
          <div className="flex flex-col col-span-2">
            <p className="md:text-lg text-md font-bold text-white mb-6">Menu</p>
            <ul>
              <li className="mb-4">
                <a href="#" className="md:text-lg text-md text-gray-200">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#services"
                  className="md:text-lg text-md text-gray-200"
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#project" className="md:text-lg text-md text-gray-200">
                  Project
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#about-us"
                  className="md:text-lg text-md text-gray-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="md:text-lg text-md text-gray-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-2">
            <p className="md:text-lg text-md font-bold text-white mb-6">
              Support
            </p>
            <ul>
              <li className="mb-4">
                <a href="#" className="md:text-lg text-md text-gray-200">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#services"
                  className="md:text-lg text-md text-gray-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#project" className="md:text-lg text-md text-gray-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-2">
            <p className="md:text-lg text-md font-bold text-white mb-6">
              Social Media
            </p>
            <ul>
              <li className="mb-4">
                <a
                  href="https://www.linkedin.com/in/wiscaksono/"
                  rel="noopener"
                  target="_blank"
                  className="md:text-lg text-md text-gray-200"
                >
                  Linked In
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://twitter.com/wiscaksono"
                  className="md:text-lg text-md text-gray-200"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.instagram.com/amachoker/"
                  className="md:text-lg text-md text-gray-200"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/wiscaksono"
                  className="md:text-lg text-md text-gray-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 border-t border-gray-700 container">
        <p className="md:text-lg text-md text-gray-200 md:text-center text-left">
          Copyright © {new Date().getFullYear()} by Agenone. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
