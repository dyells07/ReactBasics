import React from "react";

export const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
        }}
      >
        <div style={{ flexBasis: "50%", marginRight: "20px" }}>
          <div style={{ display: "inline-block", position: "relative" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt="React Logo"
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                top: 0,
                left: 0,
                animation: "spin 2s linear infinite",
              }}
            />
            <h2
              style={{
                fontSize: "24px",
                marginBottom: "30px",
                paddingLeft: "60px",
              }}
            >
              React Basics
            </h2>
          </div>
          <p style={{ fontSize: "16px" }}>
            This is a todo list app made with React.
          </p>
        </div>
      </div>
    </>
  );
};
