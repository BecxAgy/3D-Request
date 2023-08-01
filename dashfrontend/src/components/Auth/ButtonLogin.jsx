import React from 'react'

function ButtonLogin({text}) {
  return (
   
    <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
        text-sm font-medium rounded-md text-white bg-orange-400
        hover:bg-orange-500 focus:outline-none focus:ring-2 f
        ocus:ring-offset-2 focus:ring-orange-500 mt-10">

        {text}
    </button>
  )
}

export default ButtonLogin