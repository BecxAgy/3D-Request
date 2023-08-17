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
import { useHistory, useNavigate } from 'react-router-dom';



function Form({solicitacao, mode}) {
  const {register, handleSubmit, formState : {errors}} = useForm();
  const dispatch = useDispatch();
  const {projetos} = useSelector((state) => state.projeto);
  const {statuses} = useSelector((state) => state.status);
  const {softwares} = useSelector((state) => state.software);
  const {user, loading} = useSelector((state) => state.user);
  const{
    solicitacoes,
    loading : loadingSolicitacao,
    error: errorSolicitacao,
    message
  } = useSelector((state) => state.solicitacao);
  const navigate = useNavigate();
 
  //get data for select labels
  useEffect(() => {
    dispatch(getAllStatus());
    dispatch(getAllProjetos());
    dispatch(getAllSoftwares());
  }, [dispatch]);

  //post solicitacao
  const onSubmit = (data) =>
  {
      data.statusId = parseInt(data.statusId)
      data.softwareId = parseInt(data.softwareId)
      
      
      if(mode === 'edit'){
        data.executorId = JSON.parse(localStorage.getItem("user")).id;
        data.solicitanteId = solicitacao.solicitanteId;
        console.log(data, solicitacao.id);
        
        dispatch(updateSolicitacao(data, solicitacao.id));

      }else{
        data.solicitanteId = JSON.parse(localStorage.getItem("user")).id;
       //dispatch(createSolicitacao(data));
      }
       

  }


  return (
    <form className=" mt-8 mb-2" >

      <div className="grid md:grid-cols-1 gap-6 "> 
            <Input color='orange' size="lg" label="SPEC" defaultValue={solicitacao?.especificacao} {...register("especificacao")} />
            <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                <Input color='orange' size="lg" label="Componente" defaultValue={solicitacao?.componente} {...register("componente")} /> 
                <ButtonFilter label={"Status"} dataOptions={statuses}  register={register("statusId") } defaultValue={solicitacao?.statusId} />
            </div>

           <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                <Textarea color='orange' label='Pendência' {...register("pendencia")} defaultValue={solicitacao?.pendencia}></Textarea>

                <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                  <ButtonFilter  label={"PJ"} dataOptions={projetos} register={register("projetoId")} defaultValue={solicitacao?.projetoId} />
                  <ButtonFilter label={"Software"} dataOptions={softwares} register={register("softwareId")} defaultValue={solicitacao?.softwareId} />
                </div>          
           </div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                <Input color='orange' size="lg" label="DN-01" {...register("dn_01")} defaultValue={solicitacao?.dn_01}/>
                <Input color='orange' size="lg" label="DN-02" {...register("dn_02")} defaultValue={solicitacao?.dn_02}/>
                <Input color='orange'  size="lg" label="DN-03" {...register("dn_03")}  defaultValue={solicitacao?.dn_03}/> 
            </div>
           <Textarea color='orange' label='Observação' {...register("observacao")} defaultValue={solicitacao?.observacao}></Textarea>       
        
    </div>
    
    <Button className='w-96 mt-6' size='lg' color='orange' onClick={()=> handleSubmit(onSubmit)().then(navigate("/"))}>{loadingSolicitacao  ? 'Aguarde...' : 'CADASTRAR'}</Button>
    
    
  </form>
  )
}

export default Form