import React, { useRef } from "react";
import TextFeild from "../../component/core/textFeild";
import Button from "../../component/core/button";

export default function LoginScreen() {
  const userNameRef = useRef(0);
  const passwordRef = useRef(0);

  return (
    <div class="screen-container">
      <div class="rootLoginScreen">
        <div style={{ height: 600, width: 600 }}>
          <img height={"100%"} width={"100%"} src="login_image.jpg" alt="login_image"/>
        </div>
        <div className="loginScreen">
          <span style={{ fontSize: "32px", fontWeight: "400" }}>Login</span>
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
