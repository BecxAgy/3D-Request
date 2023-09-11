
import React, { useState } from 'react';
import HeaderMain from '../components/HeaderMain';
import TableComponent from '../components/Home/TableComponent';
import ButtonAdd from '../components/Home/ButtonAdd';
import SearchInput from '../components/Home/SearchInput';
import AlertsMessage from '../components/AlertsMessage';
import { useSelector } from 'react-redux';
import MenuPopupState from '../components/MenuPopupState';


const Home = () => {
  const {  error} = useSelector((state) => state.solicitacao)
  const [search, setSearch] = useState("");

  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    
     {error && <AlertsMessage message={error} type="error"/>}
      <HeaderMain category={"Início"}title={"Solicitações"}></HeaderMain>
      <div className="md:flex grid-cols-2 gap-3 mb-10 justify-between sm:flex grid-rows-2">
        <div className='m-2 p-2' >
          <MenuPopupState/>
        </div>
        <div className='m-2' >
        <SearchInput search={search} setSearch={setSearch}/>
        </div>
         
      </div>   
      <TableComponent search={search}/>
    </div>
  
  );
};

export default Home;