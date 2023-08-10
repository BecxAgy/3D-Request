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
import { createSolicitacao } from '../../slices/solicitacaoSlice';


function Form() {
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

 
  //get data for select labels
  useEffect(() => {
    dispatch(getAllStatus());
    dispatch(getAllProjetos());
    dispatch(getAllSoftwares());
  }, [dispatch]);

  //post solicitacao
  const onSubmit = (e) =>
  {
      e.statusId = parseInt(e.statusId)
      e.softwareId = parseInt(e.softwareId)
      e.solicitanteId = JSON.parse(localStorage.getItem("user")).id;

      console.log(e);
      const data = e;
      dispatch(createSolicitacao(data))

  }


  return (
    <form className=" mt-8 mb-2" >

      <div className="grid md:grid-cols-1 gap-6 "> 
            <Input color='orange' size="lg" label="SPEC"  />
            <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                <Input color='orange' size="lg" label="Componente" {...register("componente")} required minLength={5}/> 
                <ButtonFilter label={"Status"} dataOptions={statuses} register={register("statusId") } required/>
            </div>

           <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                <Textarea color='orange' label='Pendência' {...register("pendencia")}></Textarea>

                <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                  <ButtonFilter  label={"PJ"} dataOptions={projetos} register={register("projetoId")}/>
                  <ButtonFilter label={"Software"} dataOptions={softwares} register={register("softwareId")} />
                </div>          
           </div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                <Input color='orange' size="lg" label="DN-01" {...register("dn_01")}/>
                <Input color='orange' size="lg" label="DN-02" {...register("dn_02")} />
                <Input color='orange'  size="lg" label="DN-03" {...register("dn_03")} /> 
            </div>
           <Textarea color='orange' label='Observação' {...register("observacao")}></Textarea>       
        
    </div>
    
    <Button className='w-96 mt-6' size='lg' color='orange' onClick={()=> handleSubmit(onSubmit)()}>CADASTRAR</Button>
    
    
  </form>
  )
}

export default Form