import React from "react";
import "./Banner.scss";

const banner = () => {
  return (
    <div className="carousel">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="
https://ifh.cc/g/nd1KdT.jpg"
          className="img_1"
        />
        <div className="absolute flex justify-between left-5 right-5 top-3/4">
          <a href="#slide2" class="btn btn-ghost">
            ❮
          </a>
          <a href="#slide2" class="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://www.hellofunding.co.kr/review/review_event/img/banner3.jpg"
          className="img_2"
        />
        <div className="absolute flex justify-between left-5 right-5 top-3/4">
          {" "}
          <a href="#slide1" class="btn btn-ghost">
            ❮
          </a>
          <a href="#slide1" class="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default banner;
