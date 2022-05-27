import { useEffect } from "react";
import { Link } from "react-router-dom";

import home from "../../Assets/images/getStartImages/home-bg.jpg";
import Upbar from "./Upbar";
import AccordionSection from "./FeaturesSections/AccordionSection";
import Features from "../Getstart/FeaturesSections/Features";

import { Alldev, Tv, Mobile, Kids, accordionData } from "./json";

import { BannerShow, BannerState } from "../../Redux/Reducers/bannerShow";
import { useDispatch, useSelector } from "react-redux";

const GetStart = () => {
  const banner = useSelector(BannerState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BannerShow(false));
  }, [banner, dispatch]);

  return (
    <>
      <div className="bg-black">
        {/*Banner SEction*/}
        <div
          className="h-screen w-full"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${home})`,
            backgroundPosition: "center center",
          }}
        >
          <Upbar />

          <div className="flex flex-col justify-center items-center font-bold text-white py-[80px] md:pt-[6px] max-w-5xl mx-auto text-center ">
            <h1 className=" text-[1.65rem] md:text-[3.350rem] md:text-center max-w-[700px] ">
              Unlimited movies, TV shows, and more.
            </h1>

            <div className="w-[70%] mx-auto space-y-5 mt-5 md:text-[1.300rem]">
              <p>Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className="flex flex-col md:flex-row  justify-center items-center md:space-y-0 space-y-5 ">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full h-[66px] px-5 outline-0 text-black font-bold"
                  />
                </div>

                <Link
                  to="/register"
                  className="bg-[#e50914] md:text-[28px] px-[15px] md:px-[20px] md:py-[8px] leading-[50px] text-center md:w-[20rem] cursor-pointer"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Features SEction*/}
        <Features data={Tv} />
        <Features isLeft data={Mobile} />
        <Features data={Alldev} />
        <Features isLeft data={Kids} />
        <div className="flex flex-col justify-center items-center md:px-5 border-t-8 border-gray-700 py-[6rem]">
          <h1 className="text-white font-bold text-[1.800rem] md:text-[50px] mb-10">
            Frequently Asked Questions
          </h1>

          {/*Accaccordion SEction*/}
          {accordionData.map(({ title, dec, dec2 }) => (
            <div key={title}>
              <AccordionSection title={title} dec={dec} dec2={dec2} />
            </div>
          ))}

          <div className="flex flex-col md:flex-row text-white  justify-center items-center md:space-y-0 space-y-5 mt-8 w-full md:w-[60%] ">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full h-[50px] px-5 outline-0 text-black font-bold"
              />
            </div>

            <div className="bg-[#e50914] md:text-[28px] px-[30px] md:px-[15px] py-2 md:p-0 font-semibold md:h-[50px] md:leading-[50px] text-center  md:w-[20rem] cursor-pointer ">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStart;
