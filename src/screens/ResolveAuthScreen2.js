import React, {useEffect, useContext} from "react";
import {Context as AuthContext} from "../context/AuthContext";

const ResolveAuthScreen2 = () => {
    const {tryLocalLogin} = useContext(AuthContext);
    
    useEffect(() => {
        tryLocalLogin();
      },[]);
      
    return null;
};

export default ResolveAuthScreen2;