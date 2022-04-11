import React from "react";
import Time from "./Time.jsx";


class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Keep On Your Sigma Grindset</h1>
      </header>
    );
  }
}

/*
same with 

function Header() {
   return (
    <header>
      <h1>Keeper</h1>
      <Time />
    </header>
  );
}

*/


export default Header;
