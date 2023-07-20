import { useState } from 'react';
import { loginFields } from "../data/dummy";
import Input from "./Login/Input";
import FormAction from "../components/Login/FormAction"





export default function Login(){


    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
 

  const handleSubmit= (e) => {
    
      e.preventDefault();
        const user= {
            email,
            password
        }
    
        console.log(user);

      
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
                    
                    
                
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                text-sm font-medium rounded-md text-white bg-orange-400
                 hover:bg-orange-500 focus:outline-none focus:ring-2 f
                 ocus:ring-offset-2 focus:ring-orange-500 mt-10">

                Login
                </button>

        

            </form>
        </div>
    )
}