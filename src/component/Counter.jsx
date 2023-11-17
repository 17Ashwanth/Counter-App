import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //hook to dispatch a function in action
  const dispatch = useDispatch()

  //state to hold the input value
  const [range,setRange]= useState("")
  console.log(range);

  //component can access the state by using useselector hook
  const count = useSelector((state)=>state.counter.value)
  return (
    <>
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-light p-5 rounded'>
      <h1 className='text-primary' >Counter Application</h1>
    <div className='bg-light justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'> 
 <h1 className='d-flex justify-content-center align-items-center'>{count}</h1>
  </div>
  <div className='d-flex justify-content-between align-items-center mt-4'>
    
    <button onClick={()=>dispatch(increment(Number(range)))} className='bg-success text-white'style={{width:"200",height:'50px',borderRadius:"10px"}}>INCREMENT</button>
    <button onClick={()=>dispatch(decrement(Number(range)))} className='bg-warning text-white'style={{width:"200",height:'50px',borderRadius:"10px"}}>DECREMENT</button>
    <button onClick={()=>dispatch(reset())} className='bg-danger text-white'style={{width:"200",height:'50px',borderRadius:"10px"}}>RESET</button>

  </div>
  <div className='w-100 mt-5'>
        <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' placeholder='Enter The Range' style={{borderColor:'blue'}} />
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Counter