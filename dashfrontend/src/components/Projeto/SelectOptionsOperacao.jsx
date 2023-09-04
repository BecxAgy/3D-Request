import React from 'react'
import { Select, Option } from "@material-tailwind/react";

function SelectOptionsOperacao() {
  return (
    <Select label="Operação">
        <Option key={1} value='00000'>00000</Option>
        <Option key={2} value='10001'>10001</Option>
        <Option key={3} value='10006'>10006</Option>
        <Option key={4} value='10065'>10065</Option>
        <Option key={5} value='10067'>10067</Option>
        <Option key={6} value='10078'>10078</Option>
        <Option key={7} value='10098'>10098</Option>
        <Option key={8} value='10100'>10100</Option>
        
    </Select>

  )
}

export default SelectOptionsOperacao