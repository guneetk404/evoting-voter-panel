import React from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = (props) => {

    const { image, setImage } = props;
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        });


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image === '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image !== '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="btn btn-danger m-2">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="btn btn-success m-2">Capture</button>
                }
            </div>
        </div>
    );
};