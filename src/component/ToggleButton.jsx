import React, { useState } from 'react';
import Icon from '../assets/images/icon/login.png';
import { Link } from 'react-router-dom';

const ToggleButton = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      {isToggle ? (
        <>
          <button
            type="button"
            onClick={() => console.log('Option 1 clicked')}
            className="bg-[#F3EEEA] px-4 py-2 rounded-tl-3xl rounded-bl-3xl cursor-pointer text-[#EC0000] hover:bg-[#EC0000] hover:text-[#F3EEEA]"
          >
            <Link to='/Daftar'>Daftar</Link>
          </button>
          <button
            type="button"
            onClick={() => console.log('')}
            className="bg-[#F3EEEA] text-black px-4 py-2 rounded-tr-3xl rounded-br-3xl cursor-pointer hover:bg-black hover:text-[#F3EEEA]"
          >
           <Link to='/Login'> Masuk</Link>
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={handleToggle}
          className="block py-2 px-3 text-[#EC0000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EC0000] md:p-0"
        >
         <div className='button text-[#EC0000] font-medium flex items-center'>
         <img src={Icon} alt='' className='w-[17px] mr-2' />Saya Photographer
         </div>
        </button>
      )}
    </div>
  );
};

export default ToggleButton;
