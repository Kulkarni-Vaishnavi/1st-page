import { useCallback } from "react";

const MacBookPro161 = () => {
  const onRectangle2Click = useCallback(() => {
    // Please sync "MacBook Pro 16" - 2" to the project
  }, []);

  return (
    <div className="relative bg-pink w-full h-[1117px] overflow-hidden text-left text-base text-gray-100 font-roboto">
      <div className="absolute top-[98px] left-[183px] text-[36px] font-semibold text-indigo-200 inline-block">
        Fit-Med
      </div>
      <div className="absolute top-[140px] left-[183px] text-[18px] text-indigo-100 inline-block">{`For a better Patient Safety  `}</div>
      <b className="absolute top-[317px] left-[183px] text-lg inline-block text-black">
        Login
      </b>
      <div className="absolute top-[367px] left-[183px] inline-block">
        Login by filling your details below
      </div>
      <div className="absolute top-[716px] left-[802px] inline-block">
        Forget Password
      </div>
      <div className="absolute top-[716px] left-[212px] inline-block">
        Remember Me
      </div>
      <div className="absolute top-[453px] left-[174px] bg-pink shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)_inset] [border:1px_solid_#000] box-border w-[779px] h-[76px]" />
      <div className="absolute top-[592px] left-[174px] bg-pink shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)_inset] [border:1px_solid_#000] box-border w-[779px] h-[76px]" />
      <div
        className="absolute top-[815px] left-[174px] bg-indigo-300 w-[779px] h-[76px] cursor-pointer"
        onClick={onRectangle2Click}
      />
      <b className="absolute top-[834px] left-[523px] text-lg inline-block text-white">
        Login
      </b>
      <div className="absolute top-[480px] left-[212px] font-semibold text-gray-200 inline-block">
        ID Number/Username
      </div>
      <div className="absolute top-[618px] left-[212px] font-semibold text-gray-200 inline-block">
        Password
      </div>
      <img
        className="absolute top-[624px] left-[891px] w-[24px] h-[24px]"
        alt=""
        src="../visibility-off.svg"
      />
      <img
        className="absolute top-[716px] left-[174px] w-[24px] h-[24px]"
        alt=""
        src="../check-box.svg"
      />
      <div className="absolute top-[0px] left-[1066px] bg-indigo-300 w-[662px] h-[1117px]" />
      <img
        className="absolute top-[446px] left-[940px] w-[429.21px] h-[429.21px] object-cover"
        alt=""
        src="../stetoscope@2x.png"
      />
      <img
        className="absolute top-[123px] left-[877px] w-[461.44px] h-[461.44px] object-cover"
        alt=""
        src="../medicine@2x.png"
      />
      <img
        className="absolute top-[393px] left-[1219px] w-[258.73px] h-[258.73px] object-cover"
        alt=""
        src="../hearth@2x.png"
      />
      <img
        className="absolute top-[678px] left-[1212px] w-[328.39px] h-[328.39px] object-cover"
        alt=""
        src="../pil@2x.png"
      />
    </div>
  );
};

export default MacBookPro161;
