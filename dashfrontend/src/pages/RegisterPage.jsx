import React from 'react'
import Header from "../components/Auth/Header"
import Register from '../components/Register'


function RegisterPage() {
  return (
    <div className="py-5">
    <Header
             heading="Registre-se para entrar"
             paragraph="Já possui uma conta?"
             linkName="Entrar."
             linkUrl="/login"
             />
            
  <Register/>
             
         
 </div>
  )
}

export default RegisterPage