import { useEffect, useState } from "react";
import classes from "./DiseaseDetector.module.css";

const DiseaseDetector = () => {
  const [data, setData] = useState(null);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [imageUploaded, setImageUploaded] = useState(false);
  const formData = new FormData();
  function onImageChange(e) {
    if (e.target.files) {
      setImageUploaded(true);
    }
    console.log(e.target.files);

    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);

    formData.append("file", image);
  }

  const predictClickHandler = (e) => {
    fetch("http://127.0.0.1:8000/detect", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      formData,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));

    setData({ prediction: "Dummy Disease", confidance: "68%" }); //Feeding dummy data for now as the Fetch is facing CORS issue
  };
  return (
    <div className={classes["detector-container"]}>
      <h1 style={{ marginTop: "50px" }}>Add an Image:</h1>
      <input type="file" accept="image/*" onChange={onImageChange} />
      {imageUploaded && <img src={file} className={classes["image-preview"]} />}
      {data && (
        <div>
          <h2 className={classes["detection-h2"]}>
            Prediction: {data.prediction}
          </h2>
          <h2 className={classes["detection-h2"]}>
            Confidence: {data.confidance}
          </h2>
        </div>
      )}
      <span>
        <button
          className={classes["submit-button"]}
          onClick={predictClickHandler}
        >
          Predict
        </button>
      </span>
    </div>
  );
};
export default DiseaseDetector;
