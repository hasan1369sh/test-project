import { memo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import SuggestItem from "../suggestItem/SuggestItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import RequestApi from "../../api/requestApi";
function UserSuggestion() {
  const [suggests, setSuggests] = useState([]);
  RequestApi(
    setSuggests,
    "https://run.mocky.io/v3/5932802a-9bb5-4737-9ea1-99a0e6fcb155"
  );
  return (
    <div className="suggestion">
      <div className="suggestionHeader">
        <p className="title">پیشنهاد کاربران</p>
        <a href="#home" className="suggestionMore">
          <p>مشاهده همه</p>
          <IoIosArrowBack size="20px" color="#00B862" />
        </a>
      </div>
      <Swiper
        breakpoints={{
          1350: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {suggests.map((item) => (
          <SwiperSlide key={item.id}>
            <SuggestItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default memo(UserSuggestion);
