import React from "react";

const Resize = () => {
  
    const [screenSize, getDimension] = React.useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
     
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      React.useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])
    return {
        screenSize
    }
}

export default Resize;