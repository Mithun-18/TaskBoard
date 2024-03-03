import React, { useEffect, useRef } from "react";
import TextFeild from "../../component/core/textFeild";
import Button from "../../component/core/button";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../../config";
import { TEST_ENDPOINT } from "../../services/constants";
import http from "../../services/http";

export default function LoginScreen() {
  const userNameRef = useRef(0);
  const passwordRef = useRef(0);

  useEffect(() => {
    http
      .get('/api/v1/users/login')
      .then((res) => {
        console.log("heoo ", res);
      })
      .catch((err) => {
        console.log("catc", err);
      });
  }, []);

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
