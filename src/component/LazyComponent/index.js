import React from 'react';

const VideoOrImg = () => {
    return (
            <video style={{position: 'absolute', height: '100%'}} loop autoPlay playsInline muted>
                <source src="./assets/videos/fengyuzhou-part.mov" type="video/mp4" />
            </video>
            );
}

export default VideoOrImg;