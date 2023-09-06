import React from 'react'
import {
    Input,
    Textarea, Button
  } from "@material-tailwind/react";
import ButtonFilter from '../Home/ButtonFilter'
import {useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getAllProjetos } from '../../slices/projetoSlice';
import { getAllStatus } from '../../slices/statusSlice';
import { getAllSoftwares } from '../../slices/softwareSlice';
import {useForm} from 'react-hook-form';
import { createSolicitacao, updateSolicitacao } from '../../slices/solicitacaoSlice';
import {useNavigate}  from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi';
import ErrorMessage from './ErrorMessage';



function Form({solicitacao, mode, setModal, open}) {
  const {register, handleSubmit, formState : {errors}} = useForm();
  const dispatch = useDispatch();
  const {projetos} = useSelector((state) => state.projeto);
  const {statuses} = useSelector((state) => state.status);
  const {softwares} = useSelector((state) => state.software);
  const{
    solicitacoes,
    loading ,
  } = useSelector((state) => state.solicitacao);
  const navigate = useNavigate();

  function redirect(){
    console.log("entro")
    if(mode === 'edit'){
      setModal(!open);
    }else{
      navigate('/');
    }
  }

  //post and edit solicitacao
  const onSubmit = (data) =>
  {
      
      data.softwareId = parseInt(data.softwareId)
      
      if (mode === 'edit') {
        data.statusId = parseInt(data.statusId)
        data.executorId = JSON.parse(localStorage.getItem("user")).id;
        data.solicitanteId = solicitacao.solicitanteId;
        const updatedData = {
            id: solicitacao.id, 
            solicitacao: data, // Os dados atualizados da solicitação
        };
    
        dispatch(updateSolicitacao(updatedData))
    }else{
        data.solicitanteId = JSON.parse(localStorage.getItem("user")).id;
       dispatch(createSolicitacao(data));
      }
       
      redirect()
  }
  
  
//get data for select labels
useEffect(() => {
  dispatch(getAllStatus());
  dispatch(getAllProjetos());
  dispatch(getAllSoftwares());
}, [dispatch]);

  return (
    <form className=" mt-8 mb-2" >
      
      <div className="grid md:grid-cols-1 gap-4 "> 
            <Input name='especificacao' color='orange' label="SPEC" defaultValue={solicitacao?.especificacao} {...register("especificacao",
            {
              required: "O campo SPEC é obrigatório",
              
            } )} /> 
            <ErrorMessage error={errors.especificacao?.message}/>

            <div className={`grid  sm:grid-rows-1 gap-4 ${mode ==='edit' ? "md:grid-rows-2"  : "md:grid-rows-1"}`}>
                <Input  name='componente' color='orange' label="Componente" defaultValue={solicitacao?.componente} {...register("componente",
                {
                  required: "O campo componente é obrigatório",
                  
                } ) } /> 
                <ErrorMessage error={errors.componente?.message}/>
                {
                  (mode === 'edit') && <ButtonFilter label={"Status"} dataOptions={statuses}  register={register("statusId") } defaultValue={(mode === 'edit') ? solicitacao?.statusId : 4} required /> 
                }
                
            </div>

           <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <Textarea color='orange' label='Pendência' {...register("pendencia")} defaultValue={solicitacao?.pendencia}></Textarea>

                <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                  <ButtonFilter  label={"PJ"} dataOptions={projetos} register={register("projetoId")} defaultValue={solicitacao?.pj} />
                  <ButtonFilter label={"Software"} dataOptions={softwares} register={register("softwareId")} defaultValue={solicitacao?.softwareId} />
                </div>          
           </div>

           
              <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                  <div className={`grid ${errors?.dn_01 ? "md:grid-rows-2"  : "md:grid-rows-1"}`}>
                    <Input name="dn_01" color='orange' size="lg" label="DN-01" {...register("dn_01",
                    {
                      required: "O campo DN-01 é obrigatório",
                      
                    })} defaultValue={solicitacao?.dn_01}/>
                    <ErrorMessage error={errors.dn_01?.message}/>
                  </div>
                <Input color='orange' size="lg" label="DN-02" {...register("dn_02")} defaultValue={solicitacao?.dn_02}/>
                <Input color='orange'  size="lg" label="DN-03" {...register("dn_03")}  defaultValue={solicitacao?.dn_03}/> 
            </div>
           <Textarea name='observacao' color='orange' label='Observação' {...register("observacao", {
              message: "O campo observação pode ter no máximo 255 caracteres",
              maxLength: 255
                      
            })} defaultValue={solicitacao?.observacao}></Textarea>       
            <ErrorMessage error={errors.observacao?.message}/>
    </div>
    {!loading && <Button className='bg-orange-600 mr-2 mt-6' size='lg' onClick={()=> redirect()}><FiArrowLeft/> </Button>}
    {!loading && <Button className='bg-orange-600 w-96 mt-6' size='lg' color='orange' onClick={()=> handleSubmit(onSubmit)()}> Cadastrar </Button>}
    
    {loading && <CircularProgress/> }
    
    
  </form>
  )
}

export default Form