import { useState, useEffect } from "react";
import Image from "next/image";

interface User {
  cell: string;
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
}

interface Comment {
  body: string;
}

export default function AboutUs() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [comments, setComments] = useState<Array<Comment>>([]);
  const leftData: Array<User> = [];
  const rightData: Array<User> = [];

  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=500");
    const data = await response.json();
    setUsers(data.results);
  };

  const fetchComments = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    fetchUsers();
    fetchComments();
  }, []);

  users.forEach((item, index) => {
    if (index % 2 === 0) {
      leftData.push(item);
    } else {
      rightData.push(item);
    }
  });

  return (
    <div className="bg-white min-h-screen max-h-screen overflow-hidden relative">
      <div className="absolute h-[100px] w-full top-0 white-gradient rotate-180 z-20" />
      <div className="absolute h-[100px] w-full bottom-0 white-gradient z-20" />
      <section className="container flex relative h-screen" id="about-us">
        <div className="flex gap-10 justify-end items-end overflow-hidden relative w-full h-full">
          <div className="left-wrapper md:-left-5 md:w-1/2 w-full">
            {leftData.map((user) => (
              <div key={user.cell} className="text-black md:mb-10 m-5">
                <div className="bg-[#F8F8F8] hover:primary-400 md:ml-auto p-6 rounded-xl transition-all group">
                  <p className="group-hover:text-gray-50 transition-colors text-gray-500 md:text-xl text-md md:mb-6 mb-4">
                    {comments[Math.floor(Math.random() * comments.length)].body}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={user.picture.medium}
                      width={56}
                      height={56}
                      alt=""
                      className="rounded-full block md:hidden"
                    />
                    <Image
                      src={user.picture.medium}
                      width={72}
                      height={72}
                      alt=""
                      className="rounded-full hidden md:block"
                    />

                    <div>
                      <p className="md:text-xl text-md md:font-semibold font-bold group-hover:text-white text-gray-900 transition-colors mb-1">
                        {user.name.first} {user.name.last}
                      </p>
                      <p className="group-hover:text-gray-50 text-gray-900 md:text-md text-sm transition-colors">
                        {user.location.city}, {user.location.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right-wrapper -right-5 w-1/2 md:block hidden">
            {rightData.map((user) => (
              <div key={user.cell} className="text-black md:mb-10 m-5">
                <div className="bg-[#F8F8F8] hover:primary-400 mr-auto p-6 rounded-xl transition-all group">
                  <p className="group-hover:text-gray-50 transition-colors text-gray-500 md:text-xl text-md md:mb-6 mb-4">
                    {comments[Math.floor(Math.random() * comments.length)].body}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={user.picture.medium}
                      width={72}
                      height={72}
                      alt=""
                      className="rounded-full"
                    />

                    <div>
                      <p className="text-xl font-semibold group-hover:text-white text-gray-900 transition-colors">
                        {user.name.first} {user.name.last}
                      </p>
                      <p className="group-hover:text-gray-50 text-gray-900 text-md transition-colors">
                        {user.location.city}, {user.location.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
