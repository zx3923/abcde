import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "./Featured.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Featured = () => {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
            <td>52주 최고가</td>
            {test.map((Featured) => (
              <td key={Featured}>
                {Featured.highest_52_week_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원{" "}
              </td>
            ))}
          </tr>
          <tr>
            <td>52주 최저가</td>
            {test.map((Featured) => (
              <td key={Featured}>
                {Featured.lowest_52_week_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원{" "}
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
            <th scope="col">전일 가격</th>
            <th scope="col">고가</th>
            <th scope="col">저가</th>
            <th scope="col">거래량</th>
          </tr>
        </thead>
        <tbody className="tbodyMain">
          <tr>
            <td class="">코스피</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="nm">코스닥</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">삼성증권</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">카카오</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Featured;
