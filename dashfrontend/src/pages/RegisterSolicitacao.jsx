import React from 'react'
import { HeaderMain } from '../components'
import Form from '../components/Solicitacoes/Form';
import { useSelector } from 'react-redux';
import AlertsMessage from '../components/AlertsMessage';

function RegisterSolicitacao() {
  const {error} = useSelector((state) => state.solicitacao)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded-3xl">
       {error && <AlertsMessage message={error} type="error"/>}
      <HeaderMain category={"Solicitações"}title={"Cadastro"}></HeaderMain>
        <Form/>

    </div>
  )
}

export default RegisterSolicitacao