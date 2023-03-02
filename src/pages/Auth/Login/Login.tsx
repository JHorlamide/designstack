import { useCallback } from "react";
import Input from "../../../components/CustomInput/Input";
import { useForm } from "react-hook-form";
import CustomBtn from "../../../components/CustomBtn/CustomBtn";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
    reset();
  }, []);

  return (
    <div className="bg-black h-screen">
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
                  required={false}
                  validationSchema={{
                    required: "Please check the box",
                  }}
                  className="form-checkbox h-5 w-5 text-light-pink"
                />
                <p className="text-white text-md">Keep me sign in</p>
              </div>

              <div className="container mx-auto w-[387px]">
                <CustomBtn
                  type="submit"
                  className="bg-blue text-white text-xl text-center font-semibold py-3 w-full"
                >
                  Login
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
    </div>
  );
};

export default Login;
