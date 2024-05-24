import React from 'react'
import '../assets/css/login.css'
import Layoutlogin from './Layoutlogin'

const Verifikasi = () => {
  return (
    <Layoutlogin>
        <div className="page">
      <div className="cover">
            <h3>LUPA SANDI</h3>
            <input type="text" placeholder="Masukan Kode Verifikasi" />
            <div className="login-btn"><a href="Katasandibaru">Verifikasi</a></div>
            <p className="textdaftar">Belum punya akun? <a href="Daftar"><b>Daftar</b></a></p> 

        </div>
        </div>
    </Layoutlogin>
  )
}

export default Verifikasi