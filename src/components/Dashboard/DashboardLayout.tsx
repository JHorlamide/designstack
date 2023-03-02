import React from "react";
import Sidebar from "./Sidebar";

interface IProps {
  children: React.ReactNode;
  bgHight?: string;
}

const DashboardLayout = ({ children, bgHight }: IProps) => {
  return (
    <div className={`bg-light-gray ${bgHight}`}>
      <div className="container mx-auto grid grid-cols-12 gap-x-5 py-16 w-full">
        <div className="col-span-3">
          <Sidebar />
        </div>

        <div className="col-span-9 bg-white w-full rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
