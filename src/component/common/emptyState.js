import React from "react";
import Button from "../core/button";

export default function EmptyState() {
  return (
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
          <Button bName={"Create Board"} />
        </div>
      </div>
    </div>
  );
}
