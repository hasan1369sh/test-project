import axios from "axios";
import { useEffect, useState } from "react";

const RequestApi = (setParam, url) => {
  useEffect(() => {
    axios.get(url).then((response) => {
      setParam(response.data);
    });
  }, []);
};

export default RequestApi;
