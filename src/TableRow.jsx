import React from 'react'

const TableRow = ( {number , index}) => {
  return (
    <div>
      <p className='m-3'>{number} x {index} = {number*index}</p>
    </div>
  )
}

export default TableRow
