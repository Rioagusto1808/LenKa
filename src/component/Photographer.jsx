import Images from '../assets/images/andre.png';
import Images2 from '../assets/images/andre2.png';
import Images3 from '../assets/images/andre3.png';
import Images4 from '../assets/images/andre4.png';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdPricetag } from 'react-icons/io';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { LuCamera } from 'react-icons/lu';
import { LuVideo } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Photographer = () => {
  // variabel ini mencontohkan data dari DB
  // apabila sudah connect ke DB dan mengambil data
  // masukkan data dari DB tsb ke sebuah varibel, dan ganti variabel di .map nya menggunakan variabel yang menampung data dari DB
  const dataPhotografer = [
    {
      id: 0,
      image: Images,
      name: 'Febri Johanes',
      price: 200000,
      city: 'Lampung',
    },
    {
      id: 1,
      image: Images2,
      name: 'Arya Fadhil Dinata',
      price: 260000,
      city: 'Lampung',
    },
    {
      id: 2,
      image: Images3,
      name: 'Risky Eka Nugraha',
      price: 250000,
      city: 'Lampung',
    },
    {
      id: 3,
      image: Images4,
      name: 'Andre Firmansyah 4',
      price: 250000,
      city: 'Medan',
    },
  ];

  return (
    <>
      <div className='pb-[65px]'>
        <div className='flex justify-between items-center px-28'>
          <p className='pt-6 pb-4 text-xl font-bold'>
            Rekomendasi <span className='text-red-600'>Pilihan</span>
          </p>
          <Link to='/layanan'>
            Selengkapnya <FaAngleDoubleRight className='inline-block' />
          </Link>
        </div>
        <div className='flex flex-row justify-center w-full mx-auto gap-8'>
          {/* cetak data menggunakan template. panggil semua data utk di map ke dalam 1 variabel */}
          {dataPhotografer.map((photografer) => (
            <div key={photografer}
              className='w-62 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url(${photografer.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <div className='text-white w-full'>
                <img src='' alt='' />
                <p className='text-center text-xl font-bold'>{photografer.name}</p>
                <p className='italic font-light'>
                  <IoMdPricetag className='inline-block me-5' />
                  {photografer.price}
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
