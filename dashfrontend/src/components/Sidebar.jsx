import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import {links} from "../data/dummy"
import { useStateContext } from '../contexts/ContextProvider';


function Sidebar() {
  const {activeMenu, isAuth, setActiveMenu} = useStateContext();



  return (
    <div className='ml-3 h-screen 
    md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10'>

      {activeMenu & isAuth ? 
      (
        <>
          <div className='flex justify-between
          items-center'>
            <Link to="/"  className="items-center gap-3 
            ml-3 mt-4 flex text-xl font-extrabold 
            tracking-tight dark:text-white text-slate-900" onClick={() => setActiveMenu(!activeMenu)}>
              <SiShopware /> <span>Kempetro</span>
            </Link>
            
          </div>

          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title} >
                <p className='text-gray-400 m-3
              mt-4 uppercase'>

                  {item.title}
                </p>
                {item.links.map((link)=> (
                  <NavLink to={link.link} 
                  key={link.name}
                  onClick={()=>{}}
                   className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-full text-md
                    text-gray-700
                    dark:text-gray-200
                    dark:hover:text-blackhover:bg-light-gray m-2 hover:bg-orange-300'
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                  
                ))}
              </div>
            ))}

          </div>
        </>
      )  : <></>}
    </div>
  )
}

export default Sidebar