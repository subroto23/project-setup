import { Link } from "react-router-dom";
import taskIcon from "../../assets/Task.svg";
const HomeBaner = () => {
  return (
    <div>
      <div className="px-4 bg-green-100 py-16 md:px-24 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-between w-full mx-auto md:max-w-6xl  relative mb-10 lg:flex-row">
          <div
            data-aos="flip-left"
            className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5"
          >
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg text-primary mb-4 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                Task Management
              </h2>
              <p className="max-w-md text-justify mb-6 text-lg font-medium">
                Unleash the power of seamless task management with our
                cutting-edge website. Our banner section invites you to a world
                where productivity meets simplicity. Imagine a place where every
                task is effortlessly organized, deadlines are met with ease, and
                collaboration flows seamlessly.
              </p>
              <div className=" py-4">
                <button>
                  <Link
                    to="/dashboard"
                    className="bg-green-500 px-8 py-4 rounded-lg text-white hover:bg-green-600"
                  >
                    Let’s Explore
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="flex items-center justify-center lg:w-1/2"
          >
            <img src={taskIcon} alt="task" />
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
    </div>
  );
};

export default HomeBaner;
