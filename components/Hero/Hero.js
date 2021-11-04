import Image from "next/image";
import { ContactForm } from "../contact/contact";
import Navbar from "../Navbar";

export default function Hero() {
  let backgroundImageUrl = "./image1.jpeg";

  let heroStyle = {
    backgroundImage: "url(" + backgroundImageUrl + ")",
  };

  return (
    <>
      <div className="bg-white-200 sticky top-0">
        <Navbar></Navbar>
      </div>
      <section className="bg-red-200 text-green-900 relative">
        <div
          className="min-h-screen hero-image  bg-center bg-cover flex"
          style={heroStyle}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-2 text-white">
              Let us build your next dream Kitchen or Bathroom. Our Kitchen
              specialists tailor fit your Ikea dreams and make them real.
            </h2>
            <h1 className="text-4xl font-bold mb-2 text-white">
              Toronto Kitchen and Bathroom specialists. Let our team gives you a
              step by step process inorder to acheive your dream renovation.
            </h1>
          </div>
          <div className="relative container p-4 flex items-end z-10">
            <div>
              <ContactForm />
              <div className="content float-left py-4 px-5 my-5"></div>
              <div className="cta clear-left px-5">
                <a
                  className="
                no-underline
                btn btn-primary 
                block sm:inline-block global-transition
                text-white"
                  href=""
                  target=""
                >
                  <div className="flex justify-center items-center">
                    <span className="fa fa-xs fa-arrow-right ml-4"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
