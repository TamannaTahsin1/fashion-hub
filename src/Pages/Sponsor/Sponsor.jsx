import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SponsorBrand from "./SponsorBrand";

const Sponsor = () => {
  const sponsorBrands = useLoaderData();
  const [dataLength, setDataLength] = useState(3);
  return (
    <div>
      <h1 className='text-center text-4xl mt-12 mb-20 font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 text-transparent bg-clip-text'>
        OUR ALL SPONSORS
      </h1>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
        {sponsorBrands?.slice(0, dataLength).map((sponsorBrand) => (
          <SponsorBrand
            key={sponsorBrand.id}
            sponsorBrand={sponsorBrand}></SponsorBrand>
        ))}
      </div>
      <div className={dataLength === sponsorBrands.length && "hidden"}>
        <div className='md:flex justify-center items-center' data-aos="zoom-in-up">
          <button
            onClick={() => setDataLength(sponsorBrands.length)}
            className='btn border-none bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-500 text-white'>
            Show all Sponsors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
