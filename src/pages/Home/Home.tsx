import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import ScrollIndicator from "../../assets/images/scroll_indication.png";
import HeroVerticalLine from "../../assets/icons/hero_line.svg";
import Portfolio from "./Portfolio/Portfolio";
import "./style.css";
import Features from "./Features/Features";

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
        className="overflow-x-scroll scroll-smooth bg-dark-gray flex justify-center items-center
        w-full h-[62.79px] space-x-5 md:justify-center md:space-x-10 md:h-[140px] scrollbar-hide"
      >
        <div className="w-[80.14px] h-[25px] mt-3 md:w-[150px] md:h-[25px] lg:w-[172px] lg:h-[34px] flex-shrink-0">
          <img
            src={"/Amazon.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[68.17px] h-[19.46px] md:w-[150px] md:h-[25px] lg:w-[152px] lg:h-[30px] flex-shrink-0">
          <img
            src={"/Facebook.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[57.41px] h-[18.84px] md:w-[98px] md:h-[25px] lg:w-[128px] lg:h-[42px] flex-shrink-0">
          <img
            src={"/Google.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[70.42px] h-[18.39px] md:w-[98px] md:h-[25px] lg:w-[157px] lg:h-[41px] flex-shrink-0">
          <img
            src={"LinkedIn.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[60.55px] h-[17.94px] md:w-[98px] md:h-[25px] lg:w-[135px] lg:h-[40px] flex-shrink-0">
          <img
            src={"/Logitech.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-[60.55px] h-[17.94px] md:w-[98px] md:h-[25px] lg:w-[142px] lg:h-[26px] flex-shrink-0">
          <img
            src={"/Philips.png"}
            alt="amazon-logo"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Recent work */}
      <section className="relative bg-black py-10 md:py-28 z-0 w-full">
        <img
          src="vector_mobile.png"
          alt=""
          className="md:hidden absolute inset-y-0 top-10"
        />

        <img
          src="vector_desktop.png"
          alt=""
          className="hidden md:flex w-full h-auto absolute inset-y-0 bottom-52"
        />

        <div
          className="flex flex-col space-y-10 justify-center items-center 
          md:justify-start md:items-start"
        >
          <div
            className="flex flex-col justify-center space-y-2 space-x-0 md:space-y-0
            md:space-x-10 md:flex-row md:justify-start md:items-center md:container md:pl-28"
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

            <p className="text-gray text-[20px] text-center font-medium mx-12 max-w-xs md:text-start md:text-[20px]">
              Design as you know it is out the door. Design as you want it just
              arrived.
            </p>
          </div>

          <div
            className="overflow-x-auto scroll-smooth scrollbar-hide flex space-x-5 pt-2 w-full 
            md:space-x-0 md:justify-center md:items-center scrollbar-hide"
          >
            <Portfolio
              imageUrl="/portfolio_3.png"
              width="w-full md:w-[375px] lg:w-[575px]"
              height="h-full lg:h-[431.25px]"
            />

            <Portfolio
              imageUrl="/main_portfolio.png"
              width="w-full md:w-[530px] lg:w-[850px]"
              height="h-full lg:h-[716px]"
            />

            <Portfolio
              imageUrl="/portfolio_2.png"
              width="w-full md:w-[375px] lg:w-[575px]"
              height="h-full lg:h-[431.25px]"
            />
          </div>
        </div>
      </section>

      {/* Sub recent works */}
      <section className="bg-black border-t-2 border-t-gray py-10 mix-blend-luminosity">
        <div className="flex flex-col space-y-5 space-x-0 md:justify-center md:items-center">
          <div className="container mx-auto flex flex-col justify-center space-y-5  md:space-y-0">
            {/* Text Container */}
            <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-10">
              <div className="flex flex-col space-y-6 space-x-0 justify-center items-center md:flex-row md:justify-start md:items-start md:space-y-0 md:space-x-10">
                <div className="bg-white w-10 h-1 md:w-0.5 md:h-6 text-white md:mt-3"></div>
                <h1 className="text-2xl text-white font-bold text-center max-w-xs md:text-start md:max-w-sm">
                  We didn't reinvent the wheel, just{" "}
                  <span className="text-light-yellow md:text-white">
                    design
                  </span>
                </h1>
              </div>

              <div className="hidden md:flex w-[1px] h-20 bg-gray"></div>

              <div className="">
                <p className="text-gray text-[20px] text-center font-medium mx-12 max-w-xs md:text-start md:text-[20px]">
                  Design as you know it is out the door. Design as you want it
                  just arrived.
                </p>
              </div>
            </div>

            {/* Features Container */}
            <div className="flex flex-col space-y-1 space-x-0 justify-center items-center md:flex-row md:space-y-0 md:space-x-5 md:pt-10">
              <Features
                imageUrl="/mail_icon.svg"
                text="Subscribe to a plan & request as many designs as you'd like."
              />

              <Features
                imageUrl="/calender_icon.svg"
                text="Receive your design within a few business days on average, Monday to Friday."
              />

              <Features
                imageUrl="badge_icon.svg"
                text="We'll revise the designs until you're 100% satisfied."
              />
            </div>

            <div className="bg-mobileBlueHeroBg md:bg-blueHeroBg bg-cover object-center py-16 px-14">
              <div
                className="flex flex-col justify-center items-center space-y-8 space-x-0 lg:grid
                grid-cols-12 lg:items-start lg:space-y-0 lg:space-x-10"
              >
                <div className="col-span-6 flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className="w-auto h-auto flex justify-center items-center">
                    <img src="/quote.png" alt="quotation-mark" />
                  </div>

                  <div className="flex flex-col justify-center items-center space-y-2 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-10">
                    <h1 className="text-[32px] text-white text-center font-medium max-w-xs lg:text-start lg:text-4xl lg:max-w-lg">
                      Designjoy shows that they know the art of subtlety.
                    </h1>

                    <div className="lg:hidden lg:-mt-20">
                      <div className="h-[1px] w-10 bg-white lg:w-[1px] lg:h-24 lg:-mt-20"></div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center items-center col-span-2">
                  <div className="h-[1px] w-10 bg-white lg:w-[1px] lg:h-24"></div>
                </div>

                <div className="col-span-4 flex flex-col justify-center items-center space-y-1 lg:items-start">
                  <div className="">
                    <img src="/avatar.png" alt="" />
                  </div>

                  <div className="">
                    <p className="text-[14px] text-white text-center font-medium lg:text-start lg:text-[20px]">
                      Kevin O'Leary
                    </p>

                    <p className="text-[14px] text-white text-center font-normal lg:text-start lg:text-[20px]">
                      chief election commissioner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
