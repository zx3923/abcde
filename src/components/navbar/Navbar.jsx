import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import LanguageIcon from "@mui/icons-material/Language";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { atom, RecoilRoot, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

import SignUp from "../login/SignUp";
const Navbar = () => {
  const [lonned, setLonned] = useState(false);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState("");
  const { persistAtom } = recoilPersist();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setLonned(sessionStorage.getItem("user"));
      setUserId(sessionStorage.getItem("userid"));
    }
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search1"></div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            Korea
          </div>
          <div className="Hader_Login1">
            {lonned ? (
              <>
                <span className="navbar_span">{check}</span>

                <span className="navbar_span1">님</span>
                <button
                  className="LoginNamedaci"
                  onClick={() => {
                    setLonned(false);

                    sessionStorage.clear();
                    window.location.reload();
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <div className="Hader_Login1">
                <div className="Login">
                  <label for="my-modal-1">로그인</label>

                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box relative">
                      <label
                        for="my-modal-1"
                        class="btn-sm absolute right-6 top-9"
                      >
                        ✕
                      </label>

                      <h1 class="text-lg font-bold">로그인 페이지</h1>
                      <p class="py-4">
                        <div>
                          <div className="Login_input">
                            <input
                              className="loginId"
                              type="text"
                              placeholder="ID"
                              onChange={(e) => {
                                setUserId(e.target.value);
                              }}
                            />
                          </div>
                          <div className="Login_input1">
                            <input
                              className="loginPw"
                              type="password"
                              placeholder="Password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                          <div className="loginMid"></div>
                          <div className="autoLogin">아이디/비밀번호 찾기</div>
                          <label
                            type="submit"
                            className="loginBtn"
                            for="my-modal-1"
                            onClick={async () => {
                              const lonned = await axios({
                                url: "http://localhost:7999/account/signIn",
                                method: "POST",
                                data: { userId, password },
                              });

                              setName(lonned.data.username);
                              setId(lonned.data.userId);

                              setId(lonned.data.userName);
                              if (lonned.data.aboolean == true) {
                                setLonned(lonned.data);

                                alert("로그인 성공");
                                window.location.reload();
                              } else if (lonned.data.aboolean == false) {
                                setLonned(lonned.data.userName);

                                alert("빈칸을 확이나세요");
                              }
                              console.log(lonned);
                              sessionStorage.setItem(
                                "logined",
                                lonned.data.userName
                              );
                              sessionStorage.setItem(
                                "user",
                                lonned.data.userName
                              );
                              sessionStorage.setItem(
                                "userid",
                                lonned.data.userId
                              );
                            }}
                          >
                            {" "}
                            로그인{" "}
                          </label>
                        </div>
                        <div className="socialBox">
                          <div className="kakao">
                            <img
                              className="kakaoLogo"
                              src="https://t1.daumcdn.net/cfile/tistory/99DD44345F33780309"
                            />
                            <div className="kakaoText">
                              <a href="">카카오 계정으로 신규가입</a>
                            </div>
                          </div>
                          <div className="facebook">
                            <img
                              className="facebookLogo"
                              src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
                            />
                            <div className="facebookText">
                              <a href="">페이스북 계정으로 신규가입</a>
                            </div>
                          </div>
                          <div className="Google">
                            <img
                              className="GoogleLogo"
                              src="http://asq.kr/y7pd84Th"
                            />
                            <div className="GoogleText">
                              <a href="">구글 계정으로 신규가입</a>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                <SignUp />
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
