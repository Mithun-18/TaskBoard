import React from "react";
import Button from "../core/button";

export default function EmptyState() {
  return (
    <div className="screen-container">
      <div style={{ height: 320, width: 440 }}>
        <img height={"100%"} width={"100%"} src="emptyScreen.jpg" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          padding: "0px 24px",
        }}
      >
        <span>No boards found! Please create one.</span>
        <div style={{ width: "180px" }}>
          <Button bName={"Create Board"} />
        </div>
      </div>
    </div>
  );
}
