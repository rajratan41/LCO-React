import React from "react";
import Card from "./Card";

const CardSection = () => (
  <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">We love new friends!</h2>
      <div className="row">
        <div className="col-4">
          <Card
            title="Cricket"
            buttonText="Play Here"
            imgURL={
              "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            }
          />
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-success">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Card
            title="Basket Ball"
            buttonText="Play Here"
            imgURL={
              "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            }
          />
        </div>
      </div>
    </div>
  </section>
);

export default CardSection;
