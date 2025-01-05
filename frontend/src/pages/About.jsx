// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            The product exceeded my expectations! It arrived quickly, was
            exactly as described, and the quality is fantastic. I cant wait to
            shop again
          </p>
          <p>
            The product exceeded my expectations! It arrived quickly, was
            exactly as described, and the quality is fantastic. I cant wait to
            shop again
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to make shopping seamless, enjoyable, and
            accessible to everyone. We strive to connect people with products
            they love by offering a diverse range of high-quality items,
            innovative features, and exceptional service. Empowering our
            customers with convenience and value is at the heart of everything
            we do. From supporting sustainable brands to enhancing user
            experiences, we are committed to redefining the way the world shop
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-2">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Forever, quality is our top priority. Every product in our store
            undergoes a rigorous quality assurance process to ensure it meets
            our high standards. Shop with confidence, knowing that every
            purchase is backed by our commitment to excellence. Your trust is
            our success!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded">
          <b>Convenience</b>
          <p className="text-gray-600">
            At Forever, convenience is at the core of your shopping experience.
            From intuitive navigation to fast and secure checkout, With our
            quick delivery and hassle-free returns, shopping has never been this
            simple. Discover the ultimate in convenience with Forever, where
            everything you need is just a tap away!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Forever, exceptional customer service is more than a promise its
            our passion. Our dedicated support team is here to assist you every
            step of the way, ensuring a smooth and enjoyable shopping
            experience. we are committed to making your journey with us
            unforgettable. With 24/7 support, personalized assistance,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
