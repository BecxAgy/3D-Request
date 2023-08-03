
import React from 'react';
import HeaderMain from '../components/HeaderMain';
import TableComponent from '../components/Home/TableComponent';
import SearchInput from '../components/Home/SearchInput';
import ButtonAdd from '../components/Home/ButtonAdd';
import ButtonFilter from '../components/Home/ButtonFilter';


const Home = () => {
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <HeaderMain category={"Início"}title={"Solicitações"}></HeaderMain>
      <div className="grid grid-cols-3 gap-3 mb-10">
        <div className='w-3/2 ' >
        <ButtonAdd/>
        </div>
        <div className='w-3/2 ' >
          <ButtonFilter/>
        </div>
       
      
          <SearchInput/>
      
          
     
      </div>
      
      
      <TableComponent/>
    </div>
  
     

     
    
       
      
   
  );
};

export default Home;