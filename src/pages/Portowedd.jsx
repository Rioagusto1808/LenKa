import Layout from './Layout';
import { Link } from 'react-router-dom';
import photo1 from '../assets/images/thumwedding/f1.png'
import photo2 from '../assets/images/thumwedding/f2.png'
import photo3 from '../assets/images/thumwedding/f3.png'
import photo4 from '../assets/images/thumwedding/f4.png'
import photo5 from '../assets/images/thumwedding/f5.png'
import photo6 from '../assets/images/thumwedding/f6.png'
import photo7 from '../assets/images/thumwedding/f7.png'
import photo8 from '../assets/images/thumwedding/f7.png'
import Thumb1 from '../assets/images/thumwedding/th1.png'
import Thumb2 from '../assets/images/thumwedding/th2.png'
import Thumb3 from '../assets/images/thumwedding/th3.png'
import Thumb4 from '../assets/images/thumwedding/th4.png'
import Thumb5 from '../assets/images/thumwedding/th5.png'
import Thumb6 from '../assets/images/thumwedding/th6.png'
import Thumb7 from '../assets/images/thumwedding/th7.png'
import Thumb8 from '../assets/images/thumwedding/th8.png'





const Portowedd = () => {
    return (
    
    <Layout>
        <div className="w-[1150px] h-[1274px] mt-24 mb-10 bg-[#fff] drop-shadow-md box-sizing rounded-xl mx-auto">
            <p className='text-center text-3xl leading-normal font-bold'> Portofolio</p>
            <p className='ml-[41px] mt-[1px] text-xl font-semibold text-[rgb(236,0,0)] '>Foto</p>
            <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>

                <Link to="">
                    <img src={photo1} alt="Wedding Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
                </Link>

                <Link to="">
                    <img src={photo2} alt="Prewed Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
                </Link>

                <Link to="">
                    <img src={photo3} alt="Potrait Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " />
                </Link>

                <Link to="">
                    <img src={photo4} alt="Family Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
                </Link>

            </div>
            <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-5 '>

                <Link to=" ">
                    <img src={photo5} alt="Wedding fotography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
                </Link>

                <Link to="">
                    <img src={photo6} alt="Prewed Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
                </Link>

                <Link to="">
                    <img src={photo7} alt="Potrait Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " />
                </Link>

                <Link to="">
                    <img src={photo8} alt="Family Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
                </Link>

            </div>
            <p className='mt-[10px] text-center text-[16px] italic font-semibold text-[rgb(65,65,65)] '>Sudah mencapai batas</p>
            <p className='ml-[41px] mt-[10px] text-xl font-semibold text-[rgb(236,0,0)] '>Video</p>
            <div alt='video' className='relative flex justify-center mt-2 gap-6'>

                <Link to="">
                    <img src={Thumb1} alt="thumbnail video 1" className="box-content bg-footer-texture rounded-2xl h-[250px] w-[250px]" />
                </Link>

                <Link to="">
                    <img src={Thumb2} alt="thumbnail video 2" className="box-content rounded-2xl h-[250px] w-[250px] " />
                </Link>

                <Link to="">
                    <img src={Thumb3} alt="thumbnail video 3" className="box-content rounded-2xl h-[250px] w-[250px]  " />
                </Link>

                <Link to="">
                    <img src={Thumb4} alt="thumbnail video 4" className="box-content rounded-2xl h-[250px] w-[250px]" />
                </Link>

            </div>
            <div className='relative flex justify-center mt-5 gap-6 '>

                <Link to=" ">
                    <img src={Thumb5} alt="thumbnail video 5" className="box-content rounded-2xl h-[250px] w-[250px]" />
                </Link>

                <Link to="">
                    <img src={Thumb6} alt="thumbnail video 6" className="box-content rounded-2xl h-[250px] w-[250px]" />
                </Link>

                <Link to="">
                    <img src={Thumb7} alt="thumbnail video 7" className="box-content rounded-2xl h-[250px] w-[250px]" />
                </Link>

                <Link to="">
                    <img src={Thumb8} alt="thumbnail video 8" className="box-content rounded-2xl h-[250px] w-[250px]" />
                </Link>

            </div>
            <p className='mt-[10px] text-center text-[16px] italic font-semibold text-[rgb(65,65,65)] '>Sudah mencapai batas</p>
        </div>
    </Layout>
    );
};

export default Portowedd;
