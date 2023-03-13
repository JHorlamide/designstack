import { Fragment, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  subscribe,
  getSubDetails,
  getSubManagementLink,
} from "../../api/subscription/subscription.api";
import AuthContext, { AuthContextType } from "../../context/AuthProvider";
import SubContext, { SubContextType } from "../../context/SubscriptionProvider";
import useHandleSub from "../../hooks/useHandleSub";
import CustomBtn from "../CustomBtn/CustomBtn";
import CheckoutModal from "./CheckoutModal";

interface IProps {
  headingColor: string;
  amount: string;
  subAmount: string;
  plan: string;
  subscriptionType: string;
  paymentPlan: string;
  planDetails: string;
  planFeature: string[];
  recommendPlan?: boolean;
}

const MembershipPlan = (props: IProps) => {
  const {
    headingColor,
    amount,
    plan,
    subAmount,
    subscriptionType,
    paymentPlan,
    planDetails,
    planFeature,
    recommendPlan,
  } = props;

  const { authUser } = useContext(AuthContext) as AuthContextType;
  const { saveSub } = useContext(SubContext) as SubContextType;

  const [userSubType, setUserSubType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actionType, setActionType] = useState("");
  const [checkoutLink, setCheckoutLink] = useState("");
  const [subDetails, setSubDetails] = useState<any>();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (authUser && authUser.user) {
      setUserId(authUser.user._id);
      setUserSubType(authUser.user.subscriptionType);
    }
  }, [userSubType]);

  const handleCancelSub = async () => {
    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    try {
      setLoading(true);

      const response = await getSubManagementLink({ signal });
      if (response.status === "Success") {
        setOpenModal(true);
        setActionType("cancel");
        setCheckoutLink(response.data.link);
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (signal.aborted) return;
      toast.error(error.message);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const fetchSubDetails = async () => {
    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    try {
      setLoading(true);

      if (userId) {
        const response = await getSubDetails({ signal });

        if (response.status === "Success") {
          const {
            data: { subDetails },
          } = response;

          const subObj = {
            subscription: {
              subscriptionCode: subDetails.subscriptionCode,
              subscriptionId: subDetails.subscriptionId,
              subscriptionReference: subDetails.subscriptionReference,
              subscriptionStatus: subDetails.subscriptionStatus,
              subscriptionType: subDetails.subscriptionType,
              authorization: subDetails.authorization,
            },
          };

          setLoading(false);
          setSubDetails(subDetails);
          saveSub(subObj);
        }
      }
    } catch (error: any) {
      setLoading(false);
      if (signal.aborted) return;
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchSubDetails();
  }, [userId]);

  return (
    <Fragment>
      <CheckoutModal
        actionType={actionType}
        isOpen={openModal}
        link={checkoutLink}
        closeModal={closeModal}
      />

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
            </div>
          </div>

          {subscriptionType === userSubType ? (
            <div className="flex justify-center items-center pt-5">
              <div className="flex flex-col justify-center items-center pt-12">
                <CustomBtn className="mx-auto px-9 py-4 cursor-default text-center text-green font-semibold capitalize">
                  your current plan
                </CustomBtn>

                <CustomBtn
                  onClick={handleCancelSub}
                  className="text-red text-xs outline-none"
                >
                  {loading ? "loading..." : "Cancel subscription"}
                </CustomBtn>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center pt-12">
              <CustomBtn
                onClick={handleCancelSub}
                className="mx-auto px-9 py-4 bg-blue text-white"
              >
                {loading ? "Loading..." : "Choose Plan"}
              </CustomBtn>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default MembershipPlan;
