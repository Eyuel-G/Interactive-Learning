import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Editor from './editor'
import Mapping from '../Syncronizing/sample-mapping'

import { xml } from '@codemirror/lang-xml'
import { css as cssLang } from '@codemirror/lang-css'
import { javascript as jsLang } from '@codemirror/lang-javascript'


export default function TextEditor(){

    const[html, setHtml] = useState('');
    const[css, setCss] = useState('');
    const[js, setJs] = useState('');
    const [selectedLang, setSelectedLang] = useState('HTML');
    const[srcDoc, setSrcDoc] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const pausedTime = parseFloat(localStorage.getItem('pausedstart')) || 0;

        const matched = Mapping.find(({ start, end }) => pausedTime >= start && pausedTime <= end);

            if (matched) {
                setHtml(matched.html);
                setCss(matched.css);
                setJs(matched.js);
            } else {
                setHtml('');
                setCss('');
                setJs('');
            }
    }, []);


    useEffect(()=>{
        const startout = setTimeout(()=>{
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>    
            `)
        }, 250)

        return() => clearTimeout(startout)
    }, [html, css, js])


    function handleClick() {
        const pausedTime = parseFloat(localStorage.getItem('pausedstart')) || 0;
        localStorage.setItem('resumestart', pausedTime.toString());
        navigate('/');
    }

    return (
    <div className='flex justify-center bg-[#22252b] h-vh min-w-[811px]'>  
        <div className='hidden md:flex flex-col items-baseline gap-2 w-[200px] min-w-[80px] h-vh pl-2 mt-20'>
            <h3 className='text-white text-xs font-extrabold mb-3'>Open Editors: </h3>
            <button 
                value = 'HTML'
                onClick = {(e)=>setSelectedLang(e.target.value)}
                className={`text-sm rounded-sm hover:underline ${selectedLang === 'HTML' ? 'bg-[#3a3f4a] text-white border border-amber-200 pr-10 pl-1': 'text-red-500'}`}
            >index.html</button>
            <button
                value = 'CSS'
                onClick = {(e)=>setSelectedLang(e.target.value)}
                className={`text-sm rounded-sm hover:underline ${selectedLang === 'CSS' ? 'bg-[#3a3f4a] text-white border border-amber-200 pr-12 pl-1': 'text-blue-500'}`}
            >style.css</button>
            <button
                value = 'JavaScript'
                onClick={(e)=>setSelectedLang(e.target.value)}
                className={`text-sm rounded-sm hover:underline ${selectedLang === 'JavaScript' ? 'bg-[#3a3f4a] text-white border border-amber-200 pr-14 pl-1': 'text-yellow-500'}`}
            >app.js</button>
        </div>
        
        <div >
            <div className='flex gap-4 ml-5'>
                <button
                    className='bg-orange-500 hover:bg-orange-700 rounded-sm border-1 px-2'
                    onClick = {handleClick}
                >Return to Video</button>
                <button 
                    value = 'HTML'
                    onClick = {(e)=>setSelectedLang(e.target.value)}
                    className={`text-sm rounded-sm hover:underline ${selectedLang === 'HTML' ? 'bg-[#3a3f4a] text-white border border-amber-200 px-2': 'text-red-500'}`}
                
                >index.html</button>
                <button
                    value = 'CSS'
                    onClick = {(e)=>setSelectedLang(e.target.value)}
                    className={`text-sm rounded-sm hover:underline ${selectedLang === 'CSS' ? 'bg-[#3a3f4a] text-white border border-amber-200 px-2': 'text-blue-500'}`}
                >style.css</button>
                <button
                    value = 'JavaScript'
                    onClick={(e)=>setSelectedLang(e.target.value)}
                    className={`text-sm rounded-sm hover:underline ${selectedLang === 'JavaScript' ? 'bg-[#3a3f4a] text-white border border-amber-200 px-2': 'text-yellow-500'}`}
                >app.js</button>
            </div>

        <div
            className='flex justify-center items-center gap-2 m-1 md:flex-col'
        >     
            {selectedLang === 'HTML' && (
                <Editor
                    className='text-blue-600 bg-red-300 rounded-t-2xl'
                display = "HTML"
                value = {html}
                onChange = {setHtml}
                extension = {xml}
            />
        )}

        {selectedLang === 'CSS' &&(
            <Editor
                className='text-red-600 bg-green-300 rounded-t-2xl'
                display = "CSS"
                value = {css}
                onChange = {setCss}
                extension = {cssLang}
            />
        )}
        
        {selectedLang === 'JavaScript' &&(
            <Editor
                className='text-green-600 bg-blue-300 rounded-t-2xl'
                display = "JavaScript"
                value = {js}
                onChange = {setJs}
                extension = {jsLang}
            />
        )}  


        <div className='absolute top-0 right-0 bg-white overflow-hidden rounded-t-2xl mt-30 mr-5 min-w-[345px]'>
            <h1 className='text-white font-bold text-center bg-black'>Preview</h1>
            <iframe        
             srcDoc = {srcDoc}   
             sandbox="allow-scripts"
             className='w-[37vw] min-w-[347px] h-[50vh]' />
        </div>

        </div>
        </div>


        <div className="bg-black/100 text-red-700 w-full h-full p-4 rounded sm:hidden fixed top-0 left-0 right-0 z-50">
            ⚠️ Warning: This app can't be supported with you current screen resolution.
        </div>


    </div>
    )
}