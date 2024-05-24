import React from 'react';
import Layout from './Layout';
import Images1 from '../assets/images/Images-about-1.png'
import Images2 from '../assets/images/Images-about-2.png'

const Aboutus = () => {
  return (
    <Layout>
      <div>
        <div className='text-center font-inter text-4xl font-bold pt-0 mt-[256px] text-[#EC0000]'>
          ABOUT <span className='text-[#000]'>.</span>
        </div>
        <p className='text-center font-inter text-2xl font-normal p-4 mr-11 ml-11'>
          Lensa Karya menyediakan fotografer dan videografer profesional untuk mengabadikan momen berharga dalam hidup Anda
        </p>
      </div>
      <div className='flex m-[150px] mt-[300px]'>
        <div>
          <div className='font-inter text-4xl font-bold pt-10 pl-4'>
            MENGAPA HARUS
          </div>
          <div className='font-inter text-4xl font-bold pl-4 text-[#EC0000]'>
            LENSA KARYA ?
          </div>
          <p className='font-inter text-xl font-normal p-4'>
            Lensa Karya, ahli cerita visual, menangkap ratusan momen istimewa dengan kreativitas dan keahlian. Kami berbagi keindahan melalui gambar dan film unik Anda.
          </p>
        </div>
        <div className='flex mt-[50px] mb-[200px] '>
          <div className='rounded-lg bg-white p-4 shadow-md '>
            <img src={Images1} alt=""  />
          </div>
        </div>
      </div>
      <div className='flex  mt-[150px] mb-[200px]  ml-[100px] mr-[40px] '>
        <div className='rounded-lg bg-white p-4 shadow-md'>
          <img src={Images2} alt="" />
        </div>
        <div className='ml-7'>
        <div className='font-inter text-4xl font-bold pl-4 '>
          GABUNG BERSAMA  <span className='text-[#EC0000]'>KAMI</span>
        </div>
          <p className='font-inter text-xl font-normal p-4'>
          "Bergabunglah dengan Lensa Karya, sampaikan kisah unik Anda melalui lensa kami. Dukungan pertumbuhan dan ciptakan seni inspiratif bersama.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
