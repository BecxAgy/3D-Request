import React from 'react'

function Message({msg, code}) {

    
  return (
    <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4  mt-5" role="alert">
    <p class="font-bold">Erro!</p>
    <p>{msg}</p>
    </div>  
)
}

export default Message