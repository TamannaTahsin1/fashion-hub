import Marquee from "react-fast-marquee";
import img1 from "../../assets/brand-1.png";
import img2 from "../../assets/brand-2.png";
import img3 from "../../assets/brand-3.png";
import img4 from "../../assets/brand-4.png";
import img5 from "../../assets/brand-5.png";
import img6 from "../../assets/brand-6.png";

const Brands = () => {
  return (
    <div>
      <h1 className='text-center text-4xl mt-12 mb-20 font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 text-transparent bg-clip-text'>
        Brands
      </h1>

      <div>
        <Marquee speed={150}>
          <img src={img1} alt='' className='m-8' />
          <img src={img2} alt='' className='m-8' />
          <img src={img3} alt='' className='m-8' />
          <img src={img4} alt='' className='m-8' />
          <img src={img5} alt='' className='m-8' />
          <img src={img6} alt='' className='m-8' />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
