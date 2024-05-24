import Navbarlogin from '../component/Navbarlogin';
import Footer from '../component/Footer';

// eslint-disable-next-line react/prop-types
const Layoutlogin = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Navbarlogin />
      {children}
      <Footer />
    </div>
  );
};

export default Layoutlogin;
