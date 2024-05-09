import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  const videoConstraints = {
    facingMode: FACING_MODE_USER,
  };

  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const [images, setImages] = React.useState([]);

  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImages) => [...prevImages, imageSrc]);
  }, [webcamRef]);

  return (
    <div>
      <button onClick={handleClick}>Switch camera</button>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          ...videoConstraints,
          facingMode,
        }}
        ref={webcamRef}
        style={{ width: "250px", height: "250px" }}
      />
      <button onClick={capture} style={{ marginTop: "50px" }}>
        Capture
      </button>
      {images.map((image, index) => (
        <div style={{ marginRight: "20px" }}>
          <img
            key={index}
            src={image}
            alt={`Captured ${index}`}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};
export default Camera;
