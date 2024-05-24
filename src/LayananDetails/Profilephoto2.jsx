import { Link } from 'react-router-dom';
import React,{useState} from "react";
import "../assets/css/profile.css";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Images from '../assets/images/andre3.png';
import Photo1 from '../assets/images/Photo1.png';
import Photo2 from '../assets/images/Photo2.png'
import Photo3 from '../assets/images/Photo3.png'
import Photo4 from '../assets/images/Photo4.png'
import Video1 from '../assets/images/Video1.png'
import Video2 from '../assets/images/Video2.png'
import Video3 from '../assets/images/Video3.png'
import Video4 from '../assets/images/Video4.png'
import { IoMdPricetag } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCamera } from "react-icons/lu";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Profilephoto2 = () => {
  return (
    

      <>
      <div className='box-sizing rounded-xl mx-auto h-[1000px] w-[950px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>

            <img src={Images} alt="Wedding Photography" className="box-content  h-[250px] w-[200px] mx-[20px] mt-6" />
            <div>
          <p className='text-center text-[30px] mt-6 font-bold'>Abie Arief Setiawan</p>
          </div>
          <div className='mt-[75px] ml-[-20px]'>
          <p className='italic font-light '>
              <BiLogoGmail className='inline-block me-5' />
              abieariefsetiawan@gmail.com
            </p>
            <p>
              <FaWhatsapp className='inline-block me-5' />
              +62 895-3130-7070
            </p>
            <p><FaInstagram className='inline-block me-5' />
            @abieariefsetiawan</p>
          </div>
          <div className='mt-[75px] ml-[-510px]'>
          <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 190.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <p><LuCamera className='inline-block me-5' />Photografer, Videografer</p>
            <div className='w-full mx-16 flex justify-center'>
        
        <Link to='#'>
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
          <a href="/layananporto3">Selengkapnya <FaAngleDoubleRight className='inline-block me-5' /></a>
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
  
        <Link to="" >
            <img src={Photo1} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile/>
          </Link>

          <Link to="">
            <img src={Photo2} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile2/>
          </Link>

          <Link to="">
            <img src={Photo3} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px] " />
            <ModalEditProfile3/>
          </Link>

          <Link to="">
            <img src={Photo4} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile4/>
          </Link>

      </div>

      <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          <span className='text-red-600 ml-2 mt-10'>Video</span>
        </p>
        <p>
          <a href="/layananporto33">Selengkapnya <FaAngleDoubleRight className='inline-block me-5' /></a>
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
  
        <Link to="" >
            <img src={Video1} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile5/>
          </Link>

          <Link to="">
            <img src={Video2} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile6/>
          </Link>

          <Link to="">
            <img src={Video3} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px] " />
            <ModalEditProfile7/>
          </Link>

          <Link to="">
            <img src={Video4} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
            <ModalEditProfile8/>
          </Link>

      </div>
        </div>
        </>
  );
};

const ModalEditProfile = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Photo1} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ;

const ModalEditProfile2 = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Photo2} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ;


const ModalEditProfile3 = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Photo3} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ;


const ModalEditProfile4 = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Photo4} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
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
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Video1} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ; 

const ModalEditProfile6 = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Video2} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ;

const ModalEditProfile7 = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Video3} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ;

const ModalEditProfile8 = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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
            <img src={Video4} alt="" className="w-[400px] rounded-lg" />
              
            <div className="potoprofil ml-[35px]"></div>
            <div className="mt-[165px] ml-[-160px] text-center">
              <p className=" font-bold">Andre Firmansyah</p>
              <p className="italic text-[#EC0000]">Rp 240.000/jam</p>
              <p>Medan</p>
              <p>Fotografer, Videografer</p>
            </div>



            <div className="ml-[-133px] mt-[300px]">

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hubungi</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
} ;

export default Profilephoto2;
