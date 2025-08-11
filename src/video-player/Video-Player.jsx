import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Controls from './controls'
import PauseOption from './PauseOption'


export default function VideoPlayer ({videoSrc: initialVideoSrc}){

        const navigate = useNavigate();    
        const containerRef = useRef(null);
        const videoRef = useRef(null);
        const [currentvideoSrc, setCurrentVideoSrc] = useState('');
        const [isPlaying, setIsPlaying] = useState(false);
        const [showPauseOptions, setShowPauseOptions] = useState(false);
        
    
        function requestFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) { 
            element.msRequestFullscreen();
        } else {
            console.warn("Fullscreen API is not supported");
        }
    }   

        function isInFullScreen() {
        return (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        );
    }

    useEffect(() => {
    const resumeTime = parseFloat(localStorage.getItem('resumestart'));
    const resumeVideoSrc = localStorage.getItem('resumeVideoSrc');

    if (resumeVideoSrc) {
      setCurrentVideoSrc(resumeVideoSrc);
    } else if (initialVideoSrc) {
      setCurrentVideoSrc(initialVideoSrc);
    }

    const video = videoRef.current;
    if (!video) return;

    const seekAndPlay = () => {
      if (!isNaN(resumeTime) && resumeTime > 0 && resumeTime < video.duration) {
        video.currentTime = resumeTime;
      }
      video.pause();
      localStorage.removeItem('resumestart');
      localStorage.removeItem('resumeVideoSrc');
    };

    if (video.readyState >= 1) {
      seekAndPlay();
    } else {
      video.addEventListener('loadedmetadata', seekAndPlay, { once: true });
    }
}, [initialVideoSrc]);


        useEffect(()=>{
            const video = videoRef.current;
            if(!video) return;
    
            const resumeTime = parseFloat(localStorage.getItem('resumestart'));
                if (!isNaN(resumeTime)) {
                    video.currentTime = resumeTime;
                    localStorage.removeItem('resumestart');
                }
    
            const handlePlay = () => {
                setIsPlaying(true);
                setShowPauseOptions(false);
            }
                    
            const handlePause = () => {
                setIsPlaying (false);
                if(isInFullScreen())
                    setShowPauseOptions(true);
            }
            const handleEnded = () => {
                setIsPlaying (false);
                setShowPauseOptions(false);
            }
    
            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('ended', handleEnded);
    
            return () => {
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
                video.removeEventListener('ended', handleEnded);
            }
        },[])
    
    return (

        <div ref={containerRef} className='min-w-[425px]'>
            <div className='relative'>
                <video
                    src={currentvideoSrc || null}
                    ref={videoRef} 
                    className='w-full'>
                </video>

                <Controls
                    isPlaying = {isPlaying}
                    videoRef = {videoRef}
                    containerRef = {containerRef}
                    setIsPlaying = {setIsPlaying}
                    setShowPauseOptions={setShowPauseOptions}
                    requestFullScreen = {requestFullScreen}
                />
            </div>

            {showPauseOptions && (
                <PauseOption
                    videoRef={videoRef}
                    containerRef = {containerRef}
                    requestFullScreen={requestFullScreen}
                    navigate = {navigate}
                />
            )}
        </div>
    )
}