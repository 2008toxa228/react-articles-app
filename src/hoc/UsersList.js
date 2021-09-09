import React from "react";
import UserPreview from "../components/userPreview";

function UsersList (props) {
    let users = React.useState.users
        .map((user) => <UserPreview 
                key={user.id + user.name} 
                user={user} 
            />
        );
    
    return (
        users
    );
}

export default UsersList;