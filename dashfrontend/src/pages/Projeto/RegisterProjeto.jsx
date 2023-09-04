import React from 'react'
import { HeaderMain } from '../../components'
import FormProjeto from '../../components/Projeto/FormProjeto'

function RegisterProjeto() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded-3xl">
        <HeaderMain category={"Projetos"}title={"Cadastro"}/>
        <FormProjeto/>

  </div>
  )
}

export default RegisterProjeto