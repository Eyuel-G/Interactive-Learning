/* import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App'
import TextEditor from './TextEditor'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/TextEditor' element={<TextEditor />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
 */

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import VideoPlayer from './video-player/Video-Player'
import TextEditor from './textEditor-components/TextEditor'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/videoPlayer' element={<VideoPlayer />} />
        <Route path='/textEditor' element={<TextEditor/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
