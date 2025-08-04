import { useState, useEffect } from 'react'

import Editor from './editor'

import { xml } from '@codemirror/lang-xml'
import { css as cssLang } from '@codemirror/lang-css'
import { javascript as jsLang } from '@codemirror/lang-javascript'


export default function TextEditor(){

    const[html, setHtml] = useState('');
    const[css, setCss] = useState('');
    const[js, setJs] = useState('');
    const [selectedLang, setSelectedLang] = useState('HTML');
    const[srcDoc, setSrcDoc] = useState('');


    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>    
            `)
        }, 250)

        return() => clearTimeout(timeout)
    }, [html, css, js])

    return (
    <>
    <div className='px-30'>
        <label htmlFor='lang-select'
               className='text-white font-bold'
            >Select your language: </label>
            <select 
                id='lang-select'
                value = {selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className='bg-white text-blue-700 rounded-3xl font-serif px-3'
                >
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='Js'>JavaScript</option>
            </select>
    </div>
    <div
        className='flex justify-center gap-2 m-1'
    >     
        <div
            className='flex flex-col gap-1'
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
        
        {selectedLang === 'Js' &&(
            <Editor
                className='text-green-600 bg-blue-300 rounded-t-2xl'
                display = "JavaScript"
                value = {js}
                onChange = {setJs}
                extension = {jsLang}
            />
        )}  
        </div>


        <div className='h-vh w-sm min-w-xs lg:w-lg xl:w-xl xxl:w-xxl bg-white/25 overflow-hidden shadow rounded-t-2xl'>
            <h1 className='text-white font-bold text-center bg-black'>Console</h1>
            <iframe        
             srcDoc = {srcDoc}   
             sandbox="allow-scripts"
             className='w-full h-full' />
        </div>
    </div>
    </>
    )
}