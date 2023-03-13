import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getSubManagementLink } from "../api/subscription/subscription.api";

const useHandleSub = (subAction: string) => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [checkoutLink, setCheckoutLink] = useState("");

  const handleManageSub = async () => {
    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    try {
      setLoading(true);

      const response = await getSubManagementLink({ signal });
      if (response.status === "Success") {
        setOpenModal(true);
        setActionType(subAction);
        setCheckoutLink(response.data.link);
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (signal.aborted) return;
      toast.error(error.message);
    }
  };

  return {
    loading,
    actionType,
    checkoutLink,
    openModal,
    setOpenModal,
    handleManageSub,
  };
};

export default useHandleSub;
