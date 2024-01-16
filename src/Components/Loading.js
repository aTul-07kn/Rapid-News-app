import React from 'react'
import loading from './loading.gif'
const Loading=()=>{
  return (
    <div className='text-center'>
      <img className="my-3" style={{height: "40 px", width:"40px"}} src={loading} alt="" />
    </div>
  )
}

export default Loading
