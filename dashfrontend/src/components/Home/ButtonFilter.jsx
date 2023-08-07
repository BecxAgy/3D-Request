import React from 'react'
import { Select, Option } from "@material-tailwind/react";

function ButtonFilter({label, dataOptions}) {
 
  return (
    
      <Select color='orange' label={label}>
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    
  );

  
}

export default ButtonFilter