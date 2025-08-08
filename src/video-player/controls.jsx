import { useState, useEffect } from 'react'

export default function Controls({togglePlay, isPlaying, videoRef, containerRef, setIsPlaying, setShowPauseOptions, requestFullScreen}){

    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    function togglePlay(){
        const video = videoRef.current;
        const container= containerRef.current;

        if(video.paused){
            video.play();
            setIsPlaying(true);
            requestFullScreen(container);
            
        } else {
            video.pause();
            setIsPlaying(false);
            setShowPauseOptions(true);

        }
    }

    useEffect(()=>{
        const video = videoRef.current;

        function updateProgress(){
            const timeStamp = (video.currentTime / video.duration) * 100;
            setProgress(timeStamp);
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
        }

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('timedata', updateProgress);

        return ()=>{
            video.removeEventListener('timeupdate', updateProgress);
            video.removeEventListener('timedata', updateProgress);
        } 

    }, [videoRef]);


    function handleSlider(element) {
        const video = videoRef.current;
        const newTime = (element.target.value/100) * video.duration;
        video.currentTime = newTime;
        setProgress(element.target.value);
    }

    function formatTime(sec){
        const min = Math.floor(sec/60);
        const secs = Math.floor(sec % 60);
        return `${min}: ${secs.toString().padStart(1, '0')}`
    }


    return (
         <div className='absolute inset-0 flex items-end justify-center'>
            <div className='flex items-center'>
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white px-1 py-1 m-1 rounded cursor-pointer'
                onClick={togglePlay}
            >{isPlaying ? 'Pause' : 'Play'}</button>

            <div className='flex flex-col md:w-[380px] min-w-[300px]'>
                <input type='range'
                       value={progress}
                       onChange={handleSlider}
                       className=' accent-blue-700'/>
        
                <span className='text-white text-xs text-center'>
                    {formatTime(currentTime)} /
                     {formatTime(duration)}
                </span>
                
            </div>
            
            </div>
        </div>
    )
}