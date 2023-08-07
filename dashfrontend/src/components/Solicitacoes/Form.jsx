import React from 'react'
import {
    Input,
    Checkbox,
    Typography,
    Textarea, Button
  } from "@material-tailwind/react";
import ButtonFilter from '../Home/ButtonFilter'
import { Box } from '@mui/material';


function Form() {
  return (
    <form className=" mt-8 mb-2">

    <div className="grid md:grid-cols-1 gap-6 ">
        
            <Input color='orange' size="lg" label="SPEC" />
            <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                <Input color='orange' size="lg" label="Componente" />
                <ButtonFilter label={"Status"}/> 
            </div>
            

           <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                <Textarea color='orange' label='Pendência'></Textarea>

                <div className="grid md:grid-rows-2 sm:grid-rows-1 gap-6">
                    <ButtonFilter label={"PJ"}/> 
                    <ButtonFilter label={"Software"}/> 
                </div>
                
           </div>

              <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                <Input color='orange' size="lg" label="DN-01" />
                <Input color='orange' size="lg" label="DN-02" />
                <Input color='orange'  size="lg" label="DN-03" /> 
            </div>
           <Textarea color='orange' label='Observação'></Textarea>       
        

        
           
           
           
        
        
    </div>
    
    <Button className='w-96 mt-6' size='lg' color='orange'>CADASTRAR</Button>
    
    
  </form>
  )
}

export default Form