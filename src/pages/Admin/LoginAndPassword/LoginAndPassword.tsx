import React from "react";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import ChangePassword from "../../../components/ChangePassword/ChangePassword";
import SidebarLayout from "../../../components/DashboardLayout/DashboardLayout";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";

const LoginAndPassword = () => {
  return (
    <React.Fragment>
      <AdminNavbar />

      <SidebarLayout bgHight="h-screen">
        <DashboardHeader heading="Login & Password" />

        <div className="px-5 py-5 w-full">
          <ChangePassword />
        </div>
      </SidebarLayout>
    </React.Fragment>
  );
};

export default LoginAndPassword;
