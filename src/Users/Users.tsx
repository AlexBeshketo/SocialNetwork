import React from 'react';
import {mapStateToPropsType} from "./UsersContainer";

const Users = ({users, ...props}:mapStateToPropsType ) => {
    return (
        <div>
            {users.map(k=> <div key={k.id}>Hello</div>)}
        </div>
    );
};

export default Users;