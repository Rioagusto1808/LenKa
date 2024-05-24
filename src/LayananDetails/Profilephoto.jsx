import {useState} from "react";
import { Link } from 'react-router-dom';
import "../assets/css/profile.css";
import Images from '../assets/images/andre.png';
import Video1 from '../assets/images/thumwedding/th1.png'
import Video5 from '../assets/Video/wedd1.mp4'
import { IoMdPricetag } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCamera } from "react-icons/lu";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Modal} from 'flowbite-react';
import { useEffect } from "react";
import axios from "axios";


const Profilephoto = () => {
  const [products, setProducts] =useState([]);

  useEffect(()=>{
    getProductsById();
  },[]);

  const getProductsById = async() =>{
    const response = await axios.get("http://localhost:8081/products/");
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
  return (
    

      <>
      <div className='box-sizing rounded-xl mx-auto h-[1000px] w-[950px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>
        <Link to="/layanan2">
            <img src={Images} alt="Wedding Photography" className="box-content  h-[250px] w-[200px] mx-[20px] mt-6" />
          </Link>
          <p className='text-center text-[30px] mt-6 font-bold'>Andre Firmansyah</p>
          <div className='mt-[75px]'>
          <p className='italic font-light '>
              <BiLogoGmail className='inline-block me-5' />
              andrefirmansyah@gmail.com
            </p>
            <p>
              <FaWhatsapp className='inline-block me-5' />
              +62 857--8863-7095
            </p>
            <p><FaInstagram className='inline-block me-5' />
            @andrefirmansyah</p>
          </div>
          <div className='mt-[75px] ml-[-510px]'>
          <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <p><LuCamera className='inline-block me-5' />Photografer, Videografer</p>
            <div className='w-full mx-16 flex justify-center'>
        
        <Link to='https://wa.me/085788637095'>
        <button type='button' className='text-[#F3EEEA] bg-[#EC0000] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non mt-5 ml-[-170px]' >
        Hubungi
        </button>
    </Link>
    
      </div>
          </div>
            </div>

            <div>
            <p className='text-center text-[30px] mt-2 ml-[-730px] font-bold'>Portofolio</p>
          </div>
          
          <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          <span className='text-red-600 ml-2 mt-10'>Foto</span>
        </p>
        <p>
          <a href="/layananporto1">Selengkapnya <FaAngleDoubleRight className='inline-block me-5' /></a>
        </p>
      </div>
      {products.map((product)=>(
      <div key={product.id}  className=' justify-items-stretch ml-[20px] mr-[37px]  '>
     
        <Link to="" >
            <img src={product.url} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile/>
          </Link>
          
      </div>
      ))}
      


      <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          <span className='text-red-600 ml-2 mt-10'>Video</span>
        </p>
        <p>
          <a href="/layananporto11">Selengkapnya <FaAngleDoubleRight className='inline-block me-5' /></a>
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
      {vids.map((vids)=>(
        <Link key={vids.id} to="" >
            <video src={vids.url} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile5/>
          </Link>
      ))}

      </div>
        </div>
        
        
        </>
  );
};
const ModalEditProfile = () =>{
    const [openModal, setOpenModal] = useState(false);
    const [, setEmail] = useState('');
  
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }
    const [products, setProducts] =useState([]);

    useEffect(()=>{
      getProducts();
    },[]);
  
    const getProducts = async() =>{
      const response = await axios.get("http://localhost:8081/products");
      setProducts(response.data);
    }
    
    return(
      <div>
        {/* <Button onClick={() => setOpenModal(true)} className="text-black border-white mr-auto ml-auto">Edit Data</Button> */}
        
        <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[64px] mr-[3px] bg-[#EC0000] ">Details</div>
        <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
          <Modal.Header />
          <Modal.Body className=" w-[1200px] h-[500px]">
          
            <div >
            
              <div className="flex ">
              {products.map((product)=>(
                <img key={product.id}  src={product.url} alt="" className="w-[400px] rounded-lg" />
              ))}
                <div className="potoprofil ml-[35px]"></div>
              <div className="mt-[165px] ml-[-160px] text-center">
                <p className=" font-bold">Andre Firmansyah</p>
                <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
                <p>Medan</p>
                <p>Fotografer, Videografer</p>
                {products.map((product)=>(
                <p>{product.name}</p>
                ))}
              </div>



              <div className="ml-[-133px] mt-[300px]">
  
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
              </div> 
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  } ;


  

  

  const ModalEditProfile5 = () =>{
    const [openModal, setOpenModal] = useState(false);
    const [, setEmail] = useState('');
  
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }
    const [vids, setProductss] =useState([]);

    useEffect(()=>{
      getProductss();
    },[]);
  
    const getProductss = async() =>{
      const response = await axios.get("http://localhost:8081/vids");
      setProductss(response.data);
  
    }
    return(
      <div>
        {/* <Button onClick={() => setOpenModal(true)} className="text-black border-white mr-auto ml-auto">Edit Data</Button> */}
        <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[64px] mr-[3px] bg-[#EC0000] ">Details</div>
        <Modal  show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
          <Modal.Header />
          <Modal.Body className=" w-[1500px] h-[500px]">
            <div >
         
              <div className="flex ">
              {vids.map((vids)=>(
              <video  key={vids.id} src={vids.url} type='video/mp4' controls autoPlay loop className="w-[400px]  rounded-lg" />
              ))}
                
              <div className="potoprofil ml-[35px]"></div>
              <div className="mt-[165px] ml-[-160px] text-center">
                <p className=" font-bold">Andre Firmansyah</p>
                <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
                <p>Medan</p>
                <p>Fotografer, Videografer</p>
              </div>



              <div className="ml-[-133px] mt-[300px]">
  
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
              </div> 
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  } ; 

 
  
export default Profilephoto;
