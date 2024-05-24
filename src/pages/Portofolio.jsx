import Layout from './Layout';
import { Link } from 'react-router-dom';
import Wedding from '../assets/images/portofolio/wedding.png'
import Event from '../assets/images/portofolio/event.png'
import PreWedding from '../assets/images/portofolio/pre-wed.png'
import Potrait from '../assets/images/portofolio/potrait.png'
import Family from '../assets/images/portofolio/family.png'
import Food from '../assets/images/portofolio/food.png'
import Product from '../assets/images/portofolio/product.png'
import Newborn from '../assets/images/portofolio/newborn.png'


const Portofolio = () => {
  return (
    
    <Layout>
      
      <div className='box-sizing rounded-xl mx-auto h-[650px] w-[1150px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        <p className='text-center text-3xl leading-normal font-bold'> Portofolio</p>
        <p className='ml-[41px] mt-[1px] text-xl font-semibold text-[rgb(236,0,0)] '>Kategori</p>
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>

        <Link to="/portowedd">
            <img src={Wedding} alt="Wedding Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={PreWedding} alt="Prewed Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Potrait} alt="Potrait Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Family} alt="Family Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px] mt-6 '>
        <Link to="" >
            <img src={Food} alt="Food Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Event} alt="Event Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Product} alt="Product Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Newborn} alt="Newborn Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

      </div>
        </div>
    </Layout>
  );
};

export default Portofolio;
