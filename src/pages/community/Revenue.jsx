import React from "react";
import "./Revenue.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Revenue = () => {
  return (
    <div class="Revenue">
      <div className="RevenueTitel">
        <div className="RevenueDiv">
          <h1>손익 인증 게시판</h1>
        </div>
      </div>
      <div className="meailinputton">
        <input placeholder="찾을내용을 입력하세요" type="text" />
        <button>
          <ZoomInIcon />
        </button>
        <button className="RevenueListbutton">글쓰기</button>
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
        <tbody className="RevenueTbody">
          <tr>
            <td class="num">8</td>
            <td class="title">
              <a href="#">문의합니다문의합니다문의합니다문의합니다</a>
            </td>
            <td>
              <a href="#">강아지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">7</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">고양이</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">6</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">5</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">4</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">3</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">2</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">1</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
        </tbody>
      </table>
      <div className="RevenueEndDiv1">
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

export default Revenue;
