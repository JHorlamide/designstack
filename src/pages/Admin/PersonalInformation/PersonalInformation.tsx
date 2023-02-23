import React from "react";
import AccountInfo from "../../../components/AccountInfo/AccountInfo";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import SidebarLayout from "../../../components/Dashboard/DashboardLayout";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import UserInfo from "../../../components/UserInfo/UserInfo";

const PersonalInformation = () => {
  return (
    <React.Fragment>
      <AdminNavbar />
      <SidebarLayout>
        <DashboardHeader heading="Personal Information" />
        
        <div className="px-5 py-5 w-full">
          <UserInfo />

          <AccountInfo />
        </div>
      </SidebarLayout>
    </React.Fragment>
  );
};

export default PersonalInformation;
