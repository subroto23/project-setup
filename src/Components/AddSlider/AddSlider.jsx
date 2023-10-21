import axios from "axios";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AddSlider = ({ slidesShow }) => {
  const [slidesDatas, setSlidesDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/slider/${slidesShow}`)
      .then((res) => {
        setSlidesDatas(res.data.payload), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-12 border-8 border-b-green-500">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          {loading
            ? null
            : slidesDatas?.map((data) => (
                <SwiperSlide key={data._id}>
                  <img
                    className="w-full relative md:h-[500px]"
                    src={data?.imageUrl}
                    alt=""
                  />
                  <span className="absolute bottom-2 right-4 bg-green-500 text-white px-6 py-2 rounded-sm">
                    {slidesShow}
                  </span>
                </SwiperSlide>
              ))}
        </Swiper>
      </>
    </div>
  );
};

export default AddSlider;
