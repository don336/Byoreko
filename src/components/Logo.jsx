import React from "react";

const Logo = ({ imageSrc }) => {
  return (
    <div className="flex items-center space-x-3 raleway">
      <div className="h-12 bg-[#FF8C42] rounded-lg flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Logo Icon"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white font-bold text-xl">B</div>
        )}
      </div>
      <div className="font-montserrat">
        <h1 className="text-2xl font-bold">BYOREKO</h1>
        <p className="text-[#FF8C42] text-sm">Holdings Limited</p>
      </div>
    </div>
  );
};

export default Logo;
