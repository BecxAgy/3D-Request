import React from 'react'
import './App.css'
import {Home} from './pages/Home'
import {Historic} from './pages/Historic'
import {Login} from './pages/Login'
import {Profile} from './pages/Profile'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
    const activeMenu = false;

  return (
<div>
    <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                <TooltipComponent content="Settings" position='Top'>
                    <button type='button' 
                    className='text-3xl p-3 
                    hover:drop-shadow-xl
                    hover:bg-light-gray
                    text-white'
                    
                    style={{background: 'orange', borderRadius: '50%'}}>
                        <FiSettings/>

                        
                    </button>
                </TooltipComponent>
            </div>
            {
                activeMenu ? (

                    <div className="w-72 fixed sidebar
                    dark:bg-secondary-dark-bg
                    bg-white">
                        Sidebar
                    </div>

                 ) :(

                    <div className='dark:bg-secondary-dark-bg'>
                        Sidebar w-0
                    </div>
                 )}

                 <div className={
                    'dark:bg-main-bg bg-main-bg min-h-screen w-full' 
                    + activeMenu ? 'md:ml-72' : 'flex-2'
                    }>

                    <div className="fixed md:staticbg-main-bg dark:bg-main-dark-bg
                    navbar w-full">
                        Navbar
                    </div>  
                   
                 </div>

                 <div>
                 <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/historic" element={<Historic/>}/>
                    <Route path="/user-profile" element={<Profile/>}/>
                    <Route path="/login" element={<Login/>}/>
                    
                </Routes>
                 </div>
        </div>
    </BrowserRouter>
</div>
    
  )
}

export default App