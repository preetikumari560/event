
const Theme = (props) => {
  const { setStyle ,style} = props;



  const firstStyle = "bg-gradient-to-t from-cyan-200 from-0% via-sky-200 via-50% to-slate-100 to-100%";
  const secondStyle = "bg-gradient-to-t from-[#cd9cf2] from-0% to-[#f6f3ff] to-100%";
  const thirdStyle = "bg-gradient-to-t from-[#c1dfc4] from-0% via-[#e3eeff] via-50% to-[#deecdd] to-100%";
  const fourthStyle = "bg-gradient-to-r from-[#f5f7fa] from-0% to-[#c3cfe2] to-100%";

  const firstButtonHandler = () => {
    setStyle( firstStyle);
  };

  const secondButtonHandler = () => {
      setStyle( secondStyle);
  };

  const thirdButtonHandler = () => {
    setStyle( thirdStyle);
  };

  const fourthButtonHandler = () => {

    setStyle( fourthStyle);
  };

  return (
    <div>

      <div className={style+" w-2/3  md:w-11/12  h-56 sm:h-72 m-auto  flex  flex-col justify-center  mt-10 md:mt-0     shadow-lg border-2"}>
    
          <h3 className="self-center text-lg md:text-2xl">You are Invited ! 🎉</h3>
         </div>
         <div className="flex w-10/12   sm:w-fit mx-auto mt-12 shadow-xl justify-center relative ">
        <button onClick={firstButtonHandler} className={firstStyle+" w-16 h-16  md:hover:shadow-md hover:text-white"}>Title</button>
        <button onClick={secondButtonHandler} className={secondStyle+" w-16 h-16 hover:shadow-md hover:text-white"}>Title</button>
        <button onClick={thirdButtonHandler} className={thirdStyle+" w-16 h-16 hover:shadow-md hover:text-white"}>Title</button>
        <button onClick={fourthButtonHandler} className={fourthStyle+" w-16 h-16  hover:shadow-md hover:text-white"}>Title</button>
    </div>
    </div>
  );
};

export default Theme;
