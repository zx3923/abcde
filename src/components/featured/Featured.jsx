import "./Featured.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Featured = () => {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [kospi, setKospi] = useState("");
  const [kosdaq, setKosdaq] = useState("");
  const [samsung, setSamsung] = useState("");
  const [kakao, setKakao] = useState("");

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setTest(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20KRW-ETH%2C%20KRW-XRP%2C%20KRW-ETC"
      );
      setTest(response.data); // 데이터는 response.data 안에 들어있습니다.
      const kospiGet = await axios.get(
        "http://localhost:7999/chart/Market/get?name=코스피"
      );
      setKospi(kospiGet.data);
      const kosdaqGet = await axios.get(
        "http://localhost:7999/chart/Market/get?name=코스닥"
      );
      setKosdaq(kosdaqGet.data);
      const samsungGet = await axios.get(
        "http://localhost:7999/chart/Stock/get?name=삼성전자"
      );
      setSamsung(samsungGet.data);
      const kakaoGet = await axios.get(
        "http://localhost:7999/chart/Stock/get?name=카카오뱅크"
      );
      setKakao(kakaoGet.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!test) return null;

  if (0 < kospi.avg && kospi.avg < 1) {
    kospi.avg = "0" + kospi.avg;
  }
  if (0 < kosdaq.avg && kosdaq.avg < 1) {
    kosdaq.avg = "0" + kosdaq.avg;
  }

  if (0 < samsung.avg && samsung.avg < 1) {
    samsung.avg = "0" + samsung.avg;
  }

  if (0 < kakao.avg && kakao.avg < 1) {
    kakao.avg = "0" + kakao.avg;
  }

  return (
    <div class="Featured">
      <table class="tbl_type">
        <thead>
          <tr>
            <th scope="col">코인</th>
            <th scope="col">비트코인</th>
            <th scope="col">이더리움</th>
            <th scope="col">리플</th>
            <th scope="col">이더리움 클래식</th>
          </tr>
        </thead>
        <tbody className="tbodyMain">
          <tr>
            <td>현재가</td>
            {test.map((Featured) => (
              <td key={Featured}>
                {Featured.opening_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원{" "}
              </td>
            ))}
          </tr>
          <tr>
            <td>종가</td>
            {test.map((Featured) => (
              <td key={Featured}>
                {Featured.trade_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원{" "}
              </td>
            ))}
          </tr>
          <tr>
            <td>전일 변동률 (KRW)</td>
            {test.map((Featured) => (
              <td
                key={Featured}
                style={
                  Featured.signed_change_price > 0
                    ? { color: "red" }
                    : { color: "blue" }
                }
              >
                {Featured.signed_change_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원{" "}
              </td>
            ))}
          </tr>
          <tr>
            <td>전일 변동률 (%)</td>
            {test.map((Featured) => (
              <td
                key={Featured}
                style={
                  Featured.signed_change_rate > 0
                    ? { color: "red" }
                    : { color: "blue" }
                }
              >
                {(Featured.signed_change_rate.toFixed(3) * 100).toFixed(2)} %
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <h3 className="tblH31"></h3>
      <table class="tbl_type">
        <thead>
          <tr>
            <th scope="col">주식</th>
            <th scope="col">코스피</th>
            <th scope="col">코스닥</th>
            <th scope="col">삼성증권</th>
            <th scope="col">카카오</th>
          </tr>
        </thead>
        <tbody className="tbodyMain">
          <tr>
            <td class="">전일 가격</td>
            <td class="">{kospi.value}</td>
            <td>{kosdaq.value}</td>
            <td class="">
              {samsung.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </td>
            <td>
              {kakao.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원{" "}
            </td>
          </tr>
          <tr style={{ color: "red" }}>
            <td className="highhigh" style={{ color: "black" }}>
              고가
            </td>
            <td class="">{kospi.high}</td>
            <td>{kosdaq.high}</td>
            <td class="">
              {samsung.high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원{" "}
            </td>
            <td class="">
              {kakao.high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원{" "}
            </td>
          </tr>
          <tr style={{ color: "blue" }}>
            <td className="lowlow" style={{ color: "black" }}>
              저가
            </td>
            <td class="">{kospi.low}</td>
            <td>{kosdaq.low}</td>
            <td class="">
              {samsung.low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원{" "}
            </td>
            <td class="">
              {kakao.low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원{" "}
            </td>
          </tr>
          <tr>
            <td class="">전일 대비</td>
            <td style={kospi.avg > 0 ? { color: "red" } : { color: "blue" }}>
              {kospi.avg} %
            </td>
            <td style={kosdaq.avg > 0 ? { color: "red" } : { color: "blue" }}>
              {kosdaq.avg} %
            </td>
            <td style={samsung.avg > 0 ? { color: "red" } : { color: "blue" }}>
              {samsung.avg} %
            </td>
            <td style={kakao.avg > 0 ? { color: "red" } : { color: "blue" }}>
              {kakao.avg} %
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Featured;
