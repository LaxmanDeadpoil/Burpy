import React, { useState, useEffect, useRef } from 'react'
export default function Image(props){
    
    // console.log('difference', props.index- props.preIndex);
    

    const angle = useRef(0);
    let rotAngle;
    if( props.index- props.preIndex== -2 || props.index- props.preIndex==1)
        rotAngle=60;
    
    if( props.index- props.preIndex== 0)
        rotAngle=0;

    if( props.index- props.preIndex== 2 || props.index- props.preIndex== -1)
        rotAngle= -60;
    
    console.log('pre', angle.current, 'rota', rotAngle);
    angle.current = (angle.current+rotAngle)%360

    //console.log(angle.current)


    const [xp , updateXp] = useState(0);
    window.addEventListener('scroll' , ()=>{
        console.log('scroller called');
        updateXp(Math.round(window.scrollY))
    })


const imgStyle=()=>{
    if(xp)
    {
        return({ transform : `rotate(${angle.current}deg)` ,right: `calc( -350vh - ${xp}px)`})
    }
    else
    return{
    transform: `rotate(${angle.current}deg)`}
}


    return(
        
        
        <img className="product" style={imgStyle()}  src="https://i.ibb.co/TwvnJgq/try-the-thing.png" alt="nothing" />
        
        
    )
}