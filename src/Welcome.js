import { useState, useEffect } from "react";
import "./App.css";

const Welcome = ({ onComplete }) => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHidden(true);
            onComplete();   
        },2000);  
    }, []);

    return !hidden ? <div className="welcome-screen">Welcome</div> : null;
};

export default Welcome;
