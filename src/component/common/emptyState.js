import React from "react";
import Button from "../core/button";
import { useNavigate } from "react-router-dom";
import { CREATE_BOARD_ROUTE, LOGIN_ROUTE } from "../../constants";
import HandleClickNavigate from "../core/HandleClickNavigate.js";
import useAuth from "../../providers/auth_provider";

export default function EmptyState() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function goToCreateBoard() {
    navigate(CREATE_BOARD_ROUTE);
  }
  return (
    <div>
      <div className="handleClickNavigateContainer ">
        <HandleClickNavigate
          onHandleClickNavigate={logout}
          path={LOGIN_ROUTE}
          bName={"LOGOUT"}
        />
      </div>
      <div className="screen-container">
        <div style={{ height: 320, width: 440 }}>
          <img
            height={"100%"}
            width={"100%"}
            src="emptyScreen.jpg"
            alt="empty screen"
          />
        </div>
        <div className="empty-state">
          <span>No boards found! Please create one.</span>
          <div style={{ width: "180px" }}>
            <Button bName={"Create Board"} onClick={goToCreateBoard} />
          </div>
        </div>
      </div>
    </div>
  );
}
