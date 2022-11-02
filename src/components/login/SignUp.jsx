import React, { useState, useEffect } from "react";
import "./SignUp.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerd = () => {
    axios
      .post("http://localhost:7999/account/signUp", {
        userId,
        userName,
        password,
        confirmPassword,
      })
      .then((response) => {
        // Handle success.
        // setSignUp(response.data);
        if (response.data == true) {
          alert("회원가입 성공!! 로그인 하세요");
        } else if (response.data == false) {
          alert("정보를 확인하세요");
        }
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
  };
  return (
    <div className="SignUp">
      <label for="my-modal">회원가입</label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">회원가입</h3>
          <AccountCircleIcon sx={{ fontSize: 70, marginTop: "20px" }} />

          <p class="py-4">
            <div className="SignUp_input">
              <input
                className="loginId"
                type="text"
                vlaue={userName}
                placeholder="이름을 입력하세요"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="SignUp_input">
              <input
                className="loginId"
                type="text"
                vlaue={userId}
                placeholder="아이디를 입력하세요"
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              />
            </div>
            <div className="SignUp_input">
              <input
                className="loginId"
                type="password"
                vlaue={password}
                placeholder="비밀번호 입력하세요"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="SignUp_input">
              <input
                className="loginId"
                type="password"
                placeholder="비밀번호"
                vlaue={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <div class="join_row">
              <div className="Joindiv">
                <h3 class="join_title"></h3>
                <div class="ps_box gender_code"></div>
              </div>
            </div>
            <div className="SiguUpBtndiv">
              <label
                Name="SignUpBtn1"
                type="reset"
                for="my-modal"
                onClick={() => {
                  registerd();
                  console.log(userId, password, userName, confirmPassword);
                }}>
                회원가입
              </label>

              <label className="SignUpBtn1" for="my-modal">
                나가기
              </label>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
