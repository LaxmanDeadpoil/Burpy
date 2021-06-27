import React, { useState, useEffect, useRef } from 'react'
import Image from "./Imgae"
import Dots from "./Dots"
import CarouselText from "./CarouselText"



export default function AllContent(){


const [index, setIndex]= useState({
    currentIndex : 0,
    preIndex : 0
})
function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }




const timeoutRef=useRef(null);


useEffect(()=>{
    resetTimeout();
    timeoutRef.current=setTimeout(()=>changeIndex(index.currentIndex+1),10000);

    return () => {
        resetTimeout();
      };
},[index])




const changeIndex=(i)=>{
    
    
    setIndex(()=>{        
        return({
            preIndex: index.currentIndex,
            currentIndex:(i)%3}
        )
    })
}


//clearTimeout(timer);



    return(<>
    <div className="allCont">
                
        <CarouselText index={index.currentIndex} preIndex={index.preIndex}/>
        <Dots index={index.currentIndex} rotate={changeIndex}/>
        </div>
        <Image index={index.currentIndex} preIndex={index.preIndex}/>
   </> )
}