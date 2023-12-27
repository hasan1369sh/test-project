import { useEffect } from "react";
import axios from "axios";
const RestaurantApi = (word, setParam, url) => {
  useEffect(() => {
    axios.get(url).then((response) => {
      if (word === "فست فود صبا چیکن") setParam(response.data);
    });
  }, [word]);
};
const RestMenu = (param, setParam, array) => {
  array.forEach((item) => {
    let j = param.length;
    if (j == 0) {
        setParam([...param , {
            id : j + 1,
            title: item.label,
            active: true
        }]);
        return param
    }
    else{
        for(let i = 0 ; i < j ; i++){
            if(param[i].title == item.label) return 0
            else if((i+1) == j){
                setParam([...param ,{
                    id : j + 1,
                    title: item.label,
                    active: false
                }]);
            }
        }
    }
  });
};
const RestMenuItems = (setParam, param, parameter, url) => {
    useEffect (() => {
        axios.get(url).then((response) => {
            console.log(response.data);
            for(let i = 0 ; i < parameter.length ; i++){
                for(let j = 0 ; j < response.data.length ; j++){
                    if(response.data[j].label === parameter[i].title)
                    setParam([...param , response.data[j]])
                }
            }
        });
    });
}
export { RestaurantApi, RestMenu, RestMenuItems };
