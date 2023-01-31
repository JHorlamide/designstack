import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import ScrollIndicator from "../../assets/images/scroll_indication.png";
import HeroVerticalLine from "../../assets/icons/hero_line.svg";

import AmazonLogo from "../../assets/images/Amazon.png";
import FacebookLogo from "../../assets/images/Facebook.png";
import GoogleLogo from "../../assets/images/Google.png";
import LinkedInLogo from "../../assets/images/LinkedIn.png";
import LogiTech from "../../assets/images/Logitech.png";
import PhilipsLogo from "../../assets/images/Philips.png";

const Home = () => {
  return (
    <Fragment>
      <section className="relative bg-none md:bg-heroBg w-full h-full md:h-[800px] object-cover bg-center">
        <Navbar />

        {/* Mobile Hero */}
        <div className="md:hidden bg-heroBgMobile bg-no-repeat w-full h-[545px] bg-cover">
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="container mx-auto flex flex-col justify-center items-center px-3 py-16 space-y-5">
              <h1 className="text-3xl font-bold text-center">
                A design agency with a twist
              </h1>
              <p className="text-lg text-gray max-w-xs text-center font-medium">
                Design subscriptions to <br /> scale your business.
              </p>

              <CustomBtn className="capitalize text-white font-semibold bg-blue px-6 py-3">
                get started
              </CustomBtn>
            </div>

            <div className="w-[116px] h-[80.07px]">
              <img
                src={ScrollIndicator}
                alt="scroll-indicator"
                className="w-full h-full bg-center object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden md:block">
          <div className="flex container mx-auto justify-center items-center pt-28">
            <div className="flex space-x-24">
              <div className="">
                <img src={HeroVerticalLine} alt="vertical-line" className="" />
              </div>

              <div className="flex flex-col justify-start space-y-5">
                <h1 className="text-5xl max-w-xl">
                  A design agency with a twist
                </h1>
                <p className="text-xl text-gray max-w-xs font-medium">
                  Design subscriptions to <br /> scale your business.
                </p>

                <CustomBtn className="capitalize text-white text-lg font-semibold bg-blue px-4 py-5 w-52">
                  get started
                </CustomBtn>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex justify-end md:px-0 lg:px-28">
            <img src={ScrollIndicator} alt="scroll-indicator" className="" />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center bg-dark-gray w-full h-[62.79px]">
        <div className="overflow-x-auto scroll-smooth">
          <div className="flex items-center space-x-5">
            <div className="w-[77.14px] h-[15.25px] flex-shrink-0">
              <img
                src={AmazonLogo}
                alt="amazon-logo"
                className="w-full h-full"
              />
            </div>

            <div className="w-[68.17px] h-[13.46px] flex-shrink-0">
              <img
                src={FacebookLogo}
                alt="amazon-logo"
                className="w-full h-full"
              />
            </div>

            <div className="w-[57.41px] h-[18.84px] flex-shrink-0">
              <img
                src={GoogleLogo}
                alt="amazon-logo"
                className="w-full h-full"
              />
            </div>

            <div className="w-[70.42px] h-[18.39px] flex-shrink-0">
              <img
                src={LinkedInLogo}
                alt="amazon-logo"
                className="w-full h-full"
              />
            </div>

            <div className="w-[60.55px] h-[17.94px] flex-shrink-0">
              <img src={LogiTech} alt="amazon-logo" className="w-full h-full" />
            </div>

            <div className="w-[60.55px] h-[17.94px] flex-shrink-0">
              <img
                src={PhilipsLogo}
                alt="amazon-logo"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
