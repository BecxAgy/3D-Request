import React from 'react'
import { HeaderMain } from '../components'
import Form from '../components/Solicitacoes/Form';

function RegisterSolicitacao() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded-3xl">
      <HeaderMain category={"Solicitações"}title={"Cadastro"}></HeaderMain>
        <Form/>

    </div>
  )
}

export default RegisterSolicitacao