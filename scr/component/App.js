import React from 'react';
import UserList from '../Containers/user-list';
import UserDetails from '../Containers/user-detail';
require("../../css/style.css");
const App = ()=>(<div>
    <h2>User List</h2>
        <UserList></UserList>
    <hr/>
    <h2>User Details</h2>
    <UserDetails/>
</div>
);
    export default  App