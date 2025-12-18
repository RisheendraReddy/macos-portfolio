import { useRef, useEffect } from 'react'

const VideoWallpaper = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch((error) => {
        console.error('Error playing video:', error)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Fallback dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Video wallpaper */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/wallpaper-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Optional dark overlay for better visibility of UI elements */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}

export default VideoWallpaper

