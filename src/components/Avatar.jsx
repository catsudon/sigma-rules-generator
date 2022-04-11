import React from "react";

const circleImg = "circle-img";


function Avatar(props) {

    const [state, setState] = React.useState("");

    return (

        <img className={state} src={props.src}
            alt={props.alt} id={props.id} onClick={() => {
                state === "circle-img" ? setState("") : setState("circle-img");
            }}>
        </img>

    );
}

export default Avatar;

/*
just a note for myself

React.useState(init); will return 2 obj 
[0] is state
[1] is a function to set that state

const [state, setState] = React.useState("");

then you can use the state anywhere on the code
and when you want to change the state, just use ```setState(newValue);```



*/