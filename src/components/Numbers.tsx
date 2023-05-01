import React from "react";

function Numbers() {
  const archivement = [
    {
      number: 100,
      title: "Years of Experiences",
    },
    {
      number: "666+",
      title: "Project Completed",
    },
    {
      number: "555+",
      title: "Satisfied Client",
    },
    {
      number: "10+",
      title: "Awards Achieved",
    },
  ];

  return (
    <div className="primary-50 bg-white">
      <div
        className="bg-right-bottom bg-no-repeat"
        style={{ backgroundImage: 'url("ornament/lines.svg")' }}
      >
        <section className="container py-20">
          <h1 className="md:text-6xl text-2xl font-medium text-gray-900 md:mb-16 mb-8 relative">
            We are passionate about helping businesses grow and succeed in the
            digital age. We take pride in our work and strive to exceed your
            expectations every time.
            <span className="w-36 h-36 rounded-full primary-50 absolute -top-10 -left-10" />
          </h1>

          <div className="rounded-[20px] md:p-8 p-6 primary-500 grid md:grid-cols-4 grid-cols-2 gap-y-6">
            {archivement.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3"
              >
                <h1 className="md:text-display-lg text-display-sm font-bold text-white">
                  {item.number}
                </h1>
                <p className="md:text-2xl text-md font-bold text-[#F3F3F3] text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Numbers;
