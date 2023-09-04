import { Input, Textarea } from '@material-tailwind/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import ErrorMessage from '../Solicitacoes/ErrorMessage';
import SelectOptionsOperacao from './SelectOptionsOperacao';
import { useSelector } from 'react-redux';

function FormProjeto() {
    const {register, handleSubmit, formState : {errors}} = useForm();
    const {loading} = useSelector((state) => state.projeto)
  return (
    <div className="grid md:grid-cols-1 gap-4 w-1/2"> 
    <Input name='projeto' color='orange' label='PJ' {...register("especificacao",
            {
              required: "Insira o nome do projeto",
              
            } )}/>
    <ErrorMessage error={errors.projeto?.message}/>

    <Textarea name='descricao' color='orange' label='Descrição' {...register("especificacao",
            {
              required: "O campo descrição é obrigatório",
              
            } )}/>
    <ErrorMessage error={errors.descricao?.message}/>
    <SelectOptionsOperacao register={register("operacaoId")}/>
    </div>
  )
}

export default FormProjeto