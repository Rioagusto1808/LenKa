import React,{useState} from "react";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const ModalHapusAkun = () =>{
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
  
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }
    return(
      <div>
        {/* <Button onClick={() => setOpenModal(true)} className="text-black border-white mr-auto ml-auto">Edit Data</Button> */}
        <div onClick={() => setOpenModal(true)} className="hover:cursor-pointer">Hapus Akun</div>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup className="bg-transparent backdrop-brightness-75 absolute pt-40">
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">Hapus Akun</h3>
              <div>
                            <button type="button" onClick={onCloseModal} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Batal</button> 
              <button type="button" onClick={onCloseModal} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Simpan</button>
              </div> 
            
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  } ;
  
  export default ModalHapusAkun;