import React, { useCallback, useEffect, useState } from "react";
import Input from "../CustomInput/Input";
import { useForm } from "react-hook-form";
import CustomBtn from "../CustomBtn/CustomBtn";
import { Link } from "react-router-dom";
import AuthContext, { AuthContextType } from "../../context/AuthProvider";
import { resetPassword } from "../../api/user/user";
import { toast } from "react-hot-toast";
import { checkTargetForNewValues } from "framer-motion";

const ChangePassword = () => {
  const { authUser, logOutUser } = React.useContext(
    AuthContext
  ) as AuthContextType;
  const [userId, setUserId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (authUser && authUser.user) {
      setUserId(authUser.user._id);
      return;
    }
  }, [userId]);

  const onSubmit = async (data: any) => {
    try {
      const updateObj = { userId, ...data };
      console.log(updateObj);
      const response = await resetPassword(updateObj);
      if (response.status === "Success") {
        toast.success(response.message);
        return logOutUser();
      }

      toast.error(response.message);
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        return toast.error(data.message);
      }

      toast.error(error.message);
    }
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <h1 className="text-lg font-semibold capitalize">change password</h1>
        <p className="text-gray">
          Lorem ipsum is a name for a common type of placeholder text.{" "}
        </p>
      </div>

      <form
        className="grid grid-cols-12 gap-x-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-8 space-y-12">
          <div className="flex flex-col space-y-6">
            <Input
              id="password"
              type="password"
              label="Old Password"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "Old password is required",
              }}
              placeholder="Enter your password"
              className="border border-light-gray py-2 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />

            <Input
              id="newPassword"
              type="password"
              label="New Password"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "New password is required",
              }}
              placeholder="Enter your password"
              className="border border-light-gray py-2 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />

            <Input
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: "Confirm password is required",
              }}
              placeholder="Enter your password"
              className="border border-light-gray py-2 pl-3 rounded-md w-[450px] text-gray outline-gray focus:border-gray focus:ring-gray"
              parentClassName="flex flex-col space-y-2"
            />
          </div>

          <CustomBtn
            type="submit"
            className="text-xl text-white font-bold capitalize bg-blue py-2 px-4 w-[450px]"
          >
            save changes
          </CustomBtn>
        </div>

        <div className="col-span-4 flex justify-center">
          <div className="bg-light-gray flex flex-col space-y-4 text-blue py-10 px-10 w-64 h-36">
            <Link to={""} className="capitalize">
              reset password
            </Link>

            <Link to={""} className="capitalize">
              deactivate account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
