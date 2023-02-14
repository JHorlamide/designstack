import React from "react";

interface Features2Props {
  title: string;
  details: string;
  image: string;
  style?: string;
}

const Features2 = ({ title, details, image, style }: Features2Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 md:justify-start md:items-start">
      <div className="h-[60px] w-[60px]">
        <img src={image} alt="icon" className="w-full h-full" />
      </div>

      <h1 className={`text-xl font-semibold md:font-normal ${style}`}>
        {title}
      </h1>

      <p className={`text-lg text-center font-normal max-w-xs md:text-start ${style}`}>
        {details}
      </p>
    </div>
  );
};

export default Features2;
