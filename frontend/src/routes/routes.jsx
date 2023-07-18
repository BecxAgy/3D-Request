import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Historic from "../pages/Historic"
import { Sidebar } from "../components/Sidebar";
import Profile from "../pages/Profile"
import Login from "../pages/Login"


export function MyRoutes(){
    return( <BrowserRouter>

        
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/historic" element={<Historic/>}/>
                <Route path="/user-profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
                
            </Routes>
       
        
   </BrowserRouter>);
}