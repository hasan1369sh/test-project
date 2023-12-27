import { memo, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Home from "../home/Home";
import { IoIosArrowBack, IoIosArrowDown, IoMdTime } from "react-icons/io";
import Restaurant from "../restaurant/Restaurant";
import { Accordion } from "react-bootstrap";
import { AiOutlineInfoCircle, AiTwotoneStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { PiPersonSimpleBikeBold, PiTrashBold } from "react-icons/pi";
import { FcInspection } from "react-icons/fc";
import Icon from "../../components/icon/Icon";
import axios from "axios";
import { RestaurantApi, RestMenu } from "../../api/restaurantApi";
import Basket from "../../components/basket/Basket";
import RestCardBox from "../../components/restCardBox/RestCardBox";
function RestaurantMenu() {
  const [fix, setFix] = useState("");
  const [fix2, setFix2] = useState("");
  const [showBasket, setShowBasket] = useState("");
  const [showBasket2, setShowBasket2] = useState("");
  const [hiddenItem, setHiddenItem] = useState("");
  const [hide, setHide] = useState("hide");
  const [hide2, setHide2] = useState("hide2");
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const [packCost, setPackCost] = useState(0);
  const [profit, setProfit] = useState(0);
  const [payable, setPayable] = useState(0);
  const [basketItem, setBasketItem] = useState([]);
  const [count2, setCount2] = useState(0);
  const restName = useParams().restName;
  const [word, setWord] = useState("");
  const [menuItem, setMenuItem] = useState([]);
  const [cardItem, setCardItem] = useState([]);

  RestaurantApi(
    word,
    setCardItem,
    "https://run.mocky.io/v3/04fe3f95-0267-4ab4-a61b-a5f250151459"
  );

  useEffect(() => {
    RestMenu(menuItem, setMenuItem, cardItem);
    setWord(restName);
  });
  window.addEventListener("scroll", () => {
    let x = document.documentElement.scrollTop;
    if (x > 100) {
      setFix("fixed");
      setFix2("fixed2");
    } else {
      setFix("");
      setFix2("");
    }
  });
  const basketHandler = (e) => {
    let x = e.target.value;
    let q = e.target.id;
    let y = cardItem[q - 1];
    let j = basketItem.length;
    setCount2(count2 + 1);
    for (let item of cardItem) {
      let z = item.title;
      if (x === z) {
        axios
          .post("https://run.mocky.io/v3/126844cd-1731-49ad-b44d-3c8da6c0081d")
          .then((response) => {
            basketItem[j] = y;
            setBasketItem(basketItem);
            for (let i = 0; i < basketItem.length; i++) {
              if (basketItem[i].discount === "") {
                let v =
                  Number(basketItem[i].mainPrice) *
                  Number(basketItem[i].number);
                let p = basketItem[i].pachagingCost * basketItem[i].number;
                setTotal(total + v);
                setPackCost(packCost + p);
                setPayable(payable + (v + p));
              } else {
                let p = basketItem[i].pachagingCost * basketItem[i].number;
                let v =
                  Number(basketItem[i].discountPrice) *
                  Number(basketItem[i].number);
                let k =
                  (Number(basketItem[i].mainPrice) -
                    Number(basketItem[i].discountPrice)) *
                  Number(basketItem[i].number);
                setTotal(total + v);
                setProfit(profit + k);
                setPackCost(packCost + p);
                setPayable(payable + (v + p));
              }
            }
          });
      }
      y.showClass = "showBasket2";
      y.hideClass = "hiddenItem";
      y.hideClass2 = "hiddenItem";
      y.showClass2 = "showBasket2";
      setCardItem(cardItem);
      setShowBasket("showBasket");
      setHiddenItem("hiddenItem");
    }
  };
  const removeHandler = (e) => {
    let p = e.target.id;
    setCount2(count2 - 1);
    for (let item of basketItem) {
      let q = item.id;
      if (q == p) {
        axios
          .post("https://run.mocky.io/v3/126844cd-1731-49ad-b44d-3c8da6c0081d")
          .then((response) => {
            for (let i = 0; i < basketItem.length; i++) {
              if (basketItem[i].id === q) {
                let p = basketItem[i].pachagingCost;
                if (basketItem[i].discount === "") {
                  let v =
                    Number(basketItem[i].mainPrice) *
                    Number(basketItem[i].number);
                  setTotal(total - v);
                  setPayable(payable - (v + p));
                } else {
                  let v =
                    Number(basketItem[i].discountPrice) *
                    Number(basketItem[i].number);
                  let k =
                    (Number(basketItem[i].mainPrice) -
                      Number(basketItem[i].discountPrice)) *
                    Number(basketItem[i].number);
                  setTotal(total - v);
                  setProfit(profit - k);
                  setPayable(payable - (v + p));
                }
                setPackCost(packCost - p);
              }
            }

            let i = basketItem.indexOf(item);
            basketItem.splice(i, 1);
            setBasketItem(basketItem);
            item.showClass = "";
            item.hideClass = "";

            if (basketItem.length == 0) {
              setShowBasket("");
              setHiddenItem("");
              setHide("hide");
              setTotal(0);
              setProfit(0);
              setPackCost(0);
              setPayable(0);
            }
          });
      }
    }
  };
  const deleteHandler = () => {
    for (let item of cardItem) {
      item.showClass = "";
      item.hideClass = "";
      item.number = 1;
    }
    setCount(1);
    setCount2(0);
    setTotal(0);
    setProfit(0);
    setPayable(0);
    setPackCost(0);
    setBasketItem([]);
    setShowBasket("");
    setHiddenItem("");
    setHide("hide");
    setShowBasket2("showBasket2");
    setHide2("hide2");
  };
  const countHandler = (e) => {
    let p = e.target.id;
    let y = cardItem[p - 1];
    y.number += 1;
    setCount2(count2 + 1);
    for (let item of cardItem) {
      let q = item.id;
      if (q == p) {
        axios
          .patch("https://run.mocky.io/v3/126844cd-1731-49ad-b44d-3c8da6c0081d")
          .then((response) => {
            item.showClass2 = "hiddenItem";
            item.hideClass2 = "showBasket2";
            for (let i = 0; i < basketItem.length; i++) {
              let p = basketItem[i].pachagingCost;
              if (basketItem[i].id === q) {
                if (basketItem[i].discount === "") {
                  let v = Number(basketItem[i].mainPrice);
                  setTotal(total + v);
                  setPayable(payable + (v + p));
                } else {
                  let v = Number(basketItem[i].discountPrice);
                  let k =
                    Number(basketItem[i].mainPrice) -
                    Number(basketItem[i].discountPrice);
                  setProfit(profit + k);
                  setTotal(total + v);
                  setPayable(payable + (v + p));
                }
                setPackCost(packCost + p);
              }
            }
          });
      }
    }
  };
  const countHandler2 = (e) => {
    let p = e.target.id;
    let y = cardItem[p - 1];
    y.number -= 1;
    setCount2(count2 - 1);
    for (let item of cardItem) {
      let q = item.id;
      if (p == q) {
        if (y.number === 1) {
          y.showClass2 = "showBasket2";
          y.hideClass2 = "hiddenItem";
        }
        axios
          .patch("https://run.mocky.io/v3/126844cd-1731-49ad-b44d-3c8da6c0081d")
          .then((response) => {
            for (let i = 0; i < basketItem.length; i++) {
              let p = basketItem[i].pachagingCost;
              if (basketItem[i].id === q) {
                if (basketItem[i].discount === "") {
                  let v = Number(basketItem[i].mainPrice);
                  setTotal(total - v);
                  setPayable(payable - (v + p));
                } else {
                  let v = Number(basketItem[i].discountPrice);
                  let k =
                    Number(basketItem[i].mainPrice) -
                    Number(basketItem[i].discountPrice);
                  setProfit(profit - k);
                  setTotal(total - v);
                  setPayable(payable - (v + p));
                }
                setPackCost(packCost - p);
              }
            }
          });
      }
    }
  };
  return (
    <div className="restaurantMenu">
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
                placeholder={`جست و جو در ${word}`}
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
      <div className="routeLink routeLink2">
        <NavLink to="/" element={<Home />}>
          <p className="routeLinkItem">
            اسنپ فود
            <IoIosArrowBack size="10px" color="gray" />
          </p>
        </NavLink>
        <NavLink to="/restaurant" element={<Restaurant />}>
          <p className="routeLinkItem">
            رستوران
            <IoIosArrowBack size="10px" color="gray" />
          </p>
        </NavLink>
        <NavLink to="/restaurant" element={<Restaurant />}>
          <p className="routeLinkItem">{word}</p>
        </NavLink>
      </div>
      <div className="containerFluid">
        <div className="restaurantDetails">
          <div className={`${fix} restaurantContent`}>
            <div className="restaurantContentLogo">
              <div className="restaurantContentLogoImg">
                <img
                  src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5ee35a0c8e242.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <AiTwotoneStar color="#FFCC00" size="15px" />
                <span className="rate">4.4</span>
                <span className="count">(60,563 امتیاز)</span>
                <h1 className="name">P.S(فیلیپر)</h1>
              </div>
              <div className="discount">
                <div className="discountContent">
                  <p>
                    <span>%</span>
                    15
                  </p>
                </div>
              </div>
            </div>
            <a href="#hom">
              <div className="comments">
                <AiOutlineInfoCircle color="rgb(0, 184, 98)" />
                <span>اطلاعات و نظرات</span>
              </div>
            </a>
            <div className="restaurantList">
              <ul>
                {menuItem.map((item) => (
                  <li key={item.id}>
                    <div className="restaurantListItem">
                      <a href={`#${item.title}`}>{item.title}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`restaurantProduct scroll-example`}>
            <section style={{ border: "1px solid rgba(211, 211, 211, .6)" }}>
              {menuItem.map((item) => (
                <div
                  id={item.title}
                  className="restaurantProductItem"
                  key={item.id}
                >
                  <RestCardBox
                    item={cardItem}
                    title={item.title}
                    countHand2={countHandler2}
                    countHand={countHandler}
                    add={basketHandler}
                    delete={deleteHandler}
                    remove={removeHandler}
                    show={showBasket2}
                    hide2={hide2}
                    hide={hide}
                  />
                </div>
              ))}
            </section>
          </div>

          <div className={`${fix2} userBasket`}>
            <div className="timeReceive">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <IoMdTime size="20px" />
                    <p>
                      <span className="timeDeliver">زمان دریافت سفارش</span>
                      <IoIosArrowDown size="17px" color="green" />
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="accordionBody">
                      <BsFillCheckCircleFill
                        className="set"
                        size="22px"
                        color="white"
                        style={{
                          cursor: "pointer",
                          border: "2px solid lightGray",
                          borderRadius: "100%",
                        }}
                      />
                      <p>
                        سریع ترین زمان ممکن
                        <br />
                        <span>ارسال سریع بعد از ثبت سفارش</span>
                      </p>
                      <svg
                        style={{ marginRight: "18px" }}
                        width="1.25rem"
                        height="1.25rem"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.5003 10.1667C15.8685 10.4429 15.9431 10.9652 15.667 11.3334L14.167 13.3334H15.8337C16.1493 13.3334 16.4379 13.5117 16.579 13.794C16.7202 14.0764 16.6897 14.4142 16.5003 14.6667L14.0003 18C13.7242 18.3682 13.2019 18.4429 12.8337 18.1667C12.4655 17.8906 12.3909 17.3682 12.667 17L14.167 15H12.5003C12.1847 15 11.8961 14.8217 11.755 14.5394C11.6138 14.2571 11.6443 13.9192 11.8337 13.6667L14.3337 10.3334C14.6098 9.96519 15.1321 9.89057 15.5003 10.1667Z"
                          fill="#FFCE00"
                        ></path>
                        <path
                          d="M12.1572 1.95046C10.7442 1.57185 9.25646 1.57185 7.8435 1.95045C6.43054 2.32906 5.14213 3.07292 4.10777 4.10728C3.07341 5.14164 2.32955 6.43005 1.95094 7.84301C1.57234 9.25597 1.57234 10.7437 1.95094 12.1567C2.32955 13.5696 3.07341 14.858 4.10777 15.8924C5.14213 16.9268 6.43054 17.6706 7.8435 18.0492C8.28805 18.1683 8.745 17.9045 8.86412 17.46C8.98324 17.0154 8.71942 16.5585 8.27486 16.4393C7.1445 16.1365 6.11377 15.5414 5.28628 14.7139C4.45879 13.8864 3.8637 12.8557 3.56082 11.7253C3.25794 10.5949 3.25794 9.40475 3.56082 8.27438C3.8637 7.14401 4.45879 6.11328 5.28628 5.28579C6.11377 4.4583 7.1445 3.86321 8.27487 3.56033C9.40524 3.25745 10.5954 3.25745 11.7258 3.56033C12.8562 3.86321 13.8869 4.45831 14.7144 5.28579C15.5419 6.11328 16.137 7.14401 16.4398 8.27438C16.5589 8.71893 17.0159 8.98275 17.4605 8.86363C17.905 8.74452 18.1688 8.28757 18.0497 7.84301C17.6711 6.43005 16.9272 5.14164 15.8929 4.10728C14.8585 3.07292 13.5701 2.32906 12.1572 1.95046Z"
                          fill="#676A70"
                        ></path>
                        <path
                          d="M10.0003 4.99984C9.57296 4.99984 9.22074 5.32154 9.1726 5.73599L9.16699 5.83317V9.72984L7.08043 10.9467C6.71129 11.162 6.56914 11.6174 6.73638 11.9996L6.78051 12.0864C6.99585 12.4555 7.4512 12.5977 7.83345 12.4304L7.92022 12.3863L10.4202 10.928C10.6478 10.7952 10.7975 10.5639 10.8279 10.306L10.8337 10.2082L10.8337 5.83317C10.8337 5.37293 10.4606 4.99984 10.0003 4.99984Z"
                          fill="#676A70"
                        ></path>
                      </svg>
                    </div>
                    <hr style={{ opacity: "0.1" }} />

                    <div className="accordionBody2">
                      <BsFillCheckCircleFill
                        className=""
                        size="22px"
                        color="white"
                        style={{
                          cursor: "pointer",
                          border: "2px solid lightGray",
                          borderRadius: "100%",
                        }}
                      />
                      <span>زمان دیگر</span>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="delivery">
              <PiPersonSimpleBikeBold size="20px" />
              <p>
                پیک فروشنده<span>4,000</span>تومان
              </p>
            </div>
            <div className={`emptyBasket ${hiddenItem}`}>
              <div className="basketTop">
                <FcInspection size="28px" style={{ opacity: "0.3" }} />
              </div>
              <div className="basketBottom">
                <p>سبد خرید شما خالی است!</p>
              </div>
            </div>
            <div className={`basket ${showBasket}`}>
              <div className="basketCount">
                <p>سبد خرید ({count2})</p>
                <PiTrashBold
                  onClick={deleteHandler}
                  style={{ cursor: "pointer" }}
                  color="red"
                />
              </div>
              {basketItem.map((item) => (
                <div key={item.id}>
                  <Basket
                    {...item}
                    countHand2={countHandler2}
                    countHand={countHandler}
                    remove={removeHandler}
                  />
                </div>
              ))}
              <div className="basketPrice">
                <p>مجموع</p>
                <p>
                  <span>{total}</span>تومان
                </p>
              </div>
              <div className="basketPrice">
                <p>هزینه بسته بندی</p>
                <p>
                  <span>{packCost}</span>تومان
                </p>
              </div>
              <div className="basketPrice">
                <p>مالیات</p>
                <p>
                  <span>19,567</span>تومان
                </p>
              </div>
              <div className={`basketPrice`}>
                <p>سود شما از این خرید</p>
                <p>
                  <span>{profit}</span>تومان
                </p>
              </div>
              <hr style={{ opacity: "0.1", margin: "-5px 0 0" }} />
              <div className="basketPrice">
                <p>
                  <b>قابل پرداخت</b>
                </p>
                <p>
                  <b>{payable}</b>تومان
                </p>
              </div>
              <textarea
                placeholder="توضیحات سفارش..."
                name="description"
                className="basketDesc"
              ></textarea>
              <button type="submit" class="login" dir="rtl">
                ورود به حساب کاربری
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}
export default memo(RestaurantMenu);
