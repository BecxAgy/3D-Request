import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Navbar,  Sidebar,} from '../components';
import { Home, Historic,Profile, LoginPage} from  "../pages"
import { Navigate } from "react-router-dom";

import { useStateContext } from '../contexts/ContextProvider';
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import RegisterPage from "../pages/RegisterPage";
import RegisterSolicitacao from "../pages/RegisterSolicitacao";



export function MyRoutes(){

    const {activeMenu} = useStateContext();
    const  { user } = useSelector ((state =>state.auth));
    const {auth, loading}  = useAuth();
    console.log(loading);
    
   
   

    return( 
    <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            
            {
            activeMenu & auth  ? (

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
                     ${activeMenu & auth ? 'md:ml-72' : 'flex-2'}`}>

                    <div className= {`fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ${auth ? "" : "hidden"} `}>
                    <Navbar user={user}/>
                    </div>

                    <div>
                        <Routes>
                            <Route path="/" element={auth ? <Home/> : <Navigate to="/login"/>}/>
                            <Route path="/historic" element={auth ? <Historic/> : <Navigate to="/login"/>}/>
                            <Route path="/user-profile" element={auth ? <Profile/> : <Navigate to="/login"/>}/>
                            <Route path="/login" element={!auth ? <LoginPage/> : <Navigate to="/"/>}/>
                            <Route path="/register" element={!auth ? <RegisterPage/> : <Navigate to="/"/>}/>
                            <Route path="/form-solicitacao" element={auth ? <RegisterSolicitacao/> : <Navigate to="/login"/>}/>
                        </Routes>
                    </div>
                   
                 </div>
        </div>
    </BrowserRouter>);
}