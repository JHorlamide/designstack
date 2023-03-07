import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/CustomInput/Input";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomBtn from "../../../components/CustomBtn/CustomBtn";
import { LOGIN } from "../../../routes/ROUTES_CONSTANT";
import { registerUser } from "../../../api/user/user";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback((data: any) => {
    setLoading(true);

    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    registerUser(registerData)
      .then((response) => {
        setLoading(false);
        toast.success(response.message);
        navigate(LOGIN);
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

            <h1 className="text-xl text-white font-semibold">Sign Up</h1>
          </div>

          {/* form */}
          <form
            className="flex flex-col mt-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-16 justify-center items-center">
              <Input
                id="name"
                type="text"
                errors={errors}
                register={register}
                required={true}
                validationSchema={{
                  required: "name is required",
                }}
                placeholder="Name"
                className="bg-darkBlue border-b border-b-gray py-2 w-[450px] text-gray outline-none focus:border-non focus:border-gray focus:ring-none"
                parentClassName="flex flex-col space-y-2"
              />

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
              <div className="container mx-auto w-[387px]">
                <CustomBtn
                  type="submit"
                  className="bg-blue text-white text-xl text-center font-semibold py-3 w-full"
                >
                  {loading ? "registering..." : "Submit"}
                </CustomBtn>
              </div>

              <div className="flex justify-center items-center pt-5">
                <p className="text-center text-gray text-md">
                  By signing up, you agree to the{" "}
                  <Link to={"/terms-and-condition"} className="text-blue">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-black container mx-auto rounded-sm py-4 px-3 w-[400px]">
        <div className="flex justify-center items-center">
          <Link to={LOGIN} className="text-center text-gray">
            Already have an account?{" "}
            <span className="text-blue font-semibold">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
