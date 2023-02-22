import React from "react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  headingColor: string;
  amount: string;
  plan: string;
  paymentPlan: string;
  planDetails: string;
  planFeature: string[];
  recommendPlan?: boolean;
}

const PricingCard = (props: PricingCardProps) => {
  const {
    headingColor,
    amount,
    plan,
    paymentPlan,
    planDetails,
    planFeature,
    recommendPlan,
  } = props;

  return (
    <div
      className={`${
        recommendPlan ? "mt-0" : "mt-0"
      } container mx-auto px-5 py-5 md:container-none md:mx-0 md:w-[413px]`}
    >
      <div className={`${headingColor}`}>
        {recommendPlan && (
          <div className="pt-4 md:pb-12">
            <div className="w-full bg-black opacity-[0.17] py-3 flex justify-center items-center">
              <p className="text-center text-white capitalize">
                recommended for you
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-1 justify-center items-center px-10 py-12">
          <div>
            <h1 className="text-white text-3xl font-bold">{amount}</h1>
            <p className="text-white text-xs">{paymentPlan}</p>
          </div>
        </div>
      </div>

      <div className="bg-light-black py-12">
        <div className="container mx-auto bg-white w-64 -mt-20">
          <div className="flex flex-col justify-center items-center px-12 py-[20px] md:py-2">
            <h1 className="text-xl text-center font-semibold">{plan}</h1>
            <p
              className={`text-gray text-center whitespace-pre-line md:whitespace-nowrap ${
                recommendPlan && "md:whitespace-pre-line"
              }`}
            >
              {planDetails}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 pt-16">
          <div className="pl-10 text-white">
            <h1 className="text-lg font-normal">What's included:</h1>
          </div>

          <div className="flex flex-col space-y-2 pl-12 text-white">
            {planFeature.map((plan, idx) => (
              <div key={idx} className="flex space-x-2">
                <div className="">
                  <img src="/check_mark.svg" alt="" className="" />
                </div>

                <p className="text-sm">{plan}</p>
              </div>
            ))}

            {/* <div className="flex space-x-2">
              <div className="">
                <img src="/check_mark.svg" alt="" className="" />
              </div>

              <p className="text-sm">Design queue</p>
            </div>

            <div className="flex space-x-2">
              <div className="">
                <img src="/check_mark.svg" alt="" className="" />
              </div>

              <p className="text-sm">Unlimited brands</p>
            </div>

            <div className="flex space-x-2">
              <div className="">
                <img src="/check_mark.svg" alt="" className="" />
              </div>

              <p className="text-sm">Unlimited brands</p>
            </div> */}
          </div>
        </div>

        <div className="flex justify-center items-center pt-12">
          <Link
            to={"/get-started"}
            className="mx-auto px-9 py-4 bg-blue text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
