import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GetData = () => {
    const[values,setValues]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000')
        .then(res=>setValues(res.data))
        .catch(err=>console.log(err))
    })
   
    
  return (
    <div style={{}}>
      this is front
     <table style={{'border':'1px solid','marginLeft':'auto','marginRight':'auto','width':'50%'}}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    {
                        values.map((d,i)=>{
                            return(
                                <div style={{'border':'1px solid'}}>
                                <>{d.name}</>
                                
                                </div>
                                
                            )
                        })
                    }
                </td>
                <td>
                    {
                        values.map((d,i)=>{
                            return(
                                <div style={{'border':'1px solid'}}>
                                
                                <>{d.email}</>
                                </div>
                                
                            )
                        })
                    }
                </td>
            </tr>
        </tbody>
     </table>
    </div>
  )
}

export default GetData
