import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';


import { useStateContext } from '../contexts/ContextProvider';


const Home = () => {
  const { currentColor} = useStateContext();

  return (
    <div className="mx-20 my-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-start ">
        <div className=" bg-gray-300 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Solicitações</p>
              <p className="text-2xl  text-gray-500">1231</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
           <button className=" p-2 rounded-full hover:drop-shadow-xl" style={{ color: currentColor }}>Adicionar</button>
          </div>
        </div>

       
      </div>

     
    </div>
  );
};

export default Home;