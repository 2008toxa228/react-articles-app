import React from "react";
import "./css/header.css";

function Header (props) {
    return (
        <header>
            <div className="wrapper">
                <div className="headerTitle">
                    { props.headerTitle }
                </div>
                <div className="headerLogin">
                    login?
                </div>
            </div>
        </header>
    );
};

export default Header;