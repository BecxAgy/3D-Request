import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { Home, Historic,Profile, Login} from  "../pages"


import { useStateContext } from '../contexts/ContextProvider';




export function MyRoutes(){

    const {activeMenu, isAuth} = useStateContext();
   

    return( 
    <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            
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
                    `dark:bg-main-bg bg-main-bg
                     min-h-screen w-full 
                     ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>

                    <div className= {`fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full `}>
                    <Navbar />
                    </div>

                    <div>
                        <Routes>
                            <Route exact path="/home" element={<Home/>}/>
                            <Route path="/historic" element={<Historic/>}/>
                            <Route path="/user-profile" element={<Profile/>}/>
                            <Route exact path="/" element={<Login/>}/>
                            <Route path="*" element={<Login/>}/>
                        
                        </Routes>
                    </div>
                   
                 </div>
        </div>
    </BrowserRouter>);
}