
import React from 'react';
import { CardMain } from '../components';
import StatsCard from '../components/StatsCard';
import { FiFilePlus, FiPlus } from 'react-icons/fi';
import HeaderMain from '../components/HeaderMain';
import Table from '../components/Home/Table';






const Home = () => {
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <HeaderMain category={"Início"}title={"Solicitações"}></HeaderMain>
      
      <Table></Table>
    </div>
  
     

     
    
       
      
   
  );
};

export default Home;