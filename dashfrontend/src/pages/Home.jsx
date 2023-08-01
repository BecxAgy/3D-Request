
import React from 'react';
import HeaderMain from '../components/HeaderMain';
import TableComponent from '../components/Home/TableComponent';


const Home = () => {
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <HeaderMain category={"Início"}title={"Solicitações"}></HeaderMain>
      
      <TableComponent/>
    </div>
  
     

     
    
       
      
   
  );
};

export default Home;