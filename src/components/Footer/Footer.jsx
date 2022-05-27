import "./style.scss";
import { useLocation } from "react-router-dom";
import { BlackStyle, isNotBlack } from "../../styles/style";
const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className={pathname !== "/getstart" ? isNotBlack : BlackStyle}>
      <div className="ul_wrapper max-w-[1000px] mx-auto">
        <h1 className="text-[16px] mb-5">Questions? Contact us.</h1>

        {/*Footer Li*/}
        <ul className="space-y-3">
          {/* <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
          <li>Audio and Subtitles</li>
          <li>Media Center</li>
          <li>Contact Us</li>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li> */}
        </ul>

        <div className="space-x-10 pt-5">
          <select className="mb-[3rem] md:mb-[3rem]  px-2 py-2 bg-transparent border border-[#757575] text-[#757575] outline-0 text-[16px]">
            <option value="En" className="bg-gray-500 text-white">
              En
            </option>

            <option value="Ar" className="bg-gray-500 text-white">
              العربية
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
