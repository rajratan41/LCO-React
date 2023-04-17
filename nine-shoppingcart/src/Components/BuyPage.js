import React, { useState, useEffect } from "react";
import Axios from "axios";

import { faker } from "@faker-js/faker";
import { Container, Row, Col } from "reactstrap";

import CartItem from "./CartItem";

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

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      mediumImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
