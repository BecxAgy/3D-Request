import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import DetailList from '../../components/Solicitacoes/DetailList';
import { useDispatch, useSelector } from 'react-redux';
import { getSolicitacaoById } from '../../slices/solicitacaoSlice';
import { CircularProgress } from '@mui/material';

function SolicitacaoDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {solicitacao, loading, error, message} = useSelector((state) =>  state.solicitacao);

    //load solicitacao by id
    useEffect(()=> {
      dispatch(getSolicitacaoById(id));
    }, [dispatch]);

   

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
       {loading && solicitacao ? (
      <div className='flex justify-center p-5'>
           <CircularProgress /> 
      </div>
     
    ) : (
    <DetailList solicitacao={solicitacao}></DetailList>
    )}
    </div>
  )
}

export default SolicitacaoDetails