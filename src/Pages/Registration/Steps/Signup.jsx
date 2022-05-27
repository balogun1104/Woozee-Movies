import { motion } from "framer-motion";
import { useState } from "react";
import { auth } from "../../../Auth/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signIn } from "../../../Redux/Reducers/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

const StepTow = ({ step, setStep }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleValues = (data) => {
    if (data) {
      handleRegister(data);
    }
  };

  const handleRegister = (data) => {
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch(signIn({ uid: user?.uid, email: user?.email }));

          //StoreData
          localStorage.setItem("user", JSON.stringify(user));
        }

        //NextStep
        setStep(step + 1);
        // ...
      })
      .catch((error) => {
        setError(error.message);

        // ..
      });
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="px-5 mx-auto w-[82%] flex flex-col justify-center items-center md:w-[42%]">
        <div className="flex flex-col  items-center justify-center font-bold text-white">
          <span className="ml-0 mr-auto md:mx-auto">STEP 2 OF 3</span>
          <h1 className="text-3xl md:text-4xl my-5 md:text-left">
            Create a password to start your membership
          </h1>

          <p className=" md:text-left max-w-[270px] ml-0 mr-auto">
            Just a few more steps and you're done! We hate paperwork, too.
          </p>

          <form
            className="flex flex-col space-y-2 w-full  mt-5 text-black font-bold"
            onSubmit={handleSubmit(handleValues)}
          >
            <input
              type="text"
              placeholder="email"
              className="outline-none p-[10px]"
              {...register("email", { required: true })}
            />

            <p className="text-red-500 font-semibold">
              {errors.email?.message}
            </p>

            <input
              type="text"
              placeholder="password"
              className="outline-none p-[10px]"
              {...register("password", { required: true })}
            />
            <p className="text-red-500 font-semibold">
              {errors.password?.message}
            </p>

            <input
              type="submit"
              className="p-3 text-2xl text-white text-center font-bold bg-[#e50914] w-full cursor-pointer ml-0 mr-auto md:mx-auto mt-5"
              value="next"
            />
            <p className="text-red-500 font-semibold text-center pt-5">
              {error && "Email has already used"}
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default StepTow;
