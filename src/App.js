import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "antd";
import Home from "./module/home";
import Camera from "./module/camera";

const App = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").then(
        function (registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/">
            <Button type="primary">Home</Button>
          </Link>
          <Link to="camera">
            <Button>Open Camera</Button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="camera" element={<Camera />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
