import axios from 'axios'
import React, { useState,useEffect } from 'react'

const PostData = () => {
    const[data,setData]=useState({
        name:'',
        email:''
    });
    const{name,email}=data
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/student',data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        Name:<input type='text' name='name' value={name} onChange={changeHandler}/><br/>
        Email:<input type='text' name='email' value={email} onChange={changeHandler}/><br/>
        <input type='submit' value='send data'/>
      </form>
    </div>
  )
}

export default PostData
