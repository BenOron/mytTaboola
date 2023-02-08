import React, {useState,useEffect} from "react";
import "@pages/popup/Popup.css";
import BasicTabs from "@pages/components/BasicTabs";
import AppBarMenu from "@pages/components/AppBarMenu";
import LoginPage from "@pages/components/LoginPage";

const Popup = () => {
    const [islogin , setLogin  ] = useState(false)


  return (
    <div>
        <AppBarMenu islogin={islogin}/>
        <LoginPage/>
        {islogin &&  <>  <BasicTabs/> </> }
    </div>
  );
};

export default Popup;
