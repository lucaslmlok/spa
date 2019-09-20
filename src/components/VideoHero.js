
import React from 'react'
import backgroundVideo from '../images/video.mp4'

const VideoHero = () => {
  return (
    <div className="video-hero">
      <video loop autoPlay muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoHero
