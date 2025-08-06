import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import PauseOption from './PauseOption'
import Controls from './controls'

export default function VideoPlay(){

    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPauseOptions, setShowPauseOptions] = useState(false);
    const navigate = useNavigate();

    function requestFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) { 
        element.msRequestFullscreen();
    } else {
        console.warn("Fullscreen API is not supported");
    }
}

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


    
    
    return(
    <div ref={containerRef} border>
        <div className='relative'>
            <video
                ref={videoRef} 
                className='w-full'>
                <source src="./sample.mp4" type='video/mp4'/>
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
                requestFullScreen={requestFullScreen}
                navigate = {navigate}
            />
        )}
    </div>
    )
} 