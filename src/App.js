import { useState, useRef } from "react";
import "./styles.css";
import Header from "./comps/Header";
import Page2 from "./comps/page2/Page2Cont";
import ReactPageScroller from 'react-page-scroller';

import AllContent from "./comps/CN/AllContent"


import { useSpring, animated, config } from "react-spring";

export default function App() {

  function cool() {    setActive(!active); window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      }) }

  const [active, setActive] = useState(false);
  const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });





  const iRev=(j)=>{
    i= !i;
    cool();
    console.log('cooled')
    j==2? window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    }) : window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
  }





setTimeout(() => {
  document.getElementById('id').addEventListener('scroll', ()=>{
    if(document.getElementById('id').scrollTop>0){
    window.scrollTo({top: window.innerHeight,left: 0,behavior: 'smooth'});
    setActive(true);
  
  }
    
    else{
    window.scrollTo({top: 0,left: 0,behavior: 'smooth' });
    setActive(false);
    }  
  
  })  
}, 200);
















  return (
    <>
    <Header /> 

    <div  id="id"  className="scrollParent">
            <div className="scrollChild"></div>           
        </div>


    
    <AllContent/>
    <Page2/>   




    
     
    <svg className="SVG" width="713"
      height="606" 
      viewBox="0 0 713 606" onClick={cool}>
        <animated.path
        fill="#ff5656"
          d={x.to({
            range: [0, 1],
            output: [
              "m -190.2,1400.982c28.941-361.346,130.235-375.8,457.268-197.536s246,489.022,246,489.022S-219.138,1762.328-190.2,1400.982 z",
              "m -51.547,1577.237c47.506-428.679-10.376-570.052,526.436-358.571s-290.083,164.073-290.083,164.073S-99.052,2005.916-51.547,1577.237 z"
            ]
          })}
          transform="translate(56.907 -1121.762)"
        />
      </svg>
    </>
  );
}
