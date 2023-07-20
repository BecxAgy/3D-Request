import { useState } from 'react';
import { loginFields } from "../data/dummy";
import Input from "./Login/Input";
import FormAction from "../components/Login/FormAction"





export default function Login(){

    const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');
    const [loginState,setLoginState]=useState(fieldsState);

  const handleChange=(e)=>{
      setLoginState({...loginState,[e.target.id]:e.target.value})
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      authenticateUser();
  }

  //Handle Login API Integration here
  const authenticateUser = () =>{
   
    const endpoint=`https://kempetro-modelviewer.onrender.com/user`;
    fetch(endpoint,
        {
        method:'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(loginFields)
        }).then(response=>response.json())
        .then(data=>{
           console.log("logou")
        })
        .catch(error=>console.log(error))
  }

    return(
        <div className="flex items-center justify-center ">

            <form className="px-5 pb-8 mb-3 w-full md:w-1/2 lg:w-1/3">
            
                {
                    fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                        />
                    
                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Login"/>

        

        </form>
        </div>
    )
}