import { Link } from 'react-router-dom'
import React from 'react'
import {FaChevronDown} from 'react-icons/fa'
import { Select, Option } from "@material-tailwind/react";
function ButtonAdd() {
  return (
    <div className="w-32">
      <Select  label="Adicionar">
      <Link to='/form-solicitacao'><Option>Solicitacao</Option></Link>
        <Link to='/form-projeto'><Option>Projeto</Option></Link>
       
      </Select>
    </div>
  )
}

export default ButtonAdd