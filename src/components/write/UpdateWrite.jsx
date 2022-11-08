import React, { useState, useEffect } from "react";
import "./Write.jsx";
import "./Write.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateWrite = () => {
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [lonned, setLonned] = useState(false);
  const [contents, setContents] = useState("");
  const [selectBoard, setSelectBoard] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [boardtext, setBoardText] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      `http://localhost:7999/board/coin/b/getid?id=${location.state.number}`
    );
    setBoardText(response.data); // 데이터는 response.data 안에 들어있습니다.
  };

  const patch = () => {
    axios
      .patch(`http://localhost:7999/board/${selectBoard}/b/patch`, {
        id: `${location.state.number}`,
        subject,
        contents,
        author,
      })
      .then((response) => {
        if (response.data == true) {
          alert("수정완료");
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

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="select-MainDiv">
      <div class="con">
        <h1>수정 페이지</h1>
        <div class="article-write">
          <form>
            <div className="write_list">
              <select
                className="write_select"
                value={selectBoard}
                aria-label="게시판목록"
                onChange={(e) => {
                  setSelectBoard(e.target.value);
                }}>
                <option value="">게시판 목록</option>
                <option value="M">--------------------</option>
                <option value="stockMarket">국내 주식 정보</option>
                <option value="stockMarket">해외 주식 정보</option>
                <option value="stockMarket">주식 게시판</option>
                <option value="M">--------------------</option>
                <option value="coin">코인 정보</option>
                <option value="coin">코인 게시판</option>
                <option value="M">--------------------</option>
                <option value="news">선물/마진 벙보</option>
                <option value="news">선물/마진 게시판</option>
                <option value="M">--------------------</option>
                <option value="테스트8">자유 게시판</option>
                <option value="테스트9">손익 게시판</option>
                <option value="M">--------------------</option>
                <option value="테스트10">공지 사항</option>
                <option value="테스트11">이벤트</option>
                <option value="테스트12">문의</option>
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
                defaultValue={boardtext.subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <div className="write-mimee-div">
              <textarea
                className="write-mimee"
                type="text"
                defaultValue={boardtext.contents}
                onChange={(e) => {
                  setContents(e.target.value);
                }}
              />
            </div>
          </form>
          <div className="Write_button">
            <button
              className="Write_button1"
              onClick={() => {
                patch();
              }}>
              수정 하기
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

export default UpdateWrite;
