import React from "react";
import { NavLink } from "react-router-dom";
import "./css/user.css";

function User (props) {
    // eslint-disable-next-line
    let user = React.useState.users.find((user) => {return user.id == props.match.params.userId});
    return (
        <div className="user">
            <h1 className="userName">{ user.name }</h1>
            <NavLink to={ "/articles/user/" + user.id }>
                view articles...
            </NavLink>
        </div>
    );
}

export default User;