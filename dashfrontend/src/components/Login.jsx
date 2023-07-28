import { useEffect, useState } from 'react';
import Input from "./Login/Input";
import {login, reset} from "../slices/authSlice"
import { useDispatch, useSelector } from 'react-redux';
import ButtonLogin from './Login/ButtonLogin';
import { Button } from '@mui/material';
import Message from './Message';





export default function Login(){
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit= (e) => {
    
      e.preventDefault();
        const user= {
            email,
            password
        }
      

        dispatch(login(user));

  }
  
  useEffect(() => {
    dispatch(reset());
    }, dispatch)


    return(
        <div className="flex items-center justify-center ">

            <form onSubmit= {(e) => handleSubmit(e)} className="px-5 pb-8 mb-3 w-full md:w-1/2 lg:w-1/3">
                
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
                        placeholder={"Password"}
                />
                    
                    {!loading && <ButtonLogin text={'Entrar'}/>}
                    {loading && <ButtonLogin text={'Aguarde...'}/>}
                    {error && <Message msg={error} />}
                

        

            </form>
        </div>
    )
}