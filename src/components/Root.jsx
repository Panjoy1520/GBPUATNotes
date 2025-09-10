import { Navigate } from "react-router-dom";
import Heropage from "../pages/Heropage";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";

const Root = ()=>{
    const [status , setStatus] = useState('loading');

    useEffect(()=>{
        authService.getcurrentUser().then(userData=>{
            if(userData){
                setStatus('authenticated')
            }else{
                setStatus('unauthenticated')
            }
        })
        .catch(()=>{
            setStatus('unauthenticated')
        })

    },[])
    if (status==='authenticated'){
        return <Navigate to="/home"/>
    }
    return <Heropage/>;
}

export default Root;