import React from "react";
import style from "./Userlists.module.css";
import Card from "../../UI/Card/Card";

const UserLists = (props) => {
    return (
        <Card className={style.users}>
            <ul>
                {
                    props.users.map((user) => (
                        <li>
                            {user.name} {user.age} years old
                        </li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default UserLists;