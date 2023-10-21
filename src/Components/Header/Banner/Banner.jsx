import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
  return (
    <div
      className='container mx-auto hero h-[70vh] overflow-hidden'
      data-aos="fade-left"
      style={{
        backgroundImage: "url(./bg.jpg)",
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1
            className='mb-5 text-6xl font-extrabold bg-gradient-to-r from-indigo-800 via-purple-800 to-gray-800 text-transparent bg-clip-text'
            data-aos='fade-down'>
            Fashion Hub
          </h1>
          <p className='mb-5 text-base' data-aos='fade-up'>
          Elevate your style with our exquisite collection of timeless and trendy fashion pieces
          </p>
          <div  data-aos='fade-up'>
          <Link to={'/about'}>
          <button className="btn border-none bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-500 text-white">
            Discover More <FaArrowRight></FaArrowRight>
          </button>
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
