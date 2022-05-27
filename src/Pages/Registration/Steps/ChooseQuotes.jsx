import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import StepTow from "./Signup";

const Stepthree = ({ step, setStep }) => {
  const navigate = useNavigate();

  return (
    <div>
      {step !== 2 ? (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
          <div className="px-5 md:mx-auto md:m-0 flex flex-col justify-center items-center md:w-[42%]">
            <AiOutlineCheckCircle
              className="text-[#e50914] mb-4"
              fontSize={58}
            />

            <div className="flex flex-col items-center text-center justify-center font-bold text-white">
              <span className=" mx-auto">STEP 3 OF 3</span>
              <h1 className="text-3xl md:text-4xl my-5  max-w-2xl mx-auto md:text-left">
                Choose your plan.
              </h1>

              <div className="md:space-y-10 mr-5 text-[18px] md:text-[23px] font-bold">
                <span className="text-[#e50914] flex space-x-2 ">
                  <AiOutlineCheck />
                  <h1 className="text-white">
                    No commitments, cancel anytime.
                  </h1>
                </span>

                <span className="text-[#e50914] flex space-x-2">
                  <AiOutlineCheck />
                  <h1 className="text-white">
                    Everything on woozeee for one low price.
                  </h1>
                </span>

                <span className="text-[#e50914] flex  space-x-2">
                  <AiOutlineCheck />
                  <h1 className="text-white">
                    Unlimited viewing on all your devices.
                  </h1>
                </span>
              </div>
            </div>

            <button
              className="p-3 text-2xl text-center font-bold bg-[#e50914] text-white w-[80%] mx-auto mt-5 "
              onClick={() => {
                navigate("/");
                setStep(2);
              }}
            >
              Finish
            </button>
          </div>
        </motion.div>
      ) : (
        <StepTow step={step} setStep={setStep} />
      )}
    </div>
  );
};

export default Stepthree;
