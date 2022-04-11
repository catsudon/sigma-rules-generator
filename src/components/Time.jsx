import React from "react";

function Time() {

    let init = new Date().toLocaleTimeString();
    const [time, setTime] = React.useState(init);
    setInterval(() =>{
        let now = new Date().toLocaleTimeString();
        setTime(now);
    }, 10)
    return (
        <div>
        <label>{time}</label>
        </div>
    )
    
}

export default Time;