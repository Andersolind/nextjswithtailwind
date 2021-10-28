import Image from "next/image";
import Navbar from "../Navbar";

export default function Hero() {
  let backgroundImageUrl =
    "https://lh5.googleusercontent.com/p/AF1QipNOx4BYt3Fde9Q9VmuE6_LYKYjoskPxSJkLPfTQ=s515-k-no";

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
          <div
            className="min-h-screen hero-image bg-right-bottom bg-cover flex"
            style={heroStyle2}
          >
            <div className="relative container mx-auto p-4 flex items-end z-10">
              <div>
                <div className="content float-left py-4 px-5 my-5">
                  <div className="heading mb-3 text-2xl md:text-4xl">
                    Affordable year-round care. No insurance required!
                  </div>
                  <div className="text leading-normal hidden sm:block">
                    Helping Women Meet All of their Health Care Needs
                  </div>
                </div>
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
                      <span>Join Alpha Today</span>
                      <span className="fa fa-xs fa-arrow-right ml-4"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
