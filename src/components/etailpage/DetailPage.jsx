import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const DetailPage = ({ test, setTest }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [boardtext, setBoardText] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      `http://localhost:7999/board/coin/b/getid?id=${location.state.number}`
    );
    setBoardText(response.data); // 데이터는 response.data 안에 들어있습니다.
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const aaa = sessionStorage.getItem("logined") == boardtext.author;

  const deleteList = async () => {
    const response = await axios.delete(
      `http://localhost:7999/board/coin/b/delete`,
      {
        data: {
          id: `${location.state.number}`,
          author: sessionStorage.getItem("logined"),
        },
      }
    );
    const newres = await axios.get(`http://localhost:7999/board/coin/b/get`);
    setTest(newres.data);
    navigate(-1);
  };
  return (
    <div className="DetailPage">
      <div className="DetailPageMain">
        <span className="DetailPageTitle">{boardtext.subject} </span>
      </div>
      <div className="DetailPagelist">
        <div className="DetailPagelistdiv">
          <span>작성자:{boardtext.author}</span>
          <span>날짜:{boardtext.date}</span>
          <span>조회수: 5 </span>
        </div>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage_List_cjah">{boardtext.contents}</div>
      <div className="DetailPageButton">
        <div>
          {aaa ? (
            <>
              <button className="DetailPageButton1">수정</button>

              <button
                className="DetailPageButton2"
                onClick={() => {
                  deleteList();
                }}
              >
                삭제
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="DetailPage_Booot">
        <div className="DetailPage_BoootMaindiv">
          <div>댓글</div>
          <div>등록순</div>
          <div>최신순</div>
          <div>새로고침</div>
        </div>
        <hr className="DetailPageHr" />
        <ul className="DetailPage_BoootList">
          <span>이용민</span>
          <span>2022.02.16</span>
          <li>
            {" "}
            안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요
            <button className="DetailPageIcon">답글쓰기</button>
          </li>
        </ul>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage-div">
        <input className="DetailPage-mimee" type="text" />

        <button className="DetailPage_button1">작성 하기</button>
      </div>
    </div>
  );
};

export default DetailPage;
