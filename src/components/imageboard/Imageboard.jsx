import React from "react";
import "./Imageboard.scss";

const Imageboard = () => {
  return (
    <div className="Imageboard">
      <div className="ImageboardHmoeRevenue">
        <h1 className="">손익 인증 게시판</h1>
        <a href="/">+</a>
      </div>
      <div className="RevenueDiv">
        <div className="card1 card-compact ">
          <a href="">
            <figure>
              <img
                src="https://coinpan.com/files/attach/images/244/718/897/227/a00bbbd437f350af49c5f6f82752715a.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="">
              <h2 className="card-title">수익</h2>
              <p>달달하네요</p>
              <div className=""></div>
            </div>
          </a>
        </div>
        <div className="card1 card-compact ">
          <a href="">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbdN7BxJYmbQfK137XGB4X7fNwut01KSG2O6HInvbU4H3ynoDXtTA0G-ziedqa_WXJEw&usqp=CAU"
                alt="Shoes"
              />
            </figure>
            <div className="">
              <h2 className="card-title">수익</h2>
              <p>네요달달하네요네요달달하네요 달달하네요</p>
              <div className=""></div>
            </div>
          </a>
        </div>
        <div className="card1 card-compact ">
          <a href="">
            <figure>
              <img src="http://asq.kr/ZqKvaN204n" alt="Shoes" />
            </figure>
            <div className="">
              <h2 className="card-title">수익</h2>
              <p>달달하네요</p>
              <div className=""></div>
            </div>
          </a>
        </div>
        <div className="card1 card-compact ">
          <a href="">
            <figure>
              <img src="http://asq.kr/XAaMNewbD" alt="Shoes" />
            </figure>
            <div className="">
              <h2 className="card-title">손실</h2>
              <p>달달하네요</p>
              <div className=""></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imageboard;
