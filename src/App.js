import React, {useState} from 'react';
import AddUser from "./Component/Users/AddUser/AddUser";
import UserList from "./Component/Users/UserLists/UserLists";

const App = () => {
    const [usersList, setUserList] = useState([])

    const addUserHandler = (userName, userAge) => {
        setUserList((prevState) => {
            return [
                ...prevState,
                {name:userName, age:userAge, id:Math.random().toString()}
            ]
        })
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UserList users={usersList}></UserList>
        </div>
    );
}

export default App;
