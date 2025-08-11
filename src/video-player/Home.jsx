import { useState } from 'react'
import Suggestions from './Suggestions'
import VideoPlayer from './Video-Player'

export default function Home(){
    
    const [selectedVideo, setSelectedVideo] = useState(null);

    function handleSuggestionClick(videoSrc){
        setSelectedVideo(videoSrc);
    }
    
    return(
    <div className='flex flex-col justify-center items-center md:flex-row lg:mx-15 md:mx-7 sm:mx-5 h-vh border-4 xl:min-h-[100vh]'>
    
        <div className='bg-white/50 border-4 xl:max-w-1/2 lg:max-h-screen overflow-scroll scrollbar-hide relative'>
            
            <h1 className=' text-white bg-gray-500 font-bold text-3xl px-5 py-2 sticky top-0'>Related Courses</h1>

            <div className='xl:max-w-full lg:max-h-screen overflow-scroll scrollbar-hide px-2'>
                <Suggestions
                    title = "HTML Essentials: Building the Web's Foundation"
                    description = {`Learn the core structure of web pages using HTML. 
                        This course covers elements, attributes, forms, semantic tags, 
                        and best practices for creating clean, accessible, and 
                        well-structured content.`}
                    handleClick={()=>handleSuggestionClick('./videos/sample.mp4')}
                    display = './videos/sample.mp4'
                />

                <Suggestions
                    title = "CSS Fundamentals: Styling the Web"
                    description = {`Master CSS to transform plain HTML into visually 
                        appealing designs. You’ll learn selectors, colors, typography, 
                        layouts, and responsive design to ensure your sites look great
                         on any device.`}
                    handleClick={()=>handleSuggestionClick('./videos/sample2.mp4')}
                    display = './videos/sample2.mp4'
                />

                <Suggestions
                    title = "JavaScript Basics: Interactive Web Development"
                    description = {`Discover the building blocks of JavaScript. 
                        This course teaches variables, functions, loops, and events
                         so you can bring interactivity and logic to your websites.`}
                    handleClick={()=>handleSuggestionClick('./videos/sample3.mp4')}
                    display = './videos/sample3.mp4'
                />

                <Suggestions
                    title = "Responsive Web Design with HTML & CSS"
                    description = {`Create websites that adapt to any screen size.
                         Learn media queries, flexible layouts, and fluid typography 
                         to design mobile-friendly and modern web experiences.`}
                    handleClick={()=>handleSuggestionClick('./videos/sample4.mp4')}
                    display = './videos/sample4.mp4'
                />

                <Suggestions
                    title = "DOM Manipulation with JavaScript"
                    description = {`Unlock the power of the Document Object Model. 
                        Learn how to select, create, and update elements dynamically 
                        to make your pages interactive and engaging.`}
                    handleClick={()=>handleSuggestionClick('./videos/sample.mp4')}
                    display = './videos/sample.mp4'
                />

                <Suggestions
                    title = "CSS Flexbox & Grid Mastery"
                    description = {`Design complex layouts with ease using CSS Flexbox and 
                        Grid. You'll learn the concepts, properties, and practical techniques 
                        to build professional, responsive site structures.`}
                    handleClick={()=>handleSuggestionClick('./videos/sample2.mp4')}
                    display = './videos/sample2.mp4'
                />
            </div>
        </div>
        
        <VideoPlayer 
            videoSrc = {selectedVideo}
        />

    </div>
    
    )
} 