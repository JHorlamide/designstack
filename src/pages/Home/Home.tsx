import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import ScrollIndicator from "../../assets/images/scroll_indication.png";
import HeroVerticalLine from "../../assets/icons/hero_line.svg";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  return (
    <Fragment>
      <section className="relative bg-none md:bg-[url('/hero_bg.png')] w-full h-full md:h-[800px] object-cover bg-center">
        <Navbar />

        {/* Mobile Hero */}
        <div className="md:hidden bg-[url('/mobile_hero.png')] bg-no-repeat w-full h-[545px] bg-cover">
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
      {/* Companies */}
      <section
        className="overflow-x-scroll scroll-smooth bg-dark-gray w-full h-[62.79px] flex justify-start items-center space-x-5
        md:justify-center md:overflow-hidden md:space-x-10 md:h-[140px]"
      >
        <div className="w-[80.14px] h-[25px] flex-shrink-0 mt-3 md:w-[172px] md:h-[34px]">
          <img
            src={"/Amazon.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[68.17px] h-[19.46px] flex-shrink-0  md:w-[152px] md:h-[30px]">
          <img
            src={"/Facebook.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[57.41px] h-[18.84px] flex-shrink-0  md:w-[128px] md:h-[42px]">
          <img
            src={"/Google.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[70.42px] h-[18.39px] flex-shrink-0  md:w-[157px] md:h-[41px]">
          <img
            src={"LinkedIn.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[60.55px] h-[17.94px] flex-shrink-0  md:w-[135px] md:h-[40px]">
          <img
            src={"/Logitech.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[60.55px] h-[17.94px]  md:w-[142px] md:h-[26px] flex-shrink-0">
          <img
            src={"/Philips.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Recent work */}
      <section className="relative bg-black py-10 md:py-32 z-0">
        <img
          src="vector_mobile.png"
          alt=""
          className="md:hidden absolute inset-y-0 top-10"
        />

        <img
          src="vector_desktop.png"
          alt=""
          className="hidden md:flex absolute inset-y-0 -top-14"
        />

        <div
          className="flex flex-col space-y-10 justify-center items-center 
          md:justify-start md:items-start"
        >
          <div
            className="flex flex-col justify-center space-y-2 space-x-0 md:space-y-0
            md:space-x-10 md:flex-row md:justify-start md:items-center md:container 
            md:ml-28"
          >
            <div
              className="space-y-4 flex flex-col justify-center items-center 
              md:space-y-0 md:space-x-16 md:flex-row md:justify-start"
            >
              <hr className="h-2 bg-white w-10 md:w-0.5 md:h-[48px] md:flex md:items-center" />
              <h1 className="text-3xl font-bold text-white max-w-2xl">
                Recent{" "}
                <span className="text-light-yellow md:text-white">works</span>
              </h1>
            </div>

            <hr className="hidden md:flex w-[1px] h-[96px] bg-gray" />

            <p className="text-gray text-[16px] text-center font-medium mx-12 max-w-xs md:text-start md:text-[20px]">
              Design as you know it is out the door. Design as you want it just
              arrived.
            </p>
          </div>

          <div
            className="overflow-x-scroll scroll-smooth scrollbar-hide flex space-x-5 pt-2 w-full 
            md:space-x-0 md:overflow-x-hidden md:justify-center md:items-center"
          >
            <Portfolio
              imageUrl="/portfolio_3.png"
              width="w-full md:w-[575px]"
              height="h-full h-[431.25px]"
            />

            <Portfolio
              imageUrl="/main_portfolio.png"
              width="w-full md:w-[850px]"
              height="h-full md:h-[716px]"
            />

            <Portfolio
              imageUrl="/portfolio_2.png"
              width="w-full md:w-[575px]"
              height="h-full h-[431.25px]"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
