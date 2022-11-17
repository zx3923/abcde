import "./Coin.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Coin = ({ test, loading, error, setError, setLoading }) => {
  const [lonned, setLonned] = useState(false);
  const navigate = useNavigate();

  test.sort(function (a, b) {
    return b.id - a.id;
  });

  const registerd = () => {
    if (sessionStorage.getItem("logined") || false) {
      navigate("/Write");
    } else if (sessionStorage.getItem("logined") || true) {
      alert("로그인 해주세요");
    }
  };
  return (
    <div class="Coin">
      <div className="CoinDiv">
        <h1>암호 화폐</h1>
        <button
          className="CoinListbutton"
          onClick={() => {
            registerd();
          }}>
          + 글 쓰기
        </button>
      </div>
      <div className="CoinTitel">
        <table class="tbl_type">
          <caption>게시판 리스트</caption>

          <thead>
            <tr className="CoinTr">
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">글쓴이</th>
              <th scope="col">날짜</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody className="CoinTbody">
            {test.map((Coin) => (
              <tr key={Coin.id}>
                <td> {Coin.id}</td>
                <td>
                  <Link
                    to={`/detailPage/${Coin.id}`}
                    state={{ number: Coin.id }}>
                    {Coin.subject}
                  </Link>
                </td>
                <td> {Coin.author}</td>
                <td> {Coin.date}</td>
                <td> {Coin.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="CoinEndDiv1">
        <div className="CoinEndDiv2">
          <a href="">
            <ChevronLeftIcon />
            &nbsp;
          </a>

          <a href="">1</a>

          <a href="">2</a>

          <a href="">3</a>

          <a href="">4</a>
          <a href="">5</a>
          <a href="">
            <ChevronRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coin;
