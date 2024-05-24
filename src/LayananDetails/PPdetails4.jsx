import { Link } from 'react-router-dom'
import React,{useState} from "react";
import "../assets/css/profile.css";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Wedding from '../assets/images/thumwedding/f1.png'
import Event from '../assets/images/thumwedding/f2.png'
import PreWedding from '../assets/images/thumwedding/f3.png'
import Potrait from '../assets/images/thumwedding/f4.png'
import Family from '../assets/images/thumwedding/f5.png'
import Food from '../assets/images/thumwedding/f6.png'
import Product from '../assets/images/thumwedding/f7.png'
import Newborn from '../assets/images/thumwedding/f8.png'




const PPdetails = () => {

  return (
    
<>
      <div className='box-sizing rounded-xl mx-auto h-[650px] w-[1150px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        <p className='text-center text-3xl leading-normal font-bold font-inter'> Portofolio22</p>
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>

        <Link to="#">
            <img src={Wedding} alt="Wedding Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" /><ModalEditProfile/>
          </Link >

          <Link to="">
            <img src={PreWedding} alt="Prewed Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" /><ModalEditProfile2/>
          </Link>

          <Link to="">
            <img src={Potrait} alt="Potrait Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " /><ModalEditProfile3/>
          </Link>

          <Link to="">
            <img src={Family} alt="Family Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" /><ModalEditProfile4/>
          </Link>

      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px] mt-6 '>
        <Link to="" >
            <img src={Food} alt="Food Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" /><ModalEditProfile5/>
          </Link>

          <Link to="">
            <img src={Event} alt="Event Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" /><ModalEditProfile6/>
          </Link>

          <Link to="">
            <img src={Product} alt="Product Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " /><ModalEditProfile7/>
          </Link>

          <Link to="">
            <img src={Newborn} alt="Newborn Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" /><ModalEditProfile8/>
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Wedding} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={PreWedding} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Potrait} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Family} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Food} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Event} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Product} alt="" className="w-[400px] rounded-lg" />
              
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
      <div onClick={() => setOpenModal(true)} className="rounded-lg  text-white text-center w-[100px] hover:cursor-pointer mt-[10px] ml-[90px] mr-[3px] bg-[#EC0000] ">Details</div>
      <Modal show={openModal} onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-[100px]">
        <Modal.Header />
        <Modal.Body className=" w-[1200px] h-[500px]">
          <div >
       
            <div className="flex ">
            <img src={Newborn} alt="" className="w-[400px] rounded-lg" />
              
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

export default PPdetails;
