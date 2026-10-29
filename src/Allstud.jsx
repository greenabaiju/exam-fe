import React, { useEffect, useState } from 'react'
import { deleteStud, getStud } from './services/allApi'
import { toast } from 'react-toastify'
import { Link, Links } from 'react-router-dom'
deleteStud

const Allstud = () => {
    const[stud,setStud]=useState([])
    useEffect(()=>{
        getStudData()
    },[])
    const getStudData=async()=>{
        try {
            const response= await getStud()
            setStud(response.data)
        } catch (error) {
           console.log(error)
            toast("Something went wrong on delete")  
        }
    }
    const onBtnDelete=async(id)=>{
        try {
             const response= await deleteStud(id)
         if(response.status==200){
            toast.success("Deleted Successfully")
            getStudData()
         }
        } catch (error) {
            console.log(error)
            toast("Something went wrong on delete")
        }

    }
  return (
    <div>
      <table border={1}>
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Delete</th>
            <th>Edit</th>
        </thead>
        {stud.map((eachstud)=>(
            <tbody key={eachstud?.id}>
            <tr>
            <td>{eachstud?.studname}</td>
            <td>{eachstud?.email}</td>
            <td>{eachstud?.course}</td>
            <td>{eachstud?.phone}</td>
            <td><button onClick={()=>onBtnDelete(eachstud?.id)}>delete</button></td>
           <td><Link to={`/editstud/${eachstud?.id}`}>edit</Link></td>
           
        </tr>
        </tbody>
        ))}
      </table>
    </div>
  )
}

export default Allstud
