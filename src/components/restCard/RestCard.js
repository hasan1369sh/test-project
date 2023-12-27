import { memo, useEffect, useState } from "react";

function RestCard(props) {
  const [hideBasket, setHideBasket] = useState("");
  const [hideBasket2, setHideBasket2] = useState("hideBasket");
  const [span, setSpan] = useState("");
  const [textStyle, setTextStyle] = useState("");
  const [center2, setCenter2] = useState("");

  useEffect(() => {
    if (props.discountPrice === "") {
      setHideBasket("hideBasket");
      setHideBasket2("");
      setTextStyle("none");
      setCenter2("center2");
      setSpan("span");
    }
  }, [hideBasket, props.discountPrice]);
  return (
    <div className="card">
      <div>
        <a className="card-top" href="#home">
          <div className="card-right">
            <p>{props.title}</p>
            <span>{props.description}</span>
          </div>
          <div className="card-left">
            <img src={props.image} alt="" />
          </div>
        </a>
      </div>
      <div className="card-bottom">
        <div className={`right ${hideBasket}`}>
          <p className={`${hideBasket}`}>{props.discount}</p>
        </div>
        <div className={`center ${center2}`}>
          <p className={`center-p1 ${textStyle}`}>{props.mainPrice}</p>
          <span className={`${span} ${hideBasket2}`}> تومان</span>
          <p className={`center-p2 ${hideBasket}`}>
            {props.discountPrice}
            <span className={`span`}> تومان</span>
          </p>
        </div>
        <div className="left">
          <button
            className={props.hideClass}
            onClick={props.add}
            id={props.id}
            value={props.title}
          >
            افزودن
          </button>
          <div className={`left3 ${props.hide} ${props.showClass}`}>
            <span
              onClick={props.countHand2}
              id={props.id}
              className={`${props.hideClass2}`}
            >
              -
            </span>
            <div
              id={props.id}
              onClick={props.remove}
              className={`trash ${props.showClass2}`}
            >
              <svg
                id={props.id}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id={props.id}
                  d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"
                ></path>
              </svg>
            </div>
            <p>{props.number}</p>
            <span id={props.id} onClick={props.countHand}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(RestCard);
