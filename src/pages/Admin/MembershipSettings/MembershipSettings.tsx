import React from "react";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import SidebarLayout from "../../../components/Dashboard/DashboardLayout";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import Toggle from "../../../components/Toggle/Toggle";
import MembershipPlan from "../../../components/MembershipPlan/MembershipPlan";

import { MEMBERSHIP_PLAN } from "../../Home/content";

const MembershipSettings = () => {
  return (
    <React.Fragment>
      <AdminNavbar />

      <SidebarLayout bgHight="h-auto">
        <DashboardHeader heading="Membership Settings" rest={<Toggle />} />

        <div className="flex -space-x-10 py-5">
          {MEMBERSHIP_PLAN.map((membership, idx) => (
            <MembershipPlan
              key={idx}
              headingColor={membership.headingColor}
              plan={membership.plan}
              amount={membership.amount}
              planDetails={membership.planDetails}
              planFeature={membership.planFeatures}
              paymentPlan={membership.paymentPlan}
              recommendPlan={membership?.recommended}
            />
          ))}
        </div>
      </SidebarLayout>
    </React.Fragment>
  );
};

export default MembershipSettings;
