import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus=()=>{
    const [loggedIn,setLoggedIn]=useState(false)
    const [checkingStatus,setChechkingStatus]=useState(true)
    const {user}=useSelector((state)=>state.auth)

    useEffect(()=>{
        if(user){
            setLoggedIn(true)
        }else{
            setLoggedIn(false)
        }
        setChechkingStatus(false)

    },[user])
    return{loggedIn,checkingStatus}
}