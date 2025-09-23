import { Navigate } from "react-router-dom";
import Heropage from "../pages/Heropage";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import UploadForm from "../pages/UploadForm";
import LoginComponent from "./LoginComponent";

const Root = ()=>{
    const [status , setStatus] = useState('loading');
   const Loader = () => <div class="fixed inset-0 z-50 flex items-center justify-center bg-black-900 bg-opacity-75">
  <div class="h-16 w-16 animate-spin rounded-full border-4 border-solid border-amber-500 border-t-transparent"></div>
</div>;

    useEffect(()=>{
        authService.getcurrentUser().then(userData=>{
            if(userData.emailVerification == true){
                setStatus('authenticated')
                console.log(userData);
                
            }else{
                setStatus('unauthenticated')
            }
        })
        .catch(()=>{
            setStatus('unauthenticated')
        })

    },[])
    if (status == "loading"){
        return <Loader/>
    }
    if (status==='authenticated'){
        return <UploadForm/>
    }
    return <LoginComponent/>;
    //dikkat rokni hai
}

export default Root;