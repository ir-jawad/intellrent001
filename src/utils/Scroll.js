import React, { useEffect, useState } from 'react';

import Resize from './Resize';

const ScrollAble = (props) => {
   const {mobStyle} = props;
   const {screenSize} = Resize();
   const [top, setMobStyle] = useState(0);
  
   useEffect(()=> {
     setMobStyle(mobStyle)
   },[mobStyle])
   
   return(
        <React.Fragment>
            <div className='container w-100 p-0' style={screenSize.dynamicWidth <=375 ?  {position:'relative', top:`${top}px`}:{}}>
                 {props.children}
            </div>
        </React.Fragment>
    )
}
export default ScrollAble;