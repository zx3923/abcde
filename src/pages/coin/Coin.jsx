import "./Coin.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Coin = ({ test, loading, error, setError, setLoading }) => {
  const aaa = async () => {
    try {
      setLoading(true);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    aaa();
  }, []);
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!test) return null;

  test.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <div class="Coin">
      <div className="CoinTitel">
        <div className="CoinDiv">
          <h1>코인 정보 게시판</h1>
        </div>
      </div>
      <div className="meailinputton">
        <input placeholder="찾을내용을 입력하세요" type="text" />
        <button>
          <ZoomInIcon />
        </button>
        <a href="/write">
          <button className="CoinListbutton">글쓰기</button>
        </a>
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
