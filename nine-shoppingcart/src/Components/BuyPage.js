import React, { useState, useEffect } from "react";
import { Axios } from "axios";

import { random, commerce } from "faker";
import { Container, Row, Col } from "reactstrap";

const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localUrl = "https://www.jsonkeeper.com/b/VDK8";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //  Fetch data from Api key

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey,
  //       },
  //     });
  //   };

  //  Fetch data from Api key

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl);
  };

  const { photos } = data;

  useEffect(() => {
    fetchPhotos();
  }, []);
};

export default BuyPage;
