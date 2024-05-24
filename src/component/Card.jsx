import React from 'react';
import Images from '../assets/images/andre.png';
import Images2 from '../assets/images/andre2.png';
import Images3 from '../assets/images/andre3.png';
import Images4 from '../assets/images/andre4.png';
import Images5 from '../assets/images/andre5.png';
import Images6 from '../assets/images/andre6.png';
import Images7 from '../assets/images/andre7.png';
import Images8 from '../assets/images/andre8.png';
import Images9 from '../assets/images/andre9.png';
import Images10 from '../assets/images/andre10.png';
import Images11 from '../assets/images/andre11.png';
import Images12 from '../assets/images/andre12.png';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdPricetag } from 'react-icons/io';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { LuCamera } from 'react-icons/lu';
import { LuVideo } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Photographer = () => {
  const dataPhotografer = [
    {
      id: 0,
      image: Images,
      name: 'Andre Firmansyah 1',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 1,
      image: Images2,
      name: 'Andre Firmansyah 2',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 2,
      image: Images3,
      name: 'Andre Firmansyah 3',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 3,
      image: Images4,
      name: 'Andre Firmansyah 4',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 4,
      image: Images5,
      name: 'Andre Firmansyah 5',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 5,
      image: Images6,
      name: 'Andre Firmansyah 6',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 6,
      image: Images7,
      name: 'Andre Firmansyah 7',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 7,
      image: Images8,
      name: 'Andre Firmansyah 8',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 8,
      image: Images9,
      name: 'Andre Firmansyah 9',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 9,
      image: Images10,
      name: 'Andre Firmansyah 10',
      price: 250000,
      city: 'Medan',
    },
    {
      id: 10,
      image: Images11,
      name: 'Andre Firmansyah 11',
      price: 250000,
      city: 'Medan',
    },
  ];

  return (
    <>
      <div className='pb-[65px] '>
        <div className='flex flex-wrap justify-center w-screen mx-auto gap-8 mt-[10px]'>
          {dataPhotografer.map((photografer) => (
            <div
              className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
              style={{ backgroundImage: `url(${photografer.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
              <div className='text-white w-full'>
                <img src='' alt='' />
                <p className='text-center text-xl font-bold'>{photografer.name}</p>
                <p className='italic font-light'>
                  <IoMdPricetag className='inline-block me-5' />
                  Rp. {photografer.price}/jam
                </p>

                <p>
                  <IoLocationSharp className='inline-block me-5' />
                  {photografer.city}
                </p>
                <div className='flex justify-center items-center gap-x-4'>
                  <LuCamera />
                  <LuVideo />
                </div>
              </div>
              <div className='w-full mx-16 flex justify-center'>
                <Link to='/layananprofile'>
                  <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photographer;
