import { Link } from "react-router-dom";

const HomeBaner = () => {
  return (
    <div className="px-4 bg-green-100 py-16  md:px-24 lg:px-8 lg:py-12">
      <div className="flex flex-col items-center justify-between w-full mx-auto md:max-w-6xl  mb-10 lg:flex-row">
        <div data-aos="flip-left" className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block text-primary px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg text-primary mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Love the power.
              <br className="hidden md:block" />
              Love the price.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              From $429 or $17.87/mo. for 24 mo.2
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </Link>
            <Link
              to="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="flex items-center justify-center lg:w-1/2"
        >
          <div className="w-2/5">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/one-girl-phone.png"
              alt=""
            />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/two-girls-phone.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Link
        to="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default HomeBaner;
