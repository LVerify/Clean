import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


export default function Home() {
    const [users,setUsers] = useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }



  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table shadow">
  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Логин</th>
      <th scope="col">Имя</th>
      <th scope="col">Email</th>
      
    </tr>
  </thead>
  <tbody>
    

    {
        users.map((user, index)=>(
        <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-outline-primary mx-2" to={`/viewUser/${user.id}`}>Просмотреть</Link>
                <Link className="btn btn-outline-primary mx-2" to={`/editUser/${user.id}`}>Изменить</Link>
                <button className="btn btn-danger mx-2" 
                onClick={()=>deleteUser(user.id)}>Удалить</button>
                </td>
        </tr>
        ))
    }
   
  </tbody>
</table>

        </div>
     </div>
  )
}
