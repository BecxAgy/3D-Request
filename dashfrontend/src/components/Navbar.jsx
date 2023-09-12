import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdPerson } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getUser } from '../slices/userSlice';

const NavButton = ({ title, customFunc, icon, color}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu} = useStateContext();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const userLocal = JSON.parse(localStorage.getItem("user"));

  
   
   const dispatch = useDispatch();

   const {user, loading} = useSelector((state) => state.user);

 
 useEffect(() => {
   dispatch(getUser(userLocal['id']));
   console.log(user)
  }, [dispatch]);
 


  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative ">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
       
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mt-1"
            
          >
           
            <p>
              <span className="text-gray-400 text-12">Olá</span>
              <span className="text-gray-400 font-bold ml-1 text-12">
                {userLocal && userLocal.name ? userLocal.name : ""}
                
              </span>
            </p>
            <MdPerson className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

       
      </div>
    </div>
  );
};

export default Navbar;