import React from "react";
import "../styles/global.css";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="heading1 colorReg1"
        style={{ width: "100%", textAlign: "center" }}
      >
        Page Not Found
      </div>
    </div>
  );
};

export default NotFound;
