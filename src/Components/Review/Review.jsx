import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const Review = () => {
  return (
    <div className='container mx-auto my-20'>
      <h1
        className='text-center text-4xl mt-12 font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 text-transparent bg-clip-text'
        data-aos='fade-up'>
        Happy Customer
      </h1>
      <p className='text-center mt-4 text-gray-500'>
        Explore our review page to uncover valuable insights, honest opinions,
        and expert assessments on a wide range of products, services, and
        experiences.
      </p>
      {/* all cards */}
      <div className='space-y-10 my-9 grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div
          className='card lg:w-9/12 lg:h-56 p-6 card-compact bg-base-100 shadow-xl'
          data-aos='fade-down'>
          <div className='flex justify-around items-center mx-auto'>
            <div>
              <figure>
                <img
                  src={img4}
                  alt='Shoes'
                  className='rounded-full w-28 h-24'
                />
              </figure>
            </div>
            <div className='card-body'>
              <p className='text-gray-500'>
                The gaming expo was a mixed bag for me.
                <br />
                While I enjoyed the cosplay and the energetic atmosphere, I was
                disappointed <br /> by the lack of new game announcements.
              </p>
              <h2 className='card-title'>Evadne Rainewillow</h2>
              <p className='text-lg text-red-700'>Visitor</p>
            </div>
          </div>
        </div>
        <div
          className='card lg:w-9/12 lg:h-56 p-6  card-compact bg-base-100 shadow-xl'
          data-aos='fade-right'>
          <div className='flex justify-around items-center mx-auto'>
            <div>
              <figure>
                <img
                  src={img1}
                  alt='Shoes'
                  className='rounded-full w-28 h-24'
                />
              </figure>
            </div>
            <div className='card-body'>
              <p className='text-gray-500'>
                The gaming expo was a mixed bag for me.
                <br />
                While I enjoyed the cosplay and the energetic atmosphere, I was
                disappointed <br /> by the lack of new game announcements.
              </p>
              <h2 className='card-title'>Xander Thornfield</h2>
              <p className='text-lg text-red-700'>Visitor</p>
            </div>
          </div>
        </div>
        <div
          className='card lg:w-9/12 lg:h-56 p-6  card-compact bg-base-100 shadow-xl'
          data-aos='fade-left'>
          <div className='flex justify-around items-center mx-auto'>
            <div>
              <figure>
                <img
                  src={img2}
                  alt='Shoes'
                  className='rounded-full w-28 h-24'
                />
              </figure>
            </div>
            <div className='card-body'>
              <p className='text-gray-500'>
                Attending the gaming expo was a dream come true!
                <br />
                The esports tournaments were intense, and the VR demos were
                mind-blowing.
              </p>
              <h2 className='card-title'>Zephyr Nightshade</h2>
              <p className='text-lg text-red-700'>Visitor</p>
            </div>
          </div>
        </div>
        <div
          className='card lg:w-9/12 lg:h-56 p-6  card-compact bg-base-100 shadow-xl'
          data-aos='fade-up-left'>
          <div className='flex justify-around items-center mx-auto'>
            <div>
              <figure>
                <img
                  src={img3}
                  alt='Shoes'
                  className='rounded-full w-28 h-24'
                />
              </figure>
            </div>
            <div className='card-body'>
              <p className='text-gray-500'>
                Wow, what an incredible experience at the gaming expo!
                <br />
                The esports tournaments were intense, and the VR demos were
                mind-blowing.
              </p>
              <h2 className='card-title'>Seraphina Everhart</h2>
              <p className='text-lg text-red-700'>Visitor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
