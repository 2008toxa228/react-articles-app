import React from "react";
import { useState } from "react";
import UserPreview from "../components/userPreview";
import * as ApiProvider from "../ApiProvider";

function UsersList (props) {
    const [users, setUsers] = useState();

    if (!users) {
        ApiProvider.GetUsersByPage(props.match.params.pageNumber ?? 0, mapUsers);
    }
    
    return (
        <React.Fragment>
            { users 
                ? users.length 
                    ? users
                    : "page not exist"
                : ""
            }
        </React.Fragment>
    );
    
    function mapUsers(data) {
        console.log(data);
        setUsers(data.map(user => 
            <UserPreview 
                key={user.Id} 
                user={user} 
            />)
        );
        console.log("if this repeats, means that useState setter loop happen");
    }
}

export default UsersList;