
// import React from 'react'
import '../../assets/css/login.css'
import Layoutlogin from '../Layoutlogin'
import Validation from './DaftarValidation';
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Daftar() {
  const[values, setValues] = useState({
    name:'',
    email:'',
    password:''
})
const navigate = useNavigate();
const [errors, setErrors] = useState({})

const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password ==="") {
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
          navigate('/');
      })
      .catch(err => console.log(err));
  }
}


  return (
    <Layoutlogin>
      <form action="" onSubmit={handleSubmit}>
        <div className="page ">
      <div className="cover">
            <h3>DAFTAR</h3>
            <input type="text" name='name' placeholder="Nama Pengguna" onChange={handleInput} />
            {errors.name && <span className='text-red-600 ml-[-90px] mt-[-25px] mb-2'>{errors.name}</span>}
            <input className='mt-[-30px]' type="email" name='email' placeholder="Email" onChange={handleInput}/>
            {errors.email && <span className='text-red-600 ml-[-90px] mt-[-25px] mb-2'>{errors.email}</span>}
            <input className='mt-[-30px]' type="password" placeholder="Kata Sandi" name='password' onChange={handleInput}/>
            {errors.password && <span className='text-red-600 ml-[-60px] mt-[-25px] mb-2'>{errors.password}</span>}
            <div className="mt-[-30px] login-btn"><button onClick={handleSubmit} type='submit'><a href="Login">Daftar</a></button></div>
            <p className="textdaftar">Sudah punya akun? <a href="Login"><b>Masuk</b></a></p> 

        </div>
        </div>
        </form>
    </Layoutlogin>
  )
}


export default Daftar;