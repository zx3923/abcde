import React, { useState, useEffect } from "react";
import "./Write.jsx";
import "./Write.scss";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [lonned, setLonned] = useState(false);
  const [contents, setContents] = useState("");
  const [selectBoard, setSelectBoard] = useState("");
  const navigate = useNavigate();
  const post = () => {
    axios
      .post(`http://localhost:7999/board/${selectBoard}/b/post`, {
        subject,
        contents,
        author,
      })
      .then((response) => {
        if (response.data == true) {
          alert("작성완료");
          navigate(-1);
        } else if (response.data == false) {
          alert("실패");
        }
      });
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setLonned(sessionStorage.getItem("user"));
    }
    console.log(check);
    setAuthor(check);
  }, []);
  const showValue = () => {};
  return (
    <div className="select-MainDiv">
      <a href="">
        <h1>
          <ArrowBackIcon />
          &nbsp; 암호 화폐
        </h1>
      </a>
      <div class="con">
        <div class="article-write">
          <form>
            <div className="write_list">
              <select
                className="write_select"
                id=""
                aria-label="게시판목록"
                onChange={(e) => {
                  setSelectBoard(e.target.value);
                }}>
                <option value="">게시판 목록</option>
                <option value="M">--------------------</option>
                <option value="stockMarket">한국 주식 정보</option>
                <option value="stockMarket">미국 주식 정보</option>
                <option value="M">--------------------</option>
                <option value="coin">암호 화폐 정보</option>
                <option value="M">--------------------</option>
                <option value="news">유머&잡담</option>
                <option value="M">--------------------</option>
                <option value="테스트8">AnTok 인기글</option>
                <option value="M">--------------------</option>
                <option value="테스트10">전문가의 방</option>
                <option value="M">--------------------</option>
              </select>
              <div className="write_list_title">
                * 게시글 목록을 확인해 주세요
              </div>
            </div>
            <div></div>
            <div>
              <input
                className="write-title"
                type="text"
                placeholder="제목을 입력해주세요"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>

            <div className="write-mimee-div">
              <textarea
                className="write-mimee"
                type="text"
                value={contents}
                onChange={(e) => {
                  setContents(e.target.value);
                }}
              />
            </div>
          </form>

          <div class="filebox">
            <input type="file" id="ex_file" />
          </div>
          <div className="Write_button">
            <button
              className="Write_button1"
              onClick={() => {
                post();
                console.log(subject, contents, author);
              }}>
              작성 하기
            </button>
            <button
              className="Write_button2"
              type="button"
              onclick={() => {
                navigate(-1);
              }}>
              돌아기기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
