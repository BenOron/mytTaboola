import React, {useState,useEffect} from "react";
import "@pages/popup/Popup.css";
import BasicTabs from "@pages/components/BasicTabs";
import AppBarMenu from "@pages/components/AppBarMenu";
import LoginPage from "@pages/components/LoginPage";
import Settings from "@pages/components/Settings";
import { UserContext } from "../../UserContext";

const Popup = () => {
  const [user, setUser] = useState("Gal");

  return (
    <div>
        <UserContext.Provider value={{user, setUser}}>
        <AppBarMenu/>
        { !user && <LoginPage/>}
        {user &&  <>  <BasicTabs/> </> }
        {/*{!islogin && <Settings/>}*/}
        </UserContext.Provider>
    </div>
  );
};

export default Popup;
