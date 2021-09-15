import React from "react";
import { useState } from "react";
import UserPreview from "../components/userPreview";
import * as ApiProvider from "../ApiProvider";

function UsersList (props) {
    const [users, setUsers] = useState();

    if (!users) {
        ApiProvider.GetUsersByPage(props.match.params.pageNumber ?? 0, mapUsers);
    }
    
    // ToDO refactor return part.
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
        setUsers(data.map(user => 
            <UserPreview 
                key={ user.Id } 
                user={ user } 
            />)
        );
    }
}

export default UsersList;