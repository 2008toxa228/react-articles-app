import React from "react";
import { NavLink } from "react-router-dom";
import "./css/userPreview.css";

function UserPreview (props) {
    return (
        <div className="userPreview">
            <div>name: <NavLink to={"/users/" + props.user.id} className="userPreviewName">{props.user.name}</NavLink></div>
            <NavLink to={"/articles/user/" + props.user.id}>view articles...</NavLink>
        </div>
    );
}

export default UserPreview;