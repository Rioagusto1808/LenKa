import {useState} from 'react';
import '../../assets/css/login.css'
import Layoutlogin from '../Layoutlogin'
import './LoginValidation';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

  const[values, setValues] = useState({
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
  if(errors.email === "" && errors.password ==="") {
    axios.post('http://localhost:8081/login', values)
    .then(res =>{
    if(res.data === "success") {
        navigate('/profile');
    }else{
      <div className='pop-up'>
        Data tidak Cocok
        </div>
    }
  })
    .catch(err => console.log(err));
}
}

  return (
    <Layoutlogin>
        <div className="page">
      <div className="cover ml-[-200px] ">
        <form action="" onSubmit={handleSubmit}>

            <h3 className='justify-center ml-[100px]'>MASUK</h3>

            <input type="email" placeholder="Email" name="email" onChange={handleInput} className='form-control ml-[40px] rounded-lg'/>
            {errors.email && <span className='text-red-600 ml-[40px]'>{errors.email}</span>}

            <input type="password" placeholder="Kata Sandi" name='password' onChange={handleInput} className='ml-[40px] rounded-lg mt-2'/>
            {errors.password && <span className='ml-[40px] text-red-600'>{errors.password}</span>}

            <p className="textlupasandi ml-[-50px] mt-2"><a href="Lupasandi">Lupa Kata Sandi?</a></p> 

            <button type='submit' >

            <div className="login-btn submit w-[290px] ml-[40px]"><a href="/Profile">Masuk</a></div></button>
            
            <p className="textdaftar ml-[40px]">Belum punya akun? <a href="Daftar"><b>Daftar</b></a></p> 
            <p className="text ml-[40px]">Atau</p>

            <div className="alt-login ml-[-40px]">
                <div className="facebook"></div>
                <div className="google ml-[-150px]">
                </div>
            </div> 
            </form>
        </div>
        </div>
    </Layoutlogin>
  )
}


export default Login;