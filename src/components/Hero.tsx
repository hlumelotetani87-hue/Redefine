import { useRef, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos,setLoadedVideos] = useState(0);

  const totalVideos = 3; // Example total number of videos
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev: any) => prev + 1);
  }

  const upcomingVideoIndex = (value: any) => (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex(true));

    const getVideoSrc = (index:any) 
    => `videos/hero-${index}.mp4`;
      // Implementation for getting the next video


  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen, overflow-hidden rounded-lg bg -blue-75">
        <div>
          <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer-hidden rounded-lg">
            <div 
            onClick={handleMiniVdClick}
            className="origin-center scale50 opacity-0
            transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video
                ref={nextVideoRef}
                id="current-video"
                className="rounded-lg size-64 object-cover object-center scale-150"
                src={getVideoSrc(upcomingVideoIndex(true))}
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
          src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a<b/>ming
        </h1>
        <div className="abolute left-0 top-0 z-49 size-full">
          
        </div>
      </div>
    </div>
  )
}

export default Hero