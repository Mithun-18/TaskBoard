import React from "react";
import Button from "../core/button";
import { useNavigate } from "react-router-dom";
import { CREATE_BOARD_ROUTE } from "../../constants";
import LogOut from "../../component/core/logout";

export default function EmptyState() {
  const navigate = useNavigate();

  function goToCreateBoard() {
    navigate(CREATE_BOARD_ROUTE);
  }
  return (
    <div>
      <div className="logOutContainer">
        <LogOut />
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
