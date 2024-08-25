import { useState } from "react";
import classes from "./DiseaseDetector.module.css";

const DiseaseDetector = () => {
  const [data, setData] = useState(null);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [imageUploaded, setImageUploaded] = useState(false);

  const onImageChange = (e) => {
    if (e.target.files) {
      setImageUploaded(true);
      setFile(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const predictClickHandler = () => {
    const formData = new FormData();
    formData.append("im", image);

    fetch("http://127.0.0.1:8000/detect", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={classes["detector-container"]}>
      <div className={classes["frame"]}>
        <h1 className={classes["title"]}>Detect Crop Disease</h1>
        <p className={classes["description"]}>
          Upload an image of your crop and get a prediction of any potential
          disease.
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={onImageChange}
          className={classes["file-input"]}
        />
        {imageUploaded && (
          <img src={file} alt="Preview" className={classes["image-preview"]} />
        )}
        {data && (
          <div className={classes["result-container"]}>
            <h2 className={classes["detection-h2"]}>
              Prediction:{" "}
              <span className={classes["prediction-h1"]}>{data.disease}</span>
            </h2>
            <h2 className={classes["detection-h2"]}>
              Confidence:{" "}
              <span className={classes["confidence-h1"]}>
                {(data.confidence * 100).toFixed(2)}%
              </span>
            </h2>
          </div>
        )}
        <button
          onClick={predictClickHandler}
          className={classes["submit-button"]}
        >
          Predict
        </button>
      </div>
    </div>
  );
};

export default DiseaseDetector;
