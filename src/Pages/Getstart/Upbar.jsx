import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/Woozeee.svg";

const Upbar = ({ hidebtn }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-5">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="object-cover"
          width={160}
          height={100}
        />
      </div>

      <div className={`${hidebtn ? "hidden" : "flex space-x-10"}`}>
        <select
          name=""
          id=""
          className="px-5 py-1 bg-transparent border border-white text-white outline-0"
        >
          <option value="En" className="bg-gray-500">
            En
          </option>
          <option value="Ar" className="bg-gray-500">
            العربية
          </option>
        </select>

        <Link
          to="/signin"
          className="bg-[#e50914] px-[12px] py-[2px] md:px-[17px] md:py-[5px] font-semibold text-center text-[0.960rem] md:text-[1rem] text-white rounded"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Upbar;
