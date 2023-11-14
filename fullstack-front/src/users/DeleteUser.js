import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate=useNavigate();

    const{id}=useParams()

    const [user,setUser]=useState({
        name:"",
        email:"",
        username:"",
        password:""
    })

    const{name,email,username,password}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadUser()
    }, [])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    }

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Изменение данных аккаунта</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor="Name" className='form-label'>
                    ФИО
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Введите ваше полное имя'
                name='name'
                value={name}
                onChange={(e)=>onInputChange(e)}
               ></input>
            </div>

            <div className='mb-3'>
                <label htmlFor="Email" className='form-label'>
                    Введите свой email
                </label>
                <input
                type={"text"}
                className='form-control'
                name='email'
                value={email}
                onChange={(e)=>onInputChange(e)}

               ></input>
            </div>

            <div className='mb-3'>
                <label htmlFor="Username" className='form-label'>
                    Логин
                </label>
                <input
                type={"text"}
                className='form-control'
                placeholder='Уникальный логин'
                name='username'
                value={username}
                onChange={(e)=>onInputChange(e)}

               ></input>
            </div>

            <div className='mb-3'>
                <label htmlFor="Password" className='form-label'>
                    Пароль
                </label>
                <input
                type={"text"}
                className='form-control'
                name='password'
                value={password}
                onChange={(e)=>onInputChange(e)}

               ></input>
            </div>
            <button type='submit' className='btn btn-outline-primary'>Изменить</button>
            <Link className='btn btn-danger mx-2' to="/">Отмена</Link>
            </form>
            </div>

        </div>
    </div>
  )
}
