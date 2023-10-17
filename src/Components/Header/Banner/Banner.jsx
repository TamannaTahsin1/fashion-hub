
const Banner = () => {
  return (
    <div
      className='container mx-auto hero h-[70vh]'
      data-aos='zoom-in-up'
      style={{
        backgroundImage: "url(./bg.jpg)",
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1
            className='mb-5 text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'
            data-aos='fade-down'>
            Fashion Hub
          </h1>
          <p className='mb-5 text-black' data-aos='fade-up'>
            Discover the latest games, join thrilling tournaments, and connect
            with fellow gamers at our immersive gaming event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
