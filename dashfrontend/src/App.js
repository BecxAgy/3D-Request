import React from 'react'
import './App.css'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, Historic,Profile, Login} from  "./pages"

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './contexts/ContextProvider';


function App() {
    const {activeMenu } = useStateContext();
    

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
                        <Sidebar/>
                    </div>

                 ) :(

                    <div className='dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                    </div>
                 )}

                 <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    
                }>

                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar />
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
        </div>
    </BrowserRouter>
</div>
    
  )
}

export default App