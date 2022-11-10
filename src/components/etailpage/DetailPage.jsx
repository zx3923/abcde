import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailPage = ({ test, setTest }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [boardtext, setBoardText] = useState([]);
  const [comment, setComment] = useState("");
  const [comList, setComList] = useState([]);

  const fetchUsers = async () => {
    const response2 = await axios.get(
      `http://localhost:7999/board/coin/b/getid/comment?id=${location.state.number}`
    );
    setComList(response2.data);

    const response = await axios.get(
      `http://localhost:7999/board/coin/b/getid?id=${location.state.number}`
    );
    setBoardText(response.data); // 데이터는 response.data 안에 들어있습니다.
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const aaa = sessionStorage.getItem("logined") == boardtext.author;

  const bbb = (ccc) => sessionStorage.getItem("logined") == ccc;

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
  const compost = () => {
    if (sessionStorage.getItem("user") || false) {
      axios.post(`http://localhost:7999/board/coin/b/post/comment`, {
        contents: comment,
        author: sessionStorage.getItem("logined"),
        id: `${location.state.number}`,
      });

      console.log(
        "contents " +
          comment +
          " author " +
          sessionStorage.getItem("logined") +
          " id " +
          `${location.state.number}`
      );
    } else if (sessionStorage.getItem("user") || true) {
      alert("로그인 해주세요");
    }
    console.log(location.state.number);
    window.location.reload();
  };
  const comdelete = (x) => {
    axios.delete(`http://localhost:7999/board/coin/b/delete/comment`, {
      data: {
        id: x,
        author: sessionStorage.getItem("logined"),
      },
    });
    window.location.reload();
  };

  return (
    <div className="DetailPage">
      <div className="DetailPageMain">
        <span className="DetailPageTitle">{boardtext.subject} </span>
      </div>
      <div className="DetailPagelist">
        <div className="DetailPagelistdiv">
          <span>작성자:</span>
          <span>{boardtext.author}</span>
          <span>날짜:</span>
          <span>{boardtext.date}</span>
          <div className="asddgiuhi23">
            {aaa ? (
              <>
                <Link
                  to={"/upwrite"}
                  state={{ number: boardtext.id }}
                  className="DetailPageButton1">
                  수정 &nbsp;&nbsp;
                </Link>

                <button
                  className="DetailPageButton2"
                  onClick={() => {
                    deleteList();
                  }}>
                  삭제
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage_List_cjah_div">
        <div className="DetailPage_List_cjah">{boardtext.contents}</div>
      </div>
      <div className="DetailPageButton"></div>

      <div className="DetailPage_Booot">
        <div className="DetailPage_BoootMaindiv">
          <div>댓글</div>
        </div>
        <hr className="DetailPageHr" />
        <tbody className="DetailPage_BoootList">
          {comList.map((list) => (
            <tr className="DetailPageTd" key={list.id}>
              <td className="trdiv1">{list.author}</td>

              <td className="trdiv2">{list.date}</td>

              <td className="trdiv3">{list.contents} </td>
              <td className="trdiv4">
                {bbb(list.author) ? (
                  <>
                    <button
                      onClick={() => {
                        comdelete(list.id);
                      }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage-div">
        <input
          className="DetailPage-mimee"
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <button
          className="DetailPage_button1"
          onClick={() => {
            compost();
          }}>
          작성 하기
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
