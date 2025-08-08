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
    <div className='flex flex-col justify-center md:flex-row mt-20 lg:mx-15 md:mx-7 sm:mx-5'>
    
        <div className='bg-white/50 pt-5 px-2'>
            <div className='flex items-baseline gap-3'>
                <h1 className='text-3xl font-bold'>Course Title: </h1>
                <p className='text-2xl'>JavaScript- From Basic to Advanced</p>
            </div>
            <div className='px-3'>
                <div className='flex items-baseline gap-2'>
                    <h3 className='font-mono text-lg font-semibold'>Instructor: </h3>
                    <p className='text-[18px] font-light text-blue-700'>Alex Morgan</p>
                </div>
                <div className='flex items-baseline gap-3'>
                    <h3 className='font-mono text-lg font-semibold'>Offer By: </h3>
                    <p className='text-[18px] font-light text-blue-700'>Some Company</p>
                </div>
                <div className='flex items-baseline gap-3'>
                    <h3 className='font-mono text-lg font-semibold'>Course Dates: </h3>
                    <p className='text-[18px] font-light text-blue-700'>Self-paced (Enroll anytime)</p>
                </div>
                <div className='flex items-baseline gap-3'>
                    <h3 className='font-mono text-lg font-semibold'>Delivery Mode: </h3>
                    <p className='text-[18px] font-light text-blue-700'>100% Online *Video Lectures * Interactive Coding Labs</p>
                </div>
                <div>
                    <h3 className='font-mono text-lg font-semibold'>Course Description: </h3>
                    <p className='text-sm'>This course offers a comprehensive introduction to modern JavaScript (ES6+), 
                    including variables, functions, objects, DOM manipulation, async programming, 
                    and more. Through project-based lessons and hands-on exercises, you'll build 
                    real-world web apps and gain confidence in JavaScript fundamentals and advanced 
                    concepts.</p> 
                </div>
            </div>
        </div>
    

        <div ref={containerRef} className='min-w-[425px]'>
            <div className='relative '>
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
    </div>
    
    )
} 