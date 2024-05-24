import React,{useState} from 'react';

const Dropdown = () => {
  return (
    <>
    <div className=' text-white flex justify-center gap-x-4 text-sm'>
    <select  className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs' id="mySelect">
        <option className='text-white' value="#" disabled selected>Abjad</option>
        <option className='text-white' value="#">A - Z</option>
        <option className='text-white' value="#">Z - A</option>
    </select>
    <select className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs' id="mySelect ">
    <option className='text-white' value="" disabled selected>Harga</option>
        <option className='text-white' value="#">Rendah - Tinggi</option>
        <option className='text-white' value="#">Tinggi - Rendah</option>
        <option className='text-white' value="#">Min - Max</option>
    </select>
    <select className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs' id="mySelect">
    <option className='text-white' value="" disabled selected>Lokasi</option>
        <option className='text-white' value="#">Aceh</option>
        <option className='text-white' value="#">Batam</option>
        <option className='text-white' value="#">Lampung</option>
        <option className='text-white' value="#">Medan</option>
        <option className='text-white' value="#">Padang</option>
        <option className='text-white' value="#">Palembang</option>
    </select>
    <select className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs ' id="mySelect">
    <option value="" disabled selected>Skill</option>
        <option className='text-white' value="#">Fotografer</option>
        <option className='text-white' value="#">Videografer</option>
    </select>
    </div>

    </>

  );
};

export default Dropdown;