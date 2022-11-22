import React, { useState, useEffect } from "react";
import "./BoardPost";
import "./style/BoardDetail.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BACK_URL } from "../../config";

const BoardUpdate = ({ lcategory, mcategory }) => {
  const { boardid } = useParams();
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [lonned, setLonned] = useState(false);
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  const [boardtext, setBoardText] = useState([]);

  const patch = async () => {
    try {
      const data = await axios({
        url: `${BACK_URL}` + lcategory + "/" + mcategory + "/patch",
        method: "PATCH",
        data: {
          subject: subject,
          contents: contents,
          author: author,
        },
      });
      setBoardText(data.data);
      if (data.data === true) {
        alert("수정완료");
        navigate(-1);
      } else if (data.data === false) {
        alert("실패");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setAuthor(sessionStorage.getItem("userid"));
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url:
            "http://localhost:7999/board/" +
            lcategory +
            "/" +
            mcategory +
            "/getid",
          method: "GET",
          params: {
            id: boardid,
          },
        });
        setBoardText(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="select-MainDiv">
      <div class="con">
        <h1>수정 페이지</h1>
        <div class="article-write">
          <form>
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
              }}
            >
              수정 하기
            </button>
            <button
              className="Write_button2"
              type="button"
              onclick={() => {
                navigate(-1);
              }}
            >
              돌아기기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUpdate;
