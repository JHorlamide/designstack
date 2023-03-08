import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/CustomInput/Input";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomBtn from "../../../components/CustomBtn/CustomBtn";
import AuthContext, {
  AuthType,
  AuthContextType,
} from "../../../context/AuthProvider";
import {
  REGISTER,
  PERSONAL_INFORMATION,
} from "../../../routes/ROUTES_CONSTANT";
import { loginUser } from "../../../api/user/user";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { saveAuth } = React.useContext(AuthContext) as AuthContextType;
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback((data: any) => {
    setLoading(true);

    const loginData = {
      email: data.email,
      password: data.password,
    };

    loginUser(loginData)
      .then((response) => {
        setLoading(false);

        const authData: AuthType = {
          user: response.data.user,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        };

        // Store User Credential in Context State
        saveAuth(authData);

        toast.success(response.message);
        navigate(PERSONAL_INFORMATION);

        localStorage.setItem("_token", response.data.accessToken);
        localStorage.setItem("_refreshToken", response.data.refreshToken);
      })
      .catch((error: any) => {
        setLoading(false);

        if (error.status === "FETCH_ERROR") {
          return toast.error("Server error: Server seems to be down");
        }

        if (error.response) {
          return toast.error(error.response.data.message);
        }

        toast.error(error.message);
      });
  }, []);

  return (
    <div className="bg-dark-gray h-screen">
      <div className="relative flex justify-center items-center">
        <div className="bg-darkBlue mt-24 w-[571px] h-[614px] py-10 px-6">
          {/* form heading */}
          <div className="flex justify-center items-center space-x-10">
            <div className="w-[173.21px] h-[29.56px]">
              <img src="/logo_white.png" alt="" className="w-full h-full" />
            </div>
            <div className="h-5 w-1 bg-pink"></div>

            <h1 className="text-xl text-white font-semibold">Sign In</h1>
          </div>

          {/* form */}
          <form
            className="flex flex-col mt-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-16 justify-center items-center">
              <Input
                id="email"
                type="email"
                errors={errors}
                register={register}
                required={true}
                validationSchema={{
                  required: "Email is required",
                }}
                placeholder="Email"
                className="bg-darkBlue border-b border-b-gray py-2 w-[450px] text-gray outline-none focus:border-non focus:border-gray focus:ring-none"
                parentClassName="flex flex-col space-y-2"
              />

              <Input
                id="password"
                type="password"
                errors={errors}
                register={register}
                required={true}
                validationSchema={{
                  required: "Password is required",
                }}
                placeholder="password"
                className="bg-darkBlue border-b border-b-gray py-2 w-[450px] text-gray outline-none focus:border-non focus:border-gray focus:ring-none"
                parentClassName="flex flex-col space-y-2"
              />
            </div>

            <div className="flex flex-col space-y-4 mt-10">
              <div className="flex space-x-2 pl-10">
                <Input
                  id="signedIn"
                  type="checkbox"
                  errors={errors}
                  register={register}
                  className="form-checkbox h-5 w-5 text-light-pink"
                />
                <p className="text-white text-md">Keep me sign in</p>
              </div>

              <div className="container mx-auto w-[387px]">
                <CustomBtn
                  type="submit"
                  className="bg-blue text-white text-xl text-center font-semibold py-3 w-full"
                >
                  {loading ? "Loading" : "Login"}
                </CustomBtn>
              </div>

              <div className="flex justify-center items-center pt-10">
                <Link
                  to={"/forgot-password"}
                  className="text-center text-white text-md"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-black container mx-auto rounded-sm py-4 px-3 w-[400px]">
        <div className="flex justify-center items-center">
          <Link to={REGISTER} className="text-center text-gray">
            Don’t have an account?{" "}
            <span className="text-blue font-semibold">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
