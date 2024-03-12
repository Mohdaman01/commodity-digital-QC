'use client'

import React, { useRef, useState } from 'react';
// import Webcam from "react-webcam";
const Capture = () => {

    // const webcamRef = useRef(null);

    const [image, setImage] = useState(null);

    // const onUserMedia = () => {
    //     webcamRef.current.video.facingMode = "environment";
    //   }

    // const capture = (imageSrc) => {
    //     // const imageSrc = webcamRef.current.getScreenshot();
    //     console.log(imageSrc.target.value)
    //     setImage(imageSrc.target.value);
    //   };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
      }

    return (
        <section>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='file' name='image' accept='image/*' capture />
                    <button type='submit'>submit</button>
                </form>
                
                {image && <img src={image} />}
            </div>
        </section>
    )
}


export default Capture;