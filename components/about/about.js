import React from "react";
import Image from "next/image";
import profile from "../../public/image4.jpeg";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            How do we start building your dream kitchen,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              1. Start With Function It’s really important to think about how
              you and your family spend time in the space. If you know you like
              to eat at the island, that’s an important consideration. If you
              have multiple chefs, consider how you want to work together. Do
              you always eat at the dining room table? Do you need a prep area
              that’s separate from the main cooking area?
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
