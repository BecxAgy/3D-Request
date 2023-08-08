import React from 'react';
import { Select, Option } from "@material-tailwind/react";

function ButtonFilter({ label, dataOptions=[]}) {


  return (   
    <Select color='orange' label={label}>
    {dataOptions && dataOptions.map(option => (
      label === "PJ" ? <Option key={option.pj} value={option.pj}>{option.pj}</Option>
      :
      <Option key={option.id} value={label== 'Status' ? option.descricao : option.nome}>
        {label== 'Status' ? option.descricao : option.nome}
      </Option>
    ))}
  </Select>
  );
}

export default ButtonFilter;
