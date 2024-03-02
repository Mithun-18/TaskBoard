import React, { useRef } from "react";
import TextFeild from "../../component/core/textFeild";
import Button from "../../component/core/button";

export default function LoginScreen() {
  const userNameRef = useRef(0);
  const passwordRef = useRef(0);

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
          <TextFeild placeHolder={"User Name"} inRef={userNameRef} />
          <TextFeild
            placeHolder={"Password"}
            inRef={passwordRef}
            type={"password"}
          />
          <Button bName={"Login"} />
        </div>
      </div>
    </div>
  );
}
