import React from "react";

const Badge = ({ image, title }) => {
  return (
    <div className="font-bold text-xl rounded-full flex gap-3 border-2 border-gray-600 bg-white/10 text-white px-6 py-1 items-center hover:bg-white/20 ">
      <img src={image} alt="" width={20} height={20} />
      <h2>{title}</h2>
    </div>
  );
};

export default Badge;
