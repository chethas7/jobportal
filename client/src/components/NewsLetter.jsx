import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Your dream job could be just a click away! Subscribe to our job portal
          today and start your journey towards a rewarding career.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Your dream job could be just a click away! Subscribe to our job portal
          today and start your journey towards a rewarding career.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
