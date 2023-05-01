/* eslint-disable @next/next/no-img-element */
import React from "react";
import Accordion from "@/components/Accordion";
import Numbers from "./Numbers";

export default function Services() {
  return (
    <>
      <div className="bg-white">
        <section className="container py-[100px]" id="services">
          <h1 className="md:text-display-lg text-5xl font-bold text-center text-gray-900 md:mb-16 mb-8">
            The Services We Offer{" "}
            <span className="primary-500 text-transparent bg-clip-text">
              For You
            </span>
          </h1>

          <div className="space-y-6">
            <Accordion number={"01"} title="UI/UX Design">
              <p className="md:text-lg text-md text-gray-500 md:mb-10 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis laborum id quisquam corporis et architecto sunt ullam
                dolorum iusto amet eaque reprehenderit in, expedita atque ab hic
                quasi delectus sequi fuga tempora a. Quam adipisci dignissimos
                asperiores exercitationem quod ratione?
              </p>
              <div className="flex items-center justify-between gap-6 md:flex-row flex-col">
                <div className="h-[327px] md:w-1/2 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1620206299258-ac415ce0f7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="h-[327px] md:w-1/2 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1600267147646-33cf514b5f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80"
                    alt=""
                  />
                </div>
              </div>
            </Accordion>
            <Accordion number={"02"} title="Digital Marketing">
              <p className="md:text-lg text-md text-gray-500 md:mb-10 mb-6 md:max-w-[75%] max-w-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt amet, explicabo odit architecto esse aliquam vitae
                voluptas numquam minus at.
              </p>
              <div className="flex items-center justify-between gap-6 md:flex-row flex-col">
                <div className="h-[327px] md:w-2/4 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="h-[327px] md:w-1/4 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2151&q=80"
                    alt=""
                  />
                </div>
                <div className="h-[327px] md:w-1/4 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
              </div>
            </Accordion>
            <Accordion number={"03"} title="Social Media Management">
              <p className="md:text-lg text-md text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet iure minima optio voluptate. Minus cum quis dolore alias
                repudiandae, autem maxime, quam nisi doloremque labore eaque
                magni libero dignissimos reiciendis consectetur repellat nemo
                ipsa maiores, tempore molestias dolorem. Id sit numquam
                voluptates maxime sed fugit earum debitis minus voluptatum
                nulla?
              </p>
              <div className="flex items-center justify-between gap-6 md:flex-row flex-col">
                <div className="h-[327px] md:w-1/4 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2534&q=80"
                    alt=""
                  />
                </div>
                <div className="h-[327px] md:w-2/4 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="h-[327px] md:w-1/4 w-full object-cover rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
              </div>
            </Accordion>
            <Accordion number={"04"} title="Development">
              <p className="text-lg text-[#5C5E60] mb-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident, ea exercitationem? Illo ipsum, magnam nisi molestiae
                nemo accusantium assumenda? Nihil eligendi corporis quam
                deserunt asperiores unde repudiandae vero sed sapiente molestiae
                praesentium accusantium odit placeat delectus quae nisi tempora
                veritatis nesciunt, laudantium laborum magnam fugit ut doloribus
                soluta. Tenetur labore autem illo illum magnam quisquam, quae
                omnis eum nobis ducimus!
              </p>
              <div className="h-[327px] object-cover rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
            </Accordion>
          </div>
        </section>
      </div>
      <Numbers />
    </>
  );
}
