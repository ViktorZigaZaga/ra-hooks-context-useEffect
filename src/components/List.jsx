import React from "react";

function List({ list, showDetails }) {

    return (
        <nav className="nav">
            <ul className="list">
                {list.map((user) => 
                    <li className="user" key={user.id} onClick={() => showDetails(user.id)}>
                        {user.name}
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default List