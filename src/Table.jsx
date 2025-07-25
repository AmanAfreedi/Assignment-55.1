import React,{useState} from 'react'
import TableRow from './TableRow'
const Table = () => {
    const [num,UpdateNum] = useState(2);
    function nextTable(){
        UpdateNum(num +1);
    }
  return (

    <div>
        <button onClick={nextTable} className='bg-blue-500 rounded-md p-2 ml-7'>Next</button>
      <TableRow number={num} index={1}></TableRow>
      <TableRow number={num} index={2}></TableRow>
      <TableRow number={num} index={3}></TableRow>
      <TableRow number={num} index={4}></TableRow>
      
    </div>
  )
}

export default Table
