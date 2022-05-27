import React, { useEffect, useRef, useState } from "react";
import Upbar from "../../Getstart/Upbar";
import "../style.scss";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { BannerShow, BannerState } from "../../../Redux/Reducers/bannerShow";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Auth/firebase/firebase";
import { signIn } from "../../../Redux/Reducers/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

const SignIn = () => {
  const banner = useSelector(BannerState);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [error, setError] = useState("");

  const handleValues = (data) => {
    if (data) {
      LogIn(data);
      setError("");
    }
  };

  //Update the Firebase User and Redux State
  const LogIn = (data) => {
    signInWithEmailAndPassword(auth, data?.email, data?.password) //send data to firebase
      .then((userCredential) => {
        const user = userCredential.user; //Data of last users has already register

        //Dispath the Action To update the state
        dispatch(signIn({ uid: user?.uid, email: user?.email }));

        localStorage.setItem("user", JSON.stringify(user));

        //Store the UserInfo Into LocalStorge
        navigate("/");
      })
      .catch((error) => {
        //Handle Errors
        setError(error.message);

        // ..
      });
  };
  useEffect(() => {
    dispatch(BannerShow(false));
  }, [banner, dispatch]);

  return (
    <div className="h-screen w-full cover">
      <Upbar hidebtn />

      <div className="flex justify-center h-screen max-w-3xl mx-auto">
        <div className="form h-[440px]  md:bg-gradient-to-t md:from-[#141414c2] md:to-black text-white  mx-[2rem] w-[50%] ">
          <h1 className="text-[2rem] font-bold mb-7 ">Sign In</h1>

          <form
            onSubmit={handleSubmit(handleValues)}
            className="form__sec flex flex-col items-center h-full space-y-[20px] md:mx-16"
          >
            <input
              name="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              autoComplete="off"
            />
            <p className="text-red-500 font-semibold">
              {errors.email?.message}
            </p>

            <input
              name="password"
              {...register("password", { required: true })}
              placeholder="Your password"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              autoComplete="on"
            />
            <p className="text-red-500 font-semibold">
              {errors.password?.message}
            </p>

            <input
              type="submit"
              value="Sign In"
              className="bg-[#e50914] md:text-[18px] font-semibold py-1 px-12 cursor-pointer w-full text-center "
            />

            <div className="flex justify-between w-full ">
              <div className="text-[#737373]">
                New to Netflix?
                <Link to="/getstart" className="hover:underline text-white">
                  Sign up now.
                </Link>
              </div>
              <div>
                <h1>NedHelp?</h1>
              </div>
            </div>
            <p className="text-red-500 font-semibold">
              {error && "Email or Password has error"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
