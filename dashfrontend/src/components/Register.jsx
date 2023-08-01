import { useEffect, useState } from 'react';
import Input from "./Auth/Input";
import {register, reset} from "../slices/authSlice"
import { useDispatch, useSelector } from 'react-redux';
import ButtonLogin from './Auth/ButtonLogin';

import Message from './Message';





export default function Register(){
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit= (e) => {
    
      e.preventDefault();
        const user= {
            name,
            email,
            password,
           
        }
      

        dispatch(register(user));

  }
  
  useEffect(() => {
    dispatch(reset());
    }, dispatch)


    return(
        <div className="flex items-center justify-center ">

            <form onSubmit= {(e) => handleSubmit(e)} className="px-5 pb-8 mb-3 w-full md:w-1/2 lg:w-1/3">
                        <Input
                                key={1}
                                handleChange={(e)=>setName(e.target.value)}
                                value={name || ''}
                                labelText={"Nome"}
                                labelFor={"Nome"}
                                id={"nome"}
                                name={"nome"}
                                type={"nome"}
                                isRequired={true}
                                placeholder={"Nome"}
                        />

                        <Input
                                key={1}
                                handleChange={(e)=>setEmail(e.target.value)}
                                value={email || ''}
                                labelText={"Email"}
                                labelFor={"Email"}
                                id={"email-adress"}
                                name={"email"}
                                type={"email"}
                                isRequired={true}
                                placeholder={"Email"}
                        />
                        
                        <Input
                        key={2}
                        handleChange={(e)=>{setPassword(e.target.value)}}
                        value={password|| ''}
                        labelText={"Password"}
                        labelFor={"Password"}
                        id={"password"}
                        name={"password"}
                        type={"password"}
                        isRequired={true}
                        placeholder={"Senha"}
                        />

                        <Input
                        key={2}
                        handleChange={(e)=>{setConfirmPassword(e.target.value)}}
                        value={confirmPassword|| ''}
                        labelText={"Password"}
                        labelFor={"Password"}
                        id={"password"}
                        name={"password"}
                        type={"password"}
                        isRequired={true}
                        placeholder={"Confirme sua senha"}
                        />
                       
                    
                    {!loading && <ButtonLogin text={'Registrar'}/>}
                    {loading && <ButtonLogin text={'Aguarde...'}/>}
                    {error && <Message msg={error} />}
            </form>
        </div>
    )
}
