
const Banner = () => {
  return (
    <div
      className='container mx-auto hero h-[70vh]'
      data-aos="fade-left"
      style={{
        backgroundImage: "url(./bg.jpg)",
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h3 className="text-center text-lg font-bold text-indigo-600">Trade-now</h3>
          <h1
            className='mb-5 text-5xl font-extrabold bg-gradient-to-r from-indigo-800 via-purple-800 to-gray-800 text-transparent bg-clip-text'
            data-aos='fade-down'>
            Fashion Hub
          </h1>
          <p className='mb-5 text-base' data-aos='fade-up'>
          Elevate your style with our exquisite collection of timeless and trendy fashion pieces
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
