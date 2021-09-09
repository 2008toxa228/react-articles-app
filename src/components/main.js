import React from "react";
import "./css/main.css";

function Main (props) {
    return (
        <main>
            <div className="wrapper">
                { props.children }
            </div>
        </main>
    );
}

export default Main;