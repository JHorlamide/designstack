import React, { useState } from "react";

export interface IAuthorization {
  bank: string;
  last4: string;
  signature: string;
  cardType: string;
}

export interface ISubscription {
  subscriptionStatus: string;
  subscriptionReference: string;
  subscriptionType: string;
  authorization: IAuthorization[];
  subscriptionId: string;
  subscriptionCode: string;
}

export interface SubType {
  subscription: ISubscription | null;
}

export interface SubContextType {
  userSubscription: SubType;
  saveSub: (sub: SubType) => void;
}

const SubContext = React.createContext<SubContextType | undefined>(
  {} as SubContextType
);

export const SubscriptionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userSubscription, setUserSubscription] = useState<SubType>({
    subscription: null,
  });

  const saveSub = (sub: SubType) => {
    setUserSubscription({
      ...userSubscription,
      subscription: sub.subscription,
    });
  };

  return (
    <SubContext.Provider value={{ userSubscription, saveSub }}>
      {children}
    </SubContext.Provider>
  );
};

export default SubContext;
