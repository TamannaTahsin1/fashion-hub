// eslint-disable-next-line react/prop-types
const SponsorBrand = ({sponsorBrand}) => {
    const { image, details } = sponsorBrand || {};
    return (
        <div className="mt-10">
           <div className='card w-80 shadow-xl bg-purple-200' data-aos="zoom-in-right">
        <figure className='px-10 pt-10'>
          <img
            src={image}
            alt='sponsor'
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <p className="text-gray-600">{details}</p>
        </div>
      </div>
        </div>
    );
};

export default SponsorBrand;