import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  NetflixOriginals,
  fetchNetflixOriginals,
} from "../../Redux/Reducers/moviesSlice";

import { cutWords } from "../../utility";

const Banner = () => {
  const randomInfo = useSelector(NetflixOriginals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNetflixOriginals());
  }, [dispatch]);

  return (
    <div
      className="text-white object-contain h-[590px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${randomInfo?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className="text-[3rem] font-bold pb-[0.3rem]">
          {randomInfo?.title || randomInfo?.name || randomInfo?.original_name}
        </h1>

        <div>
          <button className="bg-[#171717] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded">
            play
          </button>
          <button className="bg-[#171717] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded">
            Read More
          </button>
        </div>

        <h1 className="w-[45rem] leading-[1.6] text-[1.1rem] font-bold pt-[1rem] max-w-[360px] h-[80px]">
          {cutWords(randomInfo?.overview, 150)}
        </h1>
      </div>

      <div className="fade" />
    </div>
  );
};

export default Banner;
