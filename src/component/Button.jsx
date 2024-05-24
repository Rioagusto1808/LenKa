import React from 'react';

const Button = () => {
  return (
    <>
      <div className='w-2/4 h-64 bg-white border-2 border-black rounded-[45px] flex flex-col justify-center gap-16'>
        <p className='text-3xl text-center font-medium'>Apa Anda yakin akan menghapus akun ?</p>
        <div className='flex justify-center items-center gap-8'>
          <button className='w-32 h-12 bg-amber-100 rounded-2xl'>
            <p className='font-semibold text-2xl'>Batal</p>
          </button>
          <button className='w-32 h-12 bg-stone-600 rounded-2xl flex justify-center items-center'>
            <p className='text-white font-semibold text-2xl'>Iya</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
