import React from 'react';
import Images from '../assets/images/kategori.png';
import Images2 from '../assets/images/kategori-event.png';
import Images3 from '../assets/images/kategori-potrait.png';
import Images4 from '../assets/images/kategori-family.png';
import Images5 from '../assets/images/kategori-food.png';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Kategori = () => {
  return (
    <>
      <div className='pb-[130px]'>
        <div className='flex justify-between items-center px-28'>
          <p className='pt-6 pb-4 text-xl font-bold'>Kategori</p>
          <Link to='/layanan'>
            Selengkapnya <FaAngleDoubleRight className='inline-block' />
          </Link>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center '>
          <img className='hover:cursor-pointer' src={Images} alt='' />
          <img className='hover:cursor-pointer' src={Images2} alt='' />
          <img className='hover:cursor-pointer' src={Images3} alt='' />
          <img className='hover:cursor-pointer' src={Images4} alt='' />
          <img className='hover:cursor-pointer' src={Images5} alt='' />
        </div>
      </div>
    </>
  );
};

export default Kategori;
