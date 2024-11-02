import React from "react";

const Card = ({
  title,
  img,
  name,
}: {
  title: string;
  img: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto p-4">
      <h2 className="uppercase text-xl font-semibold text-[#BF4E69] mb-4 after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#BF4E69] after:mt-1">
        {title}
      </h2>

      <div className="rounded-lg overflow-hidden border-2 border-black">
        <img
          src={img}
          alt={title}
          className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] object-cover"
        />
      </div>

      <h3 className="text-xl text-[#BF4E69]/80 font-light uppercase mt-2 tracking-wider">
        {name}
      </h3>
    </div>
  );
};

const Couple = () => {
  return (
    <div className=" bg-[#BF4E69]/10 py-[40px]">
      <div className="flex md:max-w-[800px] mx-auto">
        <Card title="groom" img="/images/kamal.png" name="kamal" />
        <Card title="bride" img="/images/priyanka.png" name="priyanka" />
      </div>
    </div>
  );
};

export default Couple;
