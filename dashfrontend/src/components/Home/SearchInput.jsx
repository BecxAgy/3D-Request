import { IconButton } from '@material-tailwind/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchInput() {
  return (

 
 
           
            <div class="relative">
               
                <input  id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-100 rounded-xl bg-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                <div className="absolute inset-y-0 right-0 flex items-center pl-3 m-4 pointer-events-none">
                   
                    <FaSearch color='orange'/>
                   
                </div>
            </div>
        

   
  )
}

export default SearchInput