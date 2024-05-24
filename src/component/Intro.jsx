import Icon from '../assets/images/icon/icon-camera.png';
import Icon2 from '../assets/images/icon/berbakat.png';
import Icon3 from '../assets/images/icon/kombinasi.png';
import Icon4 from '../assets/images/icon/keindahan.png';

const Intro = () => {
  return (
    <>
      {/* <div className='justify-center items-center flex gap-[30px] pb-[165px]'> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 justify-items-center mx-48 mb-10'>
        <div className='w-[300px] h-[300px] bg-white border-2 border-[red] flex flex-col justify-center gap-5 items-center text-center'>
          <img src={Icon} alt='' className='w-[50px]' />
          <p className='text-[25px] font-bold'>Filosofi</p>
          <p className='text-[15px] px-5'>Lensa Karya meyakini bahwa setiap momen memiliki cerita unik yang dapat mereka ungkapkan melalui gambar dan film.</p>
        </div>
        <div className='w-[300px] h-[300px] bg-white border-2 border-[red] flex flex-col justify-center gap-5 items-center text-center'>
          <img src={Icon2} alt='' className='w-[50px]' />
          <p className='text-[25px] font-bold'>Tim Berbakat</p>
          <p className='text-[15px] px-5'>Didukung oleh tim fotografer dan videografer berbakat, Lensa Karya memahami pentingnya momen-momen istimewa.</p>
        </div>
        <div className='w-[300px] h-[300px] bg-white border-2 border-[red] flex flex-col justify-center gap-5 items-center text-center'>
          <img src={Icon3} alt='' className='w-[50px]' />
          <p className='text-[25px] font-bold'>Kombinasi</p>
          <p className='text-[15px] px-5'>Dengan menggabungkan kreativitas, keahlian teknis, dan pengalaman, mereka berhasil menangkap ratusan momen tak terlupakan.</p>
        </div>
        <div className='w-[300px] h-[300px] bg-white border-2 border-[red] flex flex-col justify-center gap-5 items-center text-center'>
          <img src={Icon4} alt='' className='w-[50px]' />
          <p className='text-[25px] font-bold'>Keindahan</p>
          <p className='text-[15px] px-5'>Lensa Karya bangga membagikan keindahan hasil karya mereka, memberikan klien kenangan abadi dan cerita hidup yang tak terlupakan.</p>
        </div>
      </div>
    </>
  );
};

export default Intro;
