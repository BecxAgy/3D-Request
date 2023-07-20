import React, {useState} from 'react'
import Header from "../components/Login/Header"
import Login from '../components/Login'

function LoginPage() {
  
  return (
    <div>
       <Header
                heading="Entre em sua conta"
                paragraph="Não possui  ainda? "
                linkName="Contate-nos"
                linkUrl="mailto:email@provedor.com.br?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente"
                />
               
                <Login/>
                
            
    </div>
  )
}

export default LoginPage