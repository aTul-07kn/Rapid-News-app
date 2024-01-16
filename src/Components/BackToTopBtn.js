import React, {useState, useEffect} from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

export default function BackToTopBtn() {
  const [backToTop,setBackToTop]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setBackToTop(true)
        }
        else{
            setBackToTop(false)
        }
    })
  },[])
  const scrollTop=()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }
  return (
    <div>
      {
      backToTop && <FaArrowCircleUp onClick={scrollTop} style={{cursor:'pointer', position: 'fixed', right: "40px", bottom: "50px", fontSize: "3.5rem"}} />}  
    </div>
  )
}
