import React from "react";
import { Card, Col, Icon, Row, Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "150px" }}
              src={`http://localhost:5000/${image}`}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
