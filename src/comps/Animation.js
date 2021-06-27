import { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export default function Animation(props) {
  

    function cool() {

      setActive(!active);
  
    }
    const [active, setActive] = useState(false);
    const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });


    if(props.call)
      cool();



    return (
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
    );
  
}
