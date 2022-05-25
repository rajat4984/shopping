import React from 'react'
import {BiSad} from "react-icons/bi"

function NoShoes() {
  return (
    <div className='no-shoes-container'>
        <h1 className='no-shoes-heading'>
            No Shoes here &nbsp; <BiSad className='sad-icon'/>
        </h1>
    </div>
  )
}

export default NoShoes