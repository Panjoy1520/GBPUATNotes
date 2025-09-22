import { Navigate } from "react-router-dom";
import Heropage from "../pages/Heropage";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import UploadForm from "../pages/UploadForm";
import LoginComponent from "./LoginComponent";

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
        return <UploadForm/>
    }
    return <LoginComponent/>;
}

export default Root;