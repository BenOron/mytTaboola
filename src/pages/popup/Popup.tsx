import React, {useState,useEffect} from "react";
import "@pages/popup/Popup.css";
import BasicTabs from "@pages/components/BasicTabs";
import AppBarMenu from "@pages/components/AppBarMenu";

const Popup = () => {
    const [islogin , setLogin  ] = useState(false)


  return (
    <div>
        <AppBarMenu islogin={islogin}/>

        {islogin &&  <>  <BasicTabs/> </> }
    </div>
  );
};

export default Popup;
