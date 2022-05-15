import React from "react";
import Image from "next/image";
import profile from "/public/ikea-best-kitchen.jpeg";
import profile2 from "/public/image5.jpeg";
import bathroom from "/public/ikea-home-planner-ancaster.jpeg";
import bathroomVanity from "/public/Ikea-home-planner.jpeg";
import bath from "/public/best-bathroom-renovations-in-toronto.jpeg";

export default function About() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            We are the best kitchen remodelers in Anacster we work with
            Ciszkocontracting to finalize our designs - How can we help you plan
            your dream Ikea kitchen and bathroom renovation,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              What are Cabinets? – the cabinets are a charcoal stain on maple,
              while the island interior and floating shelves are amaziing .
              Certain colors have come a long way. It’s very durable, mimics
              wood grains and is very affordable. The combination of dark and
              light provides a perfect contrast for alot of happy clients. the
              contemporary lines some warmth in the wood tones. 2. Dedicated
              Coffee Station – at the end of the kitchen, a coffee station
              houses mugs, coffee maker and a variety of beverages, with open
              and closed shelving to display décor items. It’s conveniently
              located next to the dedicated living room. 3. Floating Recycling
              Station – placed in the island next to the prep sink, it provides
              convenience for garbage, recycling and composting, along with a
              shelf to store garbage bag supplies. 5’ Island – the large island
              is multi-functional, providing ample prep surface, a sink,
              recycling/garbage, microwave, stores all the mini appliances, a
              bookshelf for displaying cookbooks and storing vegetables, and
              offers secondary eating space for every day casual meals and
              becomes a serving area when hosting and entertaining guests.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile2}
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
            src={bathroom}
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
            2. Make Room For What You Need,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Amazing Shelves – floating shelves are best put near the corner
              window to allow for light and to display items in your home. The
              purpose was to make the kitchen part of the living space.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Best renovation company in ancaster"
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
              Microwave Drawer – placing the microwave in the island is
              convenient and safe,reaching up to remove a hot containers can
              leave your day ruined Valence – the under-cabinet light is hidden
              behind the doors, creating a beautiful seamless clean look is key
              to having a happy kitchen.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={bath}
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
