import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BannerShow, BannerState } from "../Redux/Reducers/bannerShow";

const Mylist = () => {
  const banner = useSelector(BannerState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BannerShow(false));
  }, [banner, dispatch]);

  return <div>Mylist</div>;
};

export default Mylist;
