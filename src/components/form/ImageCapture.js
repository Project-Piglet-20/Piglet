import React from 'react';

const ImageCapture = () => {
    return (
        <div className= "card-content">
            <div className= "card-content">
                <div className= "create-post">
                    <video id="player" autoplay></video>
                    <canvas id="canvas" width="320px" height="240px"></canvas>
                    <button class="btn waves-effect waves-light" id="capture-btn">Capture
                    </button>
                    <div id="pick-image">
                        <h6>Pick an Image instead</h6>
                        <input type="file" accept="image/*" id="image-picker"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCapture;