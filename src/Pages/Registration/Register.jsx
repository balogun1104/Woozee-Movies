import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import netflix from "../../Assets/images/Woozeee.svg";
import { BannerShow, BannerState } from "../../Redux/Reducers/bannerShow";
import { motion } from "framer-motion";

import Steps from "./Steps/Steps";
import ChooseQuotes from "./Steps/ChooseQuotes";

const Register = () => {
  const banner = useSelector(BannerState);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  useEffect(() => {
    dispatch(BannerShow(false));
  }, [banner, dispatch]);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        className="flex items-center justify-between  border-b border-gray-500 px-5 mb-5"
      >
        <Link to="/">
          <img src={netflix} alt="logo" className="w-[150px] mr-4" />
        </Link>

        <Link
          to="/signin"
          className="font-bold text-white text-[18px] border border-gray-500 px-3 py-1 cursor-pointer"
        >
          Sign In
        </Link>
      </motion.div>

      {step === 1 ? (
        <Steps setStep={setStep} />
      ) : (
        <ChooseQuotes step={step} setStep={setStep} />
      )}
    </>
  );
};

export default Register;
