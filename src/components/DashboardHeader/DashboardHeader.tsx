import React from "react";

interface IProps {
  heading: string;
  rest?: React.ReactNode;
}

const DashboardHeader = ({ heading, rest }: IProps) => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-4 border-b-[1px] border-b-gray">
      <div>
        <h1 className="text-sm font-semibold">{heading}</h1>
      </div>

      {rest && <div>{rest}</div>}
    </div>
  );
};

export default DashboardHeader;
