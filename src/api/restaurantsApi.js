import { useEffect } from "react";
import axios from "axios";
const RestaurantsApi = (word, setParam, url) => {
  useEffect(() => {
    axios.get(url).then((response) => {
      if (word === "") setParam(response.data);
      else {
        let x = [];
        let j = response.data.length;
        for (let i = 0; i < j; i++) {
          if (response.data[i].category === word) {
            let y = response.data[i];
            x.push(y);
          }
        }
        setParam(x);
      }
    });
  });
};
export default RestaurantsApi;
