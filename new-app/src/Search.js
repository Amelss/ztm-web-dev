import React from 'react'

export default function Search({ searchChange}) {
  return (
      <div>
          <div> 
               <input type="search" placeholder='Search for a Robot' className='search' onChange={searchChange}/>
          </div>
         
         
          
    </div>
  )
}
