import { Carousel } from 'flowbite-react';
import Images from '../assets/images/carousel1.png';
import Images2 from '../assets/images/carousel2.png';
import Logo from '../assets/images/lenka.png';
import { Link } from 'react-router-dom';

const CarouselItem = () => {
  return (
    <>
      <div className='absolute top-0 translate-x-1/2 left-0 h-fit w-1/2 mx-auto z-20 flex justify-center flex-col items-center gap-6 mt-48'>
        <div className='flex items-baseline'>
          <h2 className='text-3xl font-bold text-center text-red-600'>LensaKarya</h2>
          <img src={Logo} alt='LenKa Logo' className='h-12 text-red-600' />
        </div>
        <p className='text-center text-lg'>
          Abadikan Moment Berhargamu, <br />
          Untuk Kenangan Indah Kan di Ingat.
        </p>
        <Link
          to='/layanan'
          type='button'
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        >
          Jelajahi Sekarang!
        </Link>
      </div>
      {/* <div className='absolute top-0 left-0 h-full w-full'>
        <h2 className='text-4xl font-bold'>Lensa Karya</h2>
      </div> */}
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8'>
        <Carousel style={{ width: '100%', height: '191%' }}>
          <img src={Images} alt='...' className='object-cover w-full h-full' />
          <img src={Images2} alt='...' className='object-cover w-full h-full' />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselItem;
