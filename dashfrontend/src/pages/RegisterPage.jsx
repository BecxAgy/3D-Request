import React from 'react'
import Header from "../components/Auth/Header"
import Register from '../components/Register'
import {  useSelector } from 'react-redux';
import AlertsMessage from '../components/AlertsMessage';

function RegisterPage() {
  const { error} = useSelector((state) => state.auth)
  return (
    <div className="py-5">
       <div className="flex justify-end">
        {error && <AlertsMessage message={error} type="error" />}
      </div>
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