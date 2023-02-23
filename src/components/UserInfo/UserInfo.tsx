import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";

const UserInfo = () => {
  return (
    <div className="border border-light-gray rounded-md w-full px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="flex space-x-5 items-center">
          <div className="w-16 h-16">
            <img src="/admin_avatar.png" alt="" className="w-full h-full" />
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg">Vladimir Raksha</h1>

            <form>
              <CustomBtn className="border-none text-blue capitalize">
                change avatar
              </CustomBtn>
            </form>
          </div>
        </div>

        <div className="">
          <p className="bg-blue text-white capitalize py-1 px-3 rounded-lg">
            premium membership
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
