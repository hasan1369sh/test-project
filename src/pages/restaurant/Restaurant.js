/* eslint-disable no-lone-blocks */
import { memo, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Home from "../home/Home";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import RestaurantItem from "../../components/restaurantItem/RestaurantItem";
import ListItem from "../../components/listItemRestaurant/ListItem";
import Icon from "../../components/icon/Icon";
import NavItem from "../../components/navItem/NavItem";
import RequestApi from "../../api/requestApi";
import RestaurantsApi from "../../api/restaurantsApi";
function Restaurant() {
  const [focus, setFocus] = useState("");
  const [word, setWord] = useState("");
  const [show, setShow] = useState("");
  const [show2, setShow2] = useState("");
  const [hidden, setHidden] = useState("");
  const [hidden2, setHidden2] = useState("hidden");
  const [zIndex, setZIndex] = useState("");
  const [value, setValue] = useState("به ترتیب پیش فرض");
  const [activeAll, setActiveAll] = useState("activeP");
  const [activeEco, setActiveEco] = useState("");
  const [activeMed, setActiveMed] = useState("");
  const [activeExp, setActiveExp] = useState("");
  const [activeLiAll, setActiveLiAll] = useState("activeLi");
  const [activeAAll, setActiveAAll] = useState("activeA");
  const [activeLiSalad, setActiveLiSalad] = useState("");
  const [activeASalad, setActiveASalad] = useState("");
  const [activeLiSea, setActiveLiSea] = useState("");
  const [activeASea, setActiveASea] = useState("");
  const [activeLiInter, setActiveLiInter] = useState("");
  const [activeAInter, setActiveAInter] = useState("");
  const [List, setList] = useState([]);

  const [restaurants, setRestaurants] = useState([]);
  RestaurantsApi(
    word,
    setRestaurants,
    "https://run.mocky.io/v3/a42ca9d5-a9c4-4c72-b2b3-ad99bf4077df"
  );

  const [navItems, setNavItems] = useState([]);
  RequestApi(
    setNavItems,
    "https://run.mocky.io/v3/eaf5dd77-5306-4093-ba7b-66364be1eacc"
  );
  const fastFoods = [
    {
      id: 1,
      clsLi: "padd",
      clsImg: "hidden",
      img: null,
      clsA: null,
      icon: (
        <IoIosArrowForward size="18px" style={{ margin: "0 5px 0 10px" }} />
      ),
      title: "بازگشت",
    },
    {
      id: 2,
      clsLi: "activeLi",
      clsImg: "hidden",
      img: null,
      clsA: "activeA",
      icon: null,
      title: "همه فست فود ها",
    },
    {
      id: 3,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/pizza.png",
      clsA: null,
      icon: null,
      title: "پیتزا",
    },
    {
      id: 4,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/sandwich.png",
      clsA: null,
      icon: null,
      title: "ساندویچ",
    },
    {
      id: 5,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/new_burger.png",
      clsA: null,
      icon: null,
      title: "برگر",
    },
    {
      id: 6,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/fried.png",
      clsA: null,
      icon: null,
      title: "سوخاری",
    },
    {
      id: 7,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/pasta.png",
      clsA: null,
      icon: null,
      title: "پاستا",
    },
    {
      id: 8,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/stake.png",
      clsA: null,
      icon: null,
      title: "استیک",
    },
  ];
  const irani = [
    {
      id: 1,
      clsLi: "padd",
      clsImg: "hidden",
      img: null,
      clsA: null,
      icon: (
        <IoIosArrowForward size="18px" style={{ margin: "0 5px 0 10px" }} />
      ),
      title: "بازگشت",
    },
    {
      id: 2,
      clsLi: "activeLi",
      clsImg: "hidden",
      img: null,
      clsA: "activeA",
      icon: null,
      title: "همه ایرانی ها",
    },
    {
      id: 3,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/kebab.png",
      clsA: null,
      icon: null,
      title: "کباب",
    },
    {
      id: 4,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/aash.png",
      clsA: null,
      icon: null,
      title: "سنتی",
    },
    {
      id: 5,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/poloye-irani.png",
      clsA: null,
      icon: null,
      title: "پلوی ایرانی",
    },
    {
      id: 6,
      clsLi: null,
      clsImg: "hidden",
      img: null,
      clsA: null,
      icon: null,
      title: "خورشت",
    },
    {
      id: 7,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/morgh.png",
      clsA: null,
      icon: null,
      title: "مرغ",
    },
    {
      id: 8,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/new_icons/guilan.png",
      clsA: null,
      icon: null,
      title: "گیلانی",
    },
  ];
  const kebab = [
    {
      id: 1,
      clsLi: "padd",
      clsImg: "hidden",
      img: null,
      clsA: null,
      icon: (
        <IoIosArrowForward size="18px" style={{ margin: "0 5px 0 10px" }} />
      ),
      title: "بازگشت",
    },
    {
      id: 2,
      clsLi: "activeLi",
      clsImg: "hidden",
      img: null,
      clsA: "activeA",
      icon: null,
      title: "همه کباب ها",
    },
    {
      id: 3,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/kabab.png",
      clsA: null,
      icon: null,
      title: "کباب گوشت",
    },
    {
      id: 4,
      clsLi: null,
      img: "https://cdn.snappfood.ir/uploads/images/tags/jooje.png",
      clsA: null,
      icon: null,
      title: "جوجه‌کباب",
    },
  ];

  const prevHandler = (e) => {
    if (e.target.textContent === "بازگشت") {
      setShow2("");
      setHidden("");
      setHidden2("hidden");
      setWord("");
    }
  };

  const listHandler = (e) => {
    if (e.target.textContent === "فست فود") {
      setList(fastFoods);
      setShow2("show2");
      setHidden("hidden");
      setHidden2("");
      setWord("فست فود");
    } else if (e.target.textContent === "ایرانی") {
      setList(irani);
      setShow2("show2");
      setHidden("hidden");
      setHidden2("");
      setWord("ایرانی");
    } else if (e.target.textContent === "کباب") {
      setList(kebab);
      setShow2("show2");
      setHidden("hidden");
      setHidden2("");
      setWord("کباب");
    } else if (e.target.textContent === "سالاد") {
      setActiveLiAll("");
      setActiveAAll("");
      setActiveLiSea("");
      setActiveASea("");
      setActiveLiInter("");
      setActiveAInter("");
      setActiveLiSalad("activeLi");
      setActiveASalad("activeA");
      setWord("سالاد");
    } else if (e.target.textContent === "دریایی") {
      setActiveLiAll("");
      setActiveAAll("");
      setActiveLiSea("activeLi");
      setActiveASea("activeA");
      setActiveLiInter("");
      setActiveAInter("");
      setActiveLiSalad("");
      setActiveASalad("");
      setWord("دریایی");
    } else if (e.target.textContent === "بین الملل") {
      setActiveLiAll("");
      setActiveAAll("");
      setActiveLiSea("");
      setActiveASea("");
      setActiveLiInter("activeLi");
      setActiveAInter("activeA");
      setActiveLiSalad("");
      setActiveASalad("");
      setWord("بین الملل");
    } else if (e.target.textContent === "همه دسته بندی ها") {
      setActiveLiAll("activeLi");
      setActiveAAll("activeA");
      setActiveLiSea("");
      setActiveASea("");
      setActiveLiInter("");
      setActiveAInter("");
      setActiveLiSalad("");
      setActiveASalad("");
      setWord("");
    }
  };
  const priceHandler = (e) => {
    if (e.target.textContent === "همه") {
      setActiveAll("activeP");
      setActiveEco("");
      setActiveMed("");
      setActiveExp("");
    } else if (e.target.textContent === "اقتصادی") {
      setActiveEco("activeP");
      setActiveMed("");
      setActiveExp("");
      setActiveAll("");
    } else if (e.target.textContent === "متوسط") {
      setActiveMed("activeP");
      setActiveEco("");
      setActiveExp("");
      setActiveAll("");
    } else if (e.target.textContent === "گران") {
      setActiveExp("activeP");
      setActiveMed("");
      setActiveEco("");
      setActiveAll("");
    }
  };
  const focusHandler = () => {
    setFocus("focus");
    setShow("show");
    setZIndex("z-index");
  };
  const blurHandler = () => {
    setFocus("");
    setShow("");
    setZIndex("");
  };
  const clickHandler = (e) => {
    setValue(e.target.textContent);
  };
  const menuItem = useParams().menuItem;
  const [word2, setWord2] = useState("");
  useEffect(() => {
    if (menuItem == "restaurant") setWord2("رستوران");
  }, [menuItem, word2]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-top flex">
          <div className="navbar-right flex">
            <a className="icon" href="#home">
              <Icon />
            </a>
            <a className="flex padding" href="#home">
              <svg className="gpsIcon" viewBox="0 0 18 18">
                <path d="M3.22582 9.83268H1.50008C1.03984 9.83268 0.666748 9.45959 0.666748 8.99935C0.666748 8.53911 1.03984 8.16602 1.50008 8.16602H3.22582C3.59125 5.61127 5.61201 3.59052 8.16675 3.22509V1.49935C8.16675 1.03911 8.53984 0.666016 9.00008 0.666016C9.46032 0.666016 9.83342 1.03911 9.83342 1.49935V3.22509C12.3882 3.59052 14.4089 5.61127 14.7743 8.16602H16.5001C16.9603 8.16602 17.3334 8.53911 17.3334 8.99935C17.3334 9.45959 16.9603 9.83268 16.5001 9.83268H14.7743C14.4089 12.3874 12.3882 14.4082 9.83342 14.7736V16.4993C9.83342 16.9596 9.46032 17.3327 9.00008 17.3327C8.53984 17.3327 8.16675 16.9596 8.16675 16.4993V14.7736C5.61201 14.4082 3.59125 12.3874 3.22582 9.83268ZM9.00008 13.166C11.3013 13.166 13.1667 11.3005 13.1667 8.99935C13.1667 6.69816 11.3013 4.83268 9.00008 4.83268C6.69889 4.83268 4.83342 6.69816 4.83342 8.99935C4.83342 11.3005 6.69889 13.166 9.00008 13.166ZM9.00008 10.666C8.07961 10.666 7.33342 9.91982 7.33342 8.99935C7.33342 8.07887 8.07961 7.33268 9.00008 7.33268C9.92056 7.33268 10.6667 8.07887 10.6667 8.99935C10.6667 9.91982 9.92056 10.666 9.00008 10.666Z"></path>
              </svg>
              <p className="gpsTitle">مکان خود را انتخاب کنید</p>
            </a>
          </div>
          <div className="navbar-center flex">
            <div className="searchBox flex">
              <svg className="searchIcon" viewBox="0 0 17 17">
                <path d="M7.75.666a7.083 7.083 0 015.564 11.468l3.234 3.234a.833.833 0 01-1.179 1.179l-3.235-3.234A7.083 7.083 0 117.75.666zm0 1.667a5.417 5.417 0 100 10.833 5.417 5.417 0 000-10.833z"></path>
              </svg>
              <input
                type="text"
                placeholder={`جست و جو در ${word2}`}
                className="searchInput"
              />
            </div>
          </div>
          <div className="navbar-left flex">
            <div className="leftIcons flex">
              <a href="#hom">
                <svg width={19} height={19} style={{ opacity: ".4" }}>
                  <path d="M7.75.666a7.083 7.083 0 0 1 5.564 11.468l3.234 3.234a.833.833 0 0 1-1.179 1.179l-3.235-3.234A7.083 7.083 0 1 1 7.75.666Zm0 1.667a5.417 5.417 0 1 0 0 10.833 5.417 5.417 0 0 0 0-10.833Z" />
                </svg>
              </a>
              <a href="#hom">
                <svg width={14} height={18} fill="#3A3D42">
                  <path
                    fillRule="evenodd"
                    d="M9.5 10.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666A4.167 4.167 0 0 1 4.5 10.666h5ZM7 .666a4.167 4.167 0 1 1 0 8.333A4.167 4.167 0 0 1 7 .666Zm0 1.667a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex btn2">
              <a href="#home" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={26}
                  fill="#3A3D42"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.106 3.221A1 1 0 0 1 4 2.67h15.999a1 1 0 0 1 .894.552l2.001 4A1 1 0 0 1 23 7.67v1c0 .953-.381 1.818-1 2.45v10.55a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4.5a2 2 0 1 0-4 0v4.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10.55a3.489 3.489 0 0 1-1-2.45v-1a1 1 0 0 1 .106-.448l2-4ZM4 12.133v8.536h4v-3.5a4 4 0 0 1 8 0v3.5h4v-8.536a3.49 3.49 0 0 1-3-1.015 3.49 3.49 0 0 1-2.5 1.05 3.49 3.49 0 0 1-2.5-1.05 3.49 3.49 0 0 1-2.5 1.05 3.49 3.49 0 0 1-2.5-1.05 3.49 3.49 0 0 1-3 1.015Zm17-4.228v.764a1.5 1.5 0 0 1-3 0 1 1 0 1 0-2 0 1.5 1.5 0 0 1-3 0 1 1 0 1 0-2 0 1.5 1.5 0 0 1-3 0 1 1 0 0 0-2 0 1.5 1.5 0 1 1-3 0v-.764l1.618-3.236h14.763L21 7.905Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="sellers">ثبت نام فروشندگان</p>
              </a>
            </div>
            <button className="btnRegister flex" type="button">
              <b>ورود</b>یا<b>عضویت</b>
            </button>
          </div>
        </div>
      </nav>
      <div className="serviceLists">
      <div className="navbar-bottom">
          <ul className="navbar-bottom-list">
            {navItems.map((item) => (
              <NavItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="routeLink">
        <NavLink to="/" element={<Home />}>
          <p className="routeLinkItem">
            اسنپ فود
            <IoIosArrowBack size="10px" color="gray" />
          </p>
        </NavLink>
        <NavLink to="/restaurant" element={<Restaurant />}>
          <p className="routeLinkItem">
            {word2}
            <IoIosArrowBack size="10px" color="gray" />
          </p>
        </NavLink>
        <NavLink to="/restaurant" element={<Restaurant />}>
          <p className="routeLinkItem">{word}</p>
        </NavLink>
      </div>
      <div className="sort">
        <div className="sortSelect">
          <div className={` sortSelect2 ${focus}`}>
            <div className="input">
              <input
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={`${value}`}
                className="write"
                type="text"
              />
            </div>
            <div className="subMenuIcon">
              <span></span>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="subMenu">
            <ul className={`sortMenu ${show}`}>
              <li onMouseDown={clickHandler}>بالاترین امتیاز</li>
              <li onMouseDown={clickHandler}>نزدیک ترین</li>
              <li onMouseDown={clickHandler}>جدید ترین</li>
              <li onMouseDown={clickHandler}>ارزان ترین</li>
              <li onMouseDown={clickHandler}>عملکرد کلی</li>
              <li onMouseDown={clickHandler}>گران ترین</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="restaurantContainer">
        <div className="restaurantContainerRight">
          <div className="restaurantCategory">
            <ul className={`restaurantList ${hidden}`}>
              <li
                onClick={listHandler}
                className={`${activeLiAll}`}
                style={{ paddingRight: "10px" }}
              >
                <a className={`${activeAAll}`} href="#home">
                  همه دسته بندی ها
                </a>
              </li>
              <li onClick={listHandler}>
                <img
                  alt=""
                  src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/fastfood.png"
                />
                <a href="#home">فست فود</a>
              </li>
              <li onClick={listHandler}>
                <img
                  alt=""
                  src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/irani.png"
                />
                <a href="#home">ایرانی</a>
              </li>
              <li onClick={listHandler}>
                <img
                  alt=""
                  src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/kebab.png"
                />
                <a href="#home">کباب</a>
              </li>
              <li onClick={listHandler} className={`${activeLiSalad}`}>
                <img
                  alt=""
                  src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/salad.png"
                />
                <a className={`${activeASalad}`} href="#home">
                  سالاد
                </a>
              </li>
              <li onClick={listHandler} className={`${activeLiSea}`}>
                <img
                  alt=""
                  src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/sea.png"
                />
                <a className={`${activeASea}`} href="#home">
                  دریایی
                </a>
              </li>
              <li onClick={listHandler} className={`${activeLiInter}`}>
                <img
                  alt=""
                  src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/international.png"
                />
                <a className={`${activeAInter}`} href="#home">
                  بین الملل
                </a>
              </li>
            </ul>
            <div className={`${hidden2}`}>
              <div className={`${show2} ${hidden2} restaurantList`}>
                {List.map((item) => (
                  <ListItem onClick={prevHandler} key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="priceClass">
            <p>کلاس قیمتی</p>
            <div className="buttons">
              <a
                className={`${activeAll} btnPrice`}
                onClick={priceHandler}
                href="#home"
              >
                همه
              </a>
              <a
                className={`${activeEco} btnPrice`}
                onClick={priceHandler}
                href="#home"
              >
                اقتصادی
              </a>
              <a
                className={`${activeMed} btnPrice`}
                onClick={priceHandler}
                href="#home"
              >
                متوسط
              </a>
              <a
                className={`${activeExp} btnPrice`}
                onClick={priceHandler}
                href="#home"
              >
                گران
              </a>
            </div>
          </div>
          <div className="grouping">
            <Form style={{ width: "100%" }}>
              <Form.Check type="switch" value="completed" label="دارای کوپن" />
              <hr style={{ opacity: ".1 " }} />
              <Form.Check type="switch" value="presell" label="دارای تخفیف" />
              <hr style={{ opacity: ".1 " }} />
              <Form.Check
                type="switch"
                value="recording"
                label="ارسال اکسپرس"
              />
              <hr style={{ opacity: ".1 " }} />
              <Form.Check type="switch" value="recording" label="فودپرو" />
              <hr style={{ opacity: ".1 " }} />
              <Form.Check
                type="switch"
                value="recording"
                label="رستوران های به‌صرفه"
              />
            </Form>
          </div>
        </div>
        <div className={`restaurantContainerLeft ${zIndex}`}>
          {restaurants.map((item) => (
            <div className="restaurantContainerLeftItem" key={item.id}>
              <RestaurantItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default memo(Restaurant);
