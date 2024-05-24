import React from 'react'
import '../assets/css/login.css'
import Layoutlogin from './Layoutlogin'

const Katasandibaru = () => {
  return (
    <Layoutlogin>
        <div className="page">
      <div className="cover">
            <h3>LUPA SANDI</h3>
            <input type="text" placeholder="Kata Sandi Baru" />
            <input type="text" placeholder="Konfirmasi Kata Sandi Baru" />
     
            <div className="login-btn"><a href="Login">Ubah Kata Sandi</a></div>
            <p className="textdaftar">Belum punya akun? <a href="Daftar"><b>Daftar</b></a></p> 
            
        </div>
        </div>
    </Layoutlogin>
  )
}

export default Katasandibaru