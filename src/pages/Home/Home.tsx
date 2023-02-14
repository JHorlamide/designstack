import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import ScrollIndicator from "../../assets/images/scroll_indication.png";
import HeroVerticalLine from "../../assets/icons/hero_line.svg";
import Portfolio from "./components/Portfolio";
import "./style.css";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import { Link } from "react-router-dom";
import { DESIGN_TYPE, PRICING } from "./content";
import PricingCard from "./components/PricingCard";

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
      <section className="bg-light-dark lg:pb-14 mix-blend-luminosity">
        {/* Horizontal & Vertical Lines */}
        <div className="relative h-full border-t-2 border-gray">
          <div className="hidden lg:block absolute top-[160px]  w-full h-0.5 bg-gray"></div>
          <div className="hidden lg:block absolute left-20 -ml-0.5 w-0.5 h-[877px] bg-gray"></div>
          <div className="hidden lg:block absolute right-20 -ml-0.5 w-0.5 h-[877px] bg-gray"></div>
        </div>

        <div className="flex flex-col space-y-5 space-x-0 md:justify-center md:items-center">
          <div className="flex flex-col justify-center items-center space-y-5  md:space-y-0">
            {/* Text Container */}
            <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-5 md:py-5 lg:space-x-20 lg:py-10">
              <div className="flex flex-col space-y-6 space-x-0 justify-center items-center md:flex-row md:justify-start md:items-start md:space-y-0 md:space-x-10">
                <div className="mt-6 bg-white w-10 h-1 md:w-0.5 md:h-6 text-white md:mt-3"></div>
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
            <div className="lg:container lg:mx-auto flex flex-col space-y-1 space-x-0 justify-center items-center md:flex-row md:space-y-0 md:space-x-5 md:pt-10 lg:px-16">
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

            {/* Designjoy hero container */}
            <div className="container mx-auto bg-mobileBlueHeroBg md:bg-blueHeroBg bg-cover object-center py-16 px-14">
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

      {/* It’s “you’ll never go back” better */}
      <section className="bg-semi-gray py-20">
        <div className="container mx-auto flex flex-col justify-center items-center space-y-8 space-x-0 px-5 md:space-y-24 md:space-x-10">
          <div className="flex flex-col space-y-5 space-x-0 md:flex-row md:space-y-0 md:space-x-16">
            <div className="flex flex-col justify-center items-center space-y-3 md:justify-start md:items-start md:flex-row md:space-x-10">
              <div className="h-1.5 w-10 bg-blue md:h-8 md:w-[3px] md:mt-5" />
              <h1 className="text-2xl text-blue text-center font-bold md:text-start md:max-w-xs">
                It’s “you’ll never go back”{" "}
                <span className="text-yellow md:text-blue">better</span>
              </h1>
            </div>

            <div className="hidden md:flex justify-center items-center w-[1px] h-20 bg-gray"></div>

            <div className="max-w-lg">
              <p className="text-lg text-gray text-center font-normal md:text-justify md:max-w-xs">
                Designjoy replaces unreliable freelancers and expensive agencies
                for one flat monthly fee, with designs delivered so fast that it
                will blow your mind.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal & Vertical Lines */}
        <div className="hidden lg:block relative h-full md:border-t-2 border-gray md:mt-20">
          <div className="hidden lg:block absolute top-[298px]  w-full h-0.5 bg-gray"></div>
          <div className="hidden lg:block absolute left-20 -ml-0.5 w-0.5 h-[300px] bg-gray"></div>
          <div className="hidden lg:block absolute right-20 -ml-0.5 w-0.5 h-[300px] bg-gray"></div>
        </div>

        {/* Features */}
        <div className="container mx-auto mt-16 md:mt-16 lg:mt-0">
          <div className="flex flex-col justify-between items-center space-y-8 space-x-0 md:flex-row md:space-y-0 md:space-x-14 md:px-16 md:py-5">
            <Features2
              title="Totally async"
              details={`
              Don't like meetings? We don't either; so much so that we've outlawed them completely.`}
              image="/total_async.png"
            />
            <Features2
              title="Manage with Trello"
              details={`Manage your design board using Trello. View active, queued and completed tasks with ease.`}
              image="/manage_with_trello.png"
            />
            <Features2
              title="Invite unlimited team members"
              details={`Invite your entire team, so anyone can submit requests and track their progress.`}
              image="/invite_unlimited_team.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-light-dark py-16 md:py-16">
        <div className="container mx-auto flex flex-col justify-center items-center space-y-5 px-5 md:flex-row md:items-start md:space-y-0 md:space-x-12">
          <div className="flex flex-col justify-center items-center space-y-5 space-x-0 md:flex-row md:justify-start md:space-y-0 md:space-x-6">
            <div className="h-1 w-10 bg-white md:h-8 md:w-[3px] md:-mt-8"></div>
            <h1 className="text-2xl text-center text-white font-bold md:text-start md:max-w-xs">
              Membership benefits
            </h1>
          </div>

          <div className="max-w-xs">
            <p className="text-lg text-gray text-center font-normal md:text-start">
              Design as you know it is out the door. Design as you want it just
              arrived.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="text-md text-white text-center font-bold py-3.5 px-3 bg-blue w-48"
            >
              see plans
            </Link>
          </div>
        </div>

        {/* Horizontal & Vertical Lines */}
        <div className="hidden lg:block relative h-full md:border-t-2 border-gray md:mt-20">
          {/* <div className="hidden lg:block absolute top-[298px]  w-full h-0.5 bg-gray"></div> */}
          <div className="hidden lg:block absolute left-20 -ml-0.5 w-0.5 h-screen bg-gray"></div>
          <div className="hidden lg:block absolute right-20 -ml-0.5 w-0.5 h-screen bg-gray"></div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col space-y-10 mt-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-20 md:gap-y-16 md:justify-center md:items-center lg:px-20">
            <Features2
              title="Design board"
              details="Add as many design requests to your board as you'd like."
              image="/design_board.png"
              style="text-white"
            />

            <Features2
              title="Lightning fast delivery"
              details="Get your design one at a time in just a few days on average."
              image="/lightning_fast.png"
              style="text-white"
            />

            <Features2
              title="Fixed monthly rate"
              details="No surprises here! Pay the same fixed price each month."
              image="/fixed_monthly_rate.png"
              style="text-white"
            />

            <Features2
              title="Top-notch quality"
              details="Insane design quality at your fingertips whenever you need it."
              image="/top_notch_quality.png"
              style="text-white"
            />

            <Features2
              title="Flexible and scalable"
              details="Scale up or down as needed, and pause or cancel at anytime."
              image="/flexible_scalable.png"
              style="text-white"
            />

            <Features2
              title="Unique and all yours"
              details="Each of your designs is made especially for you and is 100% yours."
              image="/unique_yours.png"
              style="text-white"
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-10 space-y-16">
        {/* Horizontal & Vertical Lines */}
        <div className="hidden lg:block relative h-full">
          <div className="hidden lg:block relative h-full md:border-t-2 border-gray top-48"></div>
          <div className="hidden lg:block absolute left-20 -ml-0.5 w-0.5 h-[1145px] bg-gray"></div>
          <div className="hidden lg:block absolute right-20 -ml-0.5 w-0.5 h-[1145px] bg-gray"></div>
        </div>

        <div className="container mx-auto flex flex-col justify-center items-center space-y-5 px-5 md:flex-row md:px-10 md:items-start md:space-y-0 md:space-x-12 md:align-top">
          <div className="flex flex-col justify-center items-center space-y-5 space-x-0 md:flex-row md:justify-start md:space-y-0 md:space-x-6">
            <div className="h-1 w-10 bg-white md:h-8 md:w-[3px] md:-mt-8"></div>
            <h1 className="text-2xl text-center text-white font-bold max-w-xs md:text-start md:max-w-[350px]">
              Apps, websites, logos &{" "}
              <span className="text-yellow md:text-white">more</span>.
            </h1>
          </div>

          <div className="hidden md:block h-12 w-[1px] bg-gray"></div>

          <div className="max-w-xs">
            <p className="text-lg text-gray text-center font-normal md:text-start">
              Design as you know it is out the door. Design as you want it just
              arrived.
            </p>
          </div>
        </div>

        <div className="relative container mx-auto lg:px-28">
          <div className="flex flex-col justify-start px-12 space-y-8 md:justify-center md:items-center md:grid md:grid-cols-3 gap-x-12 gap-y-5">
            {DESIGN_TYPE.map((designs, idx) => (
              <div
                key={idx}
                className={`z-10 relative bg-light-dark flex justify-center items-center h-[61.54px] ${designs.width} border-l-4 border-l-purple`}
              >
                <p className="absolute text-white text-xl whitespace-nowrap ml-20 w-full">
                  {designs.name}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute inset-y-0 z-0 top-80 left-64 h-[594.04px]">
            <img src="/spiral_web.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="bg-semi-gray py-10">
        {/* Horizontal & Vertical Lines */}
        <div className="hidden lg:block relative h-full">
          <div className="hidden lg:block relative h-full md:border-t-2 border-gray top-48"></div>
          <div className="hidden lg:block absolute left-20 -ml-0.5 w-0.5 h-[1145px] bg-gray"></div>
          <div className="hidden lg:block absolute right-20 -ml-0.5 w-0.5 h-[1145px] bg-gray"></div>
        </div>

        <div className="container mx-auto flex flex-col justify-center items-center space-y-2 px-5 md:flex-row md:px-10 md:items-start md:space-y-0 md:space-x-12 md:align-top">
          <div className="flex flex-col justify-center items-center space-y-5 space-x-0 md:flex-row md:justify-start md:space-y-0 md:space-x-6">
            <div className="h-1 w-10 bg-blue md:h-8 md:w-[3px] md:-mt-8"></div>
            <h1 className="text-2xl text-center text-blue font-bold max-w-xs md:text-start md:max-w-[350px]">
              Let's keep it{" "}
              <span className="text-yellow md:text-white">simple.</span>
            </h1>
          </div>

          <div className="hidden md:block h-12 w-[1px] bg-gray"></div>

          <div className="max-w-xs">
            <p className="text-lg text-blue text-center font-normal md:text-start">
              Choose a plan that's right for you.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          {PRICING.map((pricing, idx) => (
            <PricingCard
              key={idx}
              headingColor={pricing.headingColor}
              plan={pricing.plan}
              amount={pricing.amount}
              planDetails={pricing.planDetails}
              planFeature={pricing.planFeatures}
              paymentPlan={pricing.paymentPlan}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
