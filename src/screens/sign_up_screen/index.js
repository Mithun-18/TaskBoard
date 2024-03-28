import { useRef } from "react";
import LoginSingupComponent from "../component/login_signup_component";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../constants";
import useAuth from "../../providers/auth_provider";
import HandleClickNavigate from "../../component/core/HandleClickNavigate";

export default function SignUp() {
  const userNameRef = useRef(0);
  const passwordRef = useRef(0);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  function onSuccess() {
    alert("Signed up successfully !");
    navigate(HOME_ROUTE);
  }

  function onSignUp() {
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
    signUp(userName, password, onSuccess);
  }

  function navigateLogin(onSuccess) {
    onSuccess();
  }
  return (
    <div>
      <div className="handleClickNavigateContainer ">
        <HandleClickNavigate
          onHandleClickNavigate={navigateLogin}
          path={LOGIN_ROUTE}
          bName={"LOGIN"}
        />
      </div>
      <LoginSingupComponent
        heading={"SignUp"}
        userNameRef={userNameRef}
        passwordRef={passwordRef}
        bName={"SignUp"}
        onHandleClick={onSignUp}
      />
    </div>
  );
}
