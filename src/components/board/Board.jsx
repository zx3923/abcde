import React from "react";
import "./Board.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Board = () => {
  return (
    <div className="Board">
      <section class="notice">
        <div class="page-title">
          <div class="container">
            <h3>
              공지사항
              <a href="/">+</a>
            </h3>
          </div>
        </div>

        <div id="board-list">
          <div class="container">
            <table class="board-table">
              <thead>
                <tr>
                  <th scope="col" class="th-title">
                    제목
                  </th>

                  <th scope="col" class="th-date">
                    등록일
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <a href="#!">[공지사항] 공지사항 게시판 입니다</a>
                    <p>테스트</p>
                  </th>
                  <td>22.07.13</td>
                </tr>

                <tr>
                  <th>
                    <a href="#!">공지사항 게시판임</a>
                  </th>
                  <td>22.06.15</td>
                </tr>

                <tr>
                  <th>
                    <a href="#!">
                      공지사항 안내입니다. 이용해주셔서 감사합니다
                    </a>
                  </th>
                  <td>22.06.15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
