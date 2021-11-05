import Navbar from "../Navbar/Navbar";

export default function Hero() {
  let backgroundImageUrl = "./image1.jpeg";

  let heroStyle = {
    backgroundImage: "url(" + backgroundImageUrl + ")",
  };

  let setOverlay = {
    backgroundColor: "rgba(52, 52, 52, 0.3)",
  };

  return (
    <>
      <div className="bg-white-200 ">
        <Navbar></Navbar>
      </div>
      <section className="bg-red-200 text-green-900 relative">
        <div
          className="min-h-screen   bg-center bg-cover flex"
          style={heroStyle}
        >
          <div className="relative container p-4 flex items-end z-10">
            <div>
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
