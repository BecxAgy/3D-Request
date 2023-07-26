import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Navbar,  Sidebar,} from '../components';
import { Home, Historic,Profile, LoginPage} from  "../pages"
import { Navigate } from "react-router-dom";

import { useStateContext } from '../contexts/ContextProvider';
import { useAuth } from "../hooks/useAuth";



export function MyRoutes(){

    const {activeMenu, isAuth, screenSize} = useStateContext();
    const {auth, loading}  = useAuth();
    console.log(loading);
    
   
    if(loading){
        <p>Carregando...</p>
    }

    return( 
    <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            
            {
            activeMenu & isAuth  ? (

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
                     ${activeMenu & isAuth ? 'md:ml-72' : 'flex-2'}`}>

                    <div className= {`fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ${isAuth ? "" : "hidden"} `}>
                    <Navbar />
                    </div>

                    <div>
                        <Routes>
                            <Route path="/" element={auth ? <Home/> : <Navigate to="/login"/>}/>
                            <Route path="/historic" element={auth ? <Historic/> : <Navigate to="/login"/>}/>
                            <Route path="/user-profile" element={auth ? <Profile/> : <Navigate to="/login"/>}/>
                            <Route path="/login" element={!auth ? <LoginPage/> : <Navigate to="/"/>}/>
                        
                        </Routes>
                    </div>
                   
                 </div>
        </div>
    </BrowserRouter>);
}