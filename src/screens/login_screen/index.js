import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, SIGNUP_ROUTE } from "../../constants";
import useAuth from "../../providers/auth_provider";
import LoginSingupComponent from "../component/login_signup_component";
import HandleClickNavigate from "../../component/core/HandleClickNavigate";

export default function LoginScreen() {
  const userNameRef = useRef(0);
  const passwordRef = useRef(0);
  const navigate = useNavigate();
  const { logIn } = useAuth();

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

  function navigateSignUp(onSuccess) {
    onSuccess();
  }

  return (
    <div>
      <div className="handleClickNavigateContainer ">
        <HandleClickNavigate
          onHandleClickNavigate={navigateSignUp}
          path={SIGNUP_ROUTE}
          bName={"SIGN UP"}
        />
      </div>
      <LoginSingupComponent
        heading={"Login"}
        userNameRef={userNameRef}
        passwordRef={passwordRef}
        bName={"Login"}
        onHandleClick={onLogin}
      />
    </div>
  );
}
