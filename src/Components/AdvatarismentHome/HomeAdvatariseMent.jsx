import { Link } from "react-router-dom";

const HomeAdvatariseMent = () => {
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div data-aos="flip-left" className="relative lg:w-1/2">
          <img
            src="https://i.ibb.co/v17vxn3/hp-elite-x3.jpg"
            alt=""
            className="w-full lg:absolute h-full]"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
          </svg>
        </div>
        <div
          data-aos="flip-right"
          className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2"
        >
          <div>
            <p className="inline-block animate-pulse text-green-500 px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
              Up Comming
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            HP Elite x3
          </h5>
          <p className="mb-5 text-gray-800 text-justify">
            The HP Elite x3 was built for enterprise users with several
            enterprise specific features such as high-end processing power
            (Qualcomm Snapdragon 820), large and bright display (Samsung 5.96
            WQHD OLED), IP67, MIL-STD 810
          </p>
          <div className="flex items-center">
            <Link
              to="/"
              aria-label=""
              className="inline-flex text-green-500 hover:text-green-800 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdvatariseMent;
