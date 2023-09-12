import { Input, Textarea, Button } from '@material-tailwind/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import ErrorMessage from '../Solicitacoes/ErrorMessage';
import SelectOptionsOperacao from './SelectOptionsOperacao';
import { useDispatch, useSelector } from 'react-redux';
import { createProjeto } from '../../slices/projetoSlice';
import { CircularProgress } from '@mui/material';


function FormProjeto() {
    const {register, handleSubmit, formState : {errors}} = useForm();
    const {loading} = useSelector((state) => state.projeto);
    const dispatch = useDispatch();

    const onSubmit = (data)=> {
      console.log("🚀 ~ file: FormProjeto.jsx:17 ~ onSubmit ~ data:", data)
      
      dispatch(createProjeto(data));
    }
  return (
    <form className=" mt-8 mb-2"  > 
        <div className="grid md:grid-cols-1 gap-4 w-1/2">
          <Input name='pj' color='orange' label='PJ' {...register("pj",
                  {
                    required: "Insira o nome do projeto",
                    
                  } )}/>
          <ErrorMessage error={errors.pj?.message}/>

          <Textarea name='descricao' color='orange' label='Descrição' {...register("descricao",
                  {
                    required: "O campo descrição é obrigatório",
                    
                  } )}/>
          <ErrorMessage error={errors.descricao?.message}/>
          <SelectOptionsOperacao register={register("OperacaoId"
                )}/>
          
        
          {!loading && <Button className='bg-orange-500 w-96 mt-6' size='lg'  type='submit' onClick={()=>handleSubmit(onSubmit)()}> Cadastrar </Button>}
          
          
          {loading && <CircularProgress/> }
      </div>
     
    </form>

  )
}

export default FormProjeto