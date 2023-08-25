import React from 'react'
import { useParams } from 'react-router'

function SolicitacaoDetails() {
    const {id} = useParams();

  return (
    <div><p>{id}</p></div>
  )
}

export default SolicitacaoDetails