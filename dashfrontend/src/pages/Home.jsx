
import React from 'react';
import { CardMain } from '../components';
import StatsCard from '../components/StatsCard';
import { FiFilePlus } from 'react-icons/fi';
import Table from '../components/Table';





const Home = () => {
  return (
    
    <div class="container  py-10 px-11">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-orange-300 p-4 m-4 shadow-lg rounded-lg">
        <h3>Total de Solicitações</h3>
        <span>1900</span>
      </div>
      <div class="bg-yellow-300 p-4 m-4 shadow-lg rounded-lg">Suas Solicitações</div>
      <div class="bg-orange-200 p-4 m-4 shadow-lg rounded-lg">Cadastrar Solicitação</div>
    </div>
    <Table/>
  </div>
  
     

     
    
       
      
   
  );
};

export default Home;