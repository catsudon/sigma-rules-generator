import React from "react";
import Avatar from './Avatar.jsx'
import data from '../data.js';

function Card(props) {

    const [quote, setQuote] = React.useState(data[Math.floor(Math.random() * 1000 % data.length)].quote);
    const [ruleNumber, setRuleNumber] = React.useState(Math.floor(Math.random() * 1000 % 200 + 1));

    function newQuote() {
        setQuote(data[Math.floor(Math.random() * 1000 % data.length)].quote);
        setRuleNumber(Math.floor(Math.random() * 1000 % 200 + 1));
    }

    return (
        <div style={{textAlign:"center"}}>
            <div className="card center">
                <h2>{quote}</h2>
                <br></br>
                <h2 style={{ textAlign: "right" }}>SIGMA RULE #{ruleNumber}</h2>
            </div>
            <button onClick={newQuote}>more</button>
        </div>
    );
}

function createCard(data) {
    return (
        <Card
            key={data.id}
            id={data.id}
            link={data.imgLink}
            alt={data.altText}
        />
    )
}

export default Card;
export { createCard };