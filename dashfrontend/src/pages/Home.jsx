
import React from 'react';
import { CardMain } from '../components';
import StatsCard from '../components/StatsCard';
import { FiFilePlus, FiPlus } from 'react-icons/fi';
import HeaderMain from '../components/HeaderMain';
import Solicitacoes from '../components/Solicitacoes';






const Home = () => {
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <HeaderMain category={"Início"}title={"Solicitações"}></HeaderMain>
      <button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-400 hover:border-orange-300 rounded-full mb-3">
        <FiPlus/>
      </button>
      <Solicitacoes/>
    </div>
  
     

     
    
       
      
   
  );
};

export default Home;