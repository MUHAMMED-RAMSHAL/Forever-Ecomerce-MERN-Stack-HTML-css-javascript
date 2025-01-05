// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl border-t pt-10">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded"
          src={assets.contact_img}
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Stores</p>
          <p className="text-gray-500">
            54709 wiilum station <br />
            Suite 350.washington,USA
          </p>
          <p className="text-gray-500">
            Tel : (415) 555-0132
            <br />
            Email : admin@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers At Forever
          </p>
          <p className="text-gray-500">
            Learn More About Our Team And Job Openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded font-semibold">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;