import React from 'react';

const VideoOrImg = () => {
    return (
            <video style={{position: 'absolute', right:0, bottom:0, minHeight: '100%', minWidth: '100%'}} loop autoPlay playsInline muted>
                <source src="./assets/videos/fengyuzhou-part.mov" type="video/mp4"/>
            </video>
            );
}

export default VideoOrImg;