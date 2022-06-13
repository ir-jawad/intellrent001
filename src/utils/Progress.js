import { useState, useEffect } from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const config = {
    id: 0, 
    percent:100,
    colorCircle:"#E6F8FA",
    colorSlice:"#17ADBC",
    size:"40px",
    fontColor:"#8D9899",
    fontSize:"1rem",
    fontWeight:900
  };

const Progress = (props) => {
    const {show} = props;
    const [update, setUpdate] = useState(config);
    useEffect(() => {
          setUpdate({
            ...config,
            id: 0,
            percent: show,
            // Math.floor(Math.random() * 100 + 1),
            colorSlice: "#17ADBC",
            fontColor: "#8D9899",
            fontSize: "1.2rem",
            fontWeight: 700
          });
        
      }, [show]);
  const newObject = { ...config, ...update };

  return (
    <div>
      <CircularProgressBar {...newObject} />
    </div>
  );
}

export default Progress;