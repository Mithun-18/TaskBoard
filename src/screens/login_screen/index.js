import Cookies from "js-cookie";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/core/button";
import TextFeild from "../../component/core/textFeild";
import {
  HOME_ROUTE,
  USER_ID_COOKIE_KEY,
  USER_NAME_COOKIE_KEY,
} from "../../constants";
import useAuth from "../../providers/auth_provider";
import { USER_LOGIN_ENDPOINT } from "../../services/constants";
import http from "../../services/http";

export default function LoginScreen() {
  const userNameRef = useRef(0);
  const passwordRef = useRef(0);
  const navigate = useNavigate();
  const { setUser, logIn } = useAuth();

  function onSuccess() {
    alert("Logged in successfully!");
    navigate(HOME_ROUTE);
  }

  function onLogin() {
    let userName = userNameRef.current.value;
    let password = passwordRef.current.value;

    if (!userName) {
      userNameRef.current.focus();
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      return;
    }

    password = btoa(password);
    logIn(userName, password, onSuccess);
  }

  return (
    <div className="screen-container">
      <div className="rootLoginScreen">
        <div style={{ height: 600, width: 600 }}>
          <img
            height={"100%"}
            width={"100%"}
            src="login_image.jpg"
            alt="login_image"
          />
        </div>
        <div className="loginScreen">
          <span className="heading">Login</span>
          <TextFeild placeHolder={"User Name"} inputRef={userNameRef} />
          <TextFeild
            placeHolder={"Password"}
            inputRef={passwordRef}
            type={"password"}
          />
          <Button bName={"Login"} onClick={onLogin} />
        </div>
      </div>
    </div>
  );
}
