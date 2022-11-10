import "./Coin.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <div className="CoinTitel">
        <div className="CoinDiv">
          <h1>코인 정보 게시판</h1>
        </div>
      </div>
      <div className="meailinputton">
        <button
          className="CoinListbutton"
          onClick={() => {
            registerd();
          }}>
          글쓰기
        </button>
      </div>
      <table class="tbl_type">
        <caption>게시판 리스트</caption>

        <thead>
          <tr>
            <th scope="col">No</th>
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
                <Link to={`/detailPage/${Coin.id}`} state={{ number: Coin.id }}>
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
      <div className="CoinEndDiv1">
        <a href="">◀</a>

        <a href="">1</a>

        <a href="">2</a>

        <a href="">3</a>

        <a href="">4</a>
        <a href="">5</a>
        <a href="">▶</a>
      </div>
    </div>
  );
};

export default Coin;
