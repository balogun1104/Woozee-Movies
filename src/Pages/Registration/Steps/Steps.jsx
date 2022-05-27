import Devices from "../../../Assets/images/SignUp/Devices.png";
import { motion } from "framer-motion";

const Steps = ({ setStep }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="mx-12 md:m-0 flex flex-col justify-center items-center ">
        <img src={Devices} alt="Devices" className="mb-5" />
        <div>
          <div className="flex flex-col items-center md:justify-center font-bold text-white">
            <span className="ml-0 mr-auto md:mx-auto">STEP 1 OF 3</span>
            <h1 className="text-4xl my-5">Finish setting up your account</h1>
            <p className=" md:text-center max-w-[270px] ml-0 mr-auto md:mx-auto">
              Woozeee is personalized for you. Create a password to watch on any
              device at any time.
            </p>
            <button
              className="p-3 text-2xl text-center font-bold bg-[#e50914] w-[80%] mx-auto mt-5 "
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Steps;
