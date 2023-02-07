import React from "react";
import "@pages/popup/Popup.css";
import BasicTabs from "@pages/components/BasicTabs";
import AppBarMenu from "@pages/components/AppBarMenu";

const Popup = () => {
  return (
    <div >
      <AppBarMenu/>
      <BasicTabs/>
    </div>
  );
};

export default Popup;
