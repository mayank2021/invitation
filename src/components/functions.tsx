import React from "react";

const Card = ({
  bg,
  color,
  title,
  img,
}: {
  bg: string;
  color: string;
  title: string;
  img: string;
}) => (
  <div
    className={`${bg} w-full flex flex-col justify-center items-center gap-5 pt-10 pb-12`}
  >
    {/* <p className={`text-[40px] italic uppercase font-bold ${color}`}>{title}</p> */}
    <h3
      className={`${color} uppercase tracking-[0.1em] text-[40px] italic font-light`}
    >
      {title}
    </h3>
    <img
      className="w-[280px] rounded-xl shadow-lg"
      src={`/images/${img}`}
      alt={title}
    />
  </div>
);
const Functions = () => {
  return (
    <div className="flex justify-center flex-wrap lg:flex-nowrap">
      <Card
        bg="bg-[#FDC238]/20"
        color="text-[#FDC238]"
        title="HALDI"
        img="haldi.png"
      />
      <Card
        bg="bg-[#143D1F]/10"
        color="text-[#143D1F]"
        title="mahendi"
        img="mahendi.png"
      />
      <Card
        bg="bg-[#EBB7B7]/20"
        color="text-[#EBB7B7]"
        title="wedding"
        img="wedding.png"
      />
    </div>
  );
};

export default Functions;
