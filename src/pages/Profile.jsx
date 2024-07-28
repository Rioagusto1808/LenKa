import {useState, useEffect} from "react";
import axios from "axios";
import "../assets/css/profile.css";
import Layoutlogin from "./Layoutlogin";
import ModalHapusAkun from "../component/ModalHapusAkun";
import { Card, } from 'flowbite-react';
import { Link } from "react-router-dom";


const Profile = () => {
    
  const [products, setProducts] =useState([]);

  useEffect(()=>{
    getProducts();
  },[]);

  const getProducts = async() =>{
    const response = await axios.get("http://localhost:8081/products");
    setProducts(response.data);

  }
  const [vids, setProductss] =useState([]);

  useEffect(()=>{
    getProductss();
  },[]);

  const getProductss = async() =>{
    const response = await axios.get("http://localhost:8081/vids");
    setProductss(response.data);

  }

  const deleteProduct = async(productId) =>{
    try {
      await axios.delete(`http://localhost:8081/products/${productId}`)
      getProducts();
    } catch (error) {
      console.log(error)
    }
  }
const deleteProducts =async(vidId) =>{
  try {
    await axios.delete(`http://localhost:8081/vids/${vidId}`)
    getProducts();
  } catch (error) {
    console.log(error)
    
  }
}
  
  return (
    <Layoutlogin>
      <div className="container">
        <div className="box1">
          <h1>Profil Saya</h1>
          <div className="potoprofil ml-auto mr-auto"></div>
          <h1>Andre Firmansyah</h1>
          <div className="data">
            <p>
              <i>Rp.220.000/jam</i>
            </p>
            <p>Medan</p>
            <p>Fotografer, Videografer</p>
            <p>andrefirmansyah@gmail.com</p>
            <p>+62 858-3130-7378</p>
            <p>@andrefirmansyah</p>
          </div>

          <div className="pengaturan">
            <h1>Pengaturan</h1>
            <div className="pengaturanisi">

                <ModalHapusAkun/>
            
              <div className="out">
                <a href="/">
                  <p>Keluar</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="mr-[850px] ml-[-60px] font-bold text-[40px]">PORTOFOLIO</div>

          <div className="portofoto">
            <h1 className=" mt-[370px] mr-[100px]">Foto</h1>
<div>
  <Link to="/tambahporto">Tambah Portofolio</Link>
  </div>
          </div>
          <div className="flex flex-wrap mt-2 gap-2">
              {products.map((product)=>(
                <div key={product.id}>
                <Card  className="h-[350px] w-[350px] rounded-2xl">
                <img className="w-[300px] h-[300px] rounded-xl" src={product.url} alt="" />
                <div>
                <label>{product.name}</label>
                  </div>

                <div className="space-x-[100px] text-red-600 font-bold ">
                <Link to={`/edit/${product.id}`} className="">EDIT</Link>
                <button onClick={()=> deleteProduct(product.id)} className="">DELETE</button>
                </div>
            </Card>
            </div>
              ))}
          </div>
          <div className="portovideo">
            <h1>Video</h1>              
          </div>
          <div className="flex flex-wrap mt-2 gap-2">
              {vids.map((vid)=>(
                <div key={vid.id}>
                <Card  className="h-[350px] w-[350px] rounded-2xl">
                <video controls className="w-[500px] h-[200px] rounded-[10px]" src={vid.url} alt="" />
                <div>
                <label>{vid.name}</label>
                  </div>

                <div className="space-x-[100px] text-red-600 font-bold ">
                <Link to={`/editt/${vid.id}`} className="">EDIT</Link>
                <button onClick={()=> deleteProducts(vid.id)}>DELETE</button>
                </div>
            </Card>
            </div>
              ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />




      </Layoutlogin >




  );
};

export default Profile;
