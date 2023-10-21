
import about1 from "../../assets/f1.jpg";
import about2 from "../../assets/f2.jpg";
import about3 from "../../assets/f3.jpg";
import about4 from "../../assets/f4.jpg";


const About = () => {
    return (
        <div>
        <div className='container mx-auto my-32 h-[50vh]'>
          <div className='md:flex justify-around items-center gap-2'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <img
                src={about1}
                className='rounded-md h-80 w-96 p-2'
                data-aos='zoom-out-right'
                alt=''
              />
              <img
                src={about2}
                className='rounded-md h-80 w-96 p-2'
                data-aos='zoom-out-right'
                alt=''
              />
              <img
                src={about3}
                className='rounded-md h-80 w-96 p-2'
                data-aos='zoom-out-left'
                alt=''
              />
              <img
                src={about4}
                className='rounded-md h-80 w-96 p-2'
                data-aos='zoom-out-left'
                alt=''
              />
            </div>
            <div>
              <h1 className='text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-gray-600 text-transparent bg-clip-text'>
                Know More About Our Products
              </h1>
              <p
                className='text-gray-400 mt-6'
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1000'>
                Discover the essence of elegance with our fashion brand, where style meets sophistication. <br /> Our designs blend timeless classics with contemporary trends, offering you a <br /> unique and captivating wardrobe.  Explore a world of high-quality craftsmanship and attention to detail, <br /> ensuring you stand out in every occasion. Elevate your fashion game <br /> with our brand and make a statement that is truly your own.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
};

export default About;