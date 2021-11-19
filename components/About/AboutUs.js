import React from "react";
import Image from "next/image";
import profile from "/public/image4.jpeg";
import bathroom from "/public/best-bathroom-renovations-in-hamilton.jpeg";
import bathroomVanity from "/public/best-bathroom-renovations-in-toronto.jpeg";

export default function About() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            CISZKOCONTRACTING How can help you plan your dream Ikea kitchen,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              1. Start With what makes sense ! It’s really important to think
              about how time is going to be spent in your newly renovated Ikea
              planner kitchen. If you know you like to eat at in the
              middle(island), think about sharable space as well. Do you always
              eat at the dining room table or in front of the tv? Then you can
              work with our Ikea kitchen planner expert contractors today!
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Ikea home builder in Mississauga"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Ikea home builder in Toronto"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>

        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            2. Make Room For What You Need,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              With our expert Ikea builder bathroom or kitchen ideas, we suggest
              to use all need space. Careful planning with our experts, will
              allow you to design a space that works for you and your family.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Ikea home builder in Ancaster"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>

        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            3. Pick out your decor,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Our Ikea home builder experts will build your Bathroom or kitchen
              based on your style
            </p>
          </div>
        </div>
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={bathroom}
            alt="Best bathroom renovations in Toronto"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>

        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            4. Your future bathroom,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Ikea bathrooms can be hard to design let our designers carefully
              deisgn this for you.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={bathroomVanity}
            alt="Toronto kitchen and bathroom contractors"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>

        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            5. Finalize stages,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Designing bathrooms and doing full renovations with contractors
              can be a very hard task. Let our Ikea spcialists assit you in
              getting your picture perfect bathroom ready.
            </p>

            <p className="mb-4">Contact Us Today!</p>
            <a href="tel:+1-647-271-9727">1-647-271-9727</a>
          </div>
        </div>
      </div>
    </div>
  );
}
