import React from 'react'
import Layout from './Layout'
import '../assets/css/login.css'
import Layoutlogin from './Layoutlogin'

const Lupasandi = () => {
  return (
    <Layoutlogin>
        <div className="page">
      <div className="cover">
            <h3>LUPA SANDI</h3>
            <input type="text" placeholder="Email" />
            <div className="login-btn"><a href="Verifikasi">Kirim Kode Verifikasi</a></div>
            <p className="textdaftar">Belum punya akun? <a href="Daftar"><b>Daftar</b></a></p> 

        </div>
        </div>
    </Layoutlogin>
  )
}

export default Lupasandi