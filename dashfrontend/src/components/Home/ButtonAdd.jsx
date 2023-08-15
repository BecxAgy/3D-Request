import { Link } from 'react-router-dom'
import React from 'react'

function ButtonAdd() {
  return (
    <Link to="/form-solicitacao">
        <button type="button"  className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-600 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
        Adicionar Solicitação
      </button>
    </Link>
    
  )
}

export default ButtonAdd