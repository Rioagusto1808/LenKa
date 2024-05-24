// import express from 'express';
// import cors from "cors";
import Layout from './Layout';
import Carousel from '../component/Carousel';
import Sidebar from '../component/Sidebar';
import Intro from '../component/Intro';
import Photographer from '../component/Photographer';
import Kategori from '../component/Kategori';


const Home = () => {
  return (
    <Layout>
      <Carousel />
      <br />
      <Sidebar />
      <Intro />
      <Photographer />
      <Kategori />
    </Layout>
  );
};

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.listen(5000, ()=> console.log('Server Up and Running...'));

export default Home;
