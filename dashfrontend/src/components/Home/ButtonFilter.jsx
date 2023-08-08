import React from 'react';
import { Select, Option } from "@material-tailwind/react";

function ButtonFilter({ label, dataOptions = [] }) {
  return (   
    <Select color='orange' label={label}>
      {dataOptions.map(option => (
        <Option
          key={option.id}
          value={
            label === 'Status' ? option.descricao : 
            label === 'PJ' ? option.pj : option.nome
          }
        >
          {label === 'Status'
            ? option.descricao
            : label === 'PJ'
            ? option.pj
            : option.nome}
        </Option>
      ))}
    </Select>
  );
}

export default ButtonFilter;
