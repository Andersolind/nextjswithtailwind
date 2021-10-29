import Image from "next/image";
import { ContactForm } from "../contact/contact";
import Navbar from "../Navbar";

export default function Hero() {
  let backgroundImageUrl = "./image1.jpeg";

  let backgroundImageUrl2 =
    "https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)";
  let heroStyle = {
    backgroundImage: "url(" + backgroundImageUrl + ")",
  };
  let heroStyle2 = { backgroundImage: "url(" + backgroundImageUrl2 + ")" };

  return (
    <>
      <div className="bg-white-200 sticky top-0">
        <Navbar></Navbar>
      </div>
      <section className="bg-red-200 text-green-900 relative">
        <div
          className="min-h-screen hero-image bg-center bg-cover flex"
          style={heroStyle}
        >
          <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-2 text-white">
              Let use build your next dream Kitchen or Bathroom
            </h2>
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
