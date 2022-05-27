const Fettures = ({ isLeft, data }) => {
  const RightStyle =
    "flex flex-col md:flex-row justify-center items-center md:justify-between md:max-w-6xl mx-auto text-white py-[70px]";
  const LeftStyle =
    "flex flex-col items-center md:flex-row-reverse md:max-w-6xl md:mx-auto justify-between text-white md:py-[70px] md:w-full  ";

  return (
    <>
      {data.map(({ title, dec, Image, id }) => (
        <div
          className="border-t-8 border-gray-700 overflow-hidden p-[50px]"
          key={id}
        >
          <div className={isLeft ? LeftStyle : RightStyle}>
            <div className="text-center font-semibold md:text-left max-w-[580px] md:font-bold">
              <h1 className="md:text-[3.125rem] text-[2.125rem] mb-5 leading-[1.1em]">
                {title}
              </h1>
              <h1 className="md:text-[1.625rem] text-[1rem]">{dec}</h1>
            </div>

            <div>
              <img src={Image} alt="homePoster" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Fettures;
