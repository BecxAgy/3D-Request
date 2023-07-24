
import React from 'react';
import { CardMain } from '../components';
import StatsCard from '../components/StatsCard';
import { FiFilePlus } from 'react-icons/fi';
import Table from '../components/Table';





const Home = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <CardMain  />

       <div className='flex justify-evenly'>
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-4  ">
            <StatsCard title={"Total de Solicitações"} total={"1000"} icon={<FiFilePlus/>}/>

            <StatsCard title={"Suas Solicitações"} total={"100"} icon={<FiFilePlus/>}/>
          </div>

          <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-4  ">
            <StatsCard title={"Total de Solicitações"} total={"1000"} icon={<FiFilePlus/>}/>

            <StatsCard title={"Suas Solicitações"} total={"100"} icon={<FiFilePlus/>}/>
          </div>
        </div> 
        
        
    
      </div>
      
      
      
    </div>
  );
};

export default Home;