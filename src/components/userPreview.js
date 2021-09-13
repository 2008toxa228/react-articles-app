import React from "react";
import { NavLink } from "react-router-dom";
import "./css/userPreview.css";

function UserPreview (props) {
    return (
        <div className="userPreview">
            <div>name: <NavLink to={"/users/" + props.user.Id} className="userPreviewName">{props.user.Name}</NavLink></div>
            <NavLink to={"/articles/user/" + props.user.Id}>view articles...</NavLink>
        </div>
    );
}

export default UserPreview;