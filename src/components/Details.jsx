import React, { useEffect, useState } from "react";

function Details({ userID }) {
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState(null);

    async function fetchData() {
        setLoading(true);
        setUser(null);

        try {
            const response = await fetch(import.meta.env.VITE_DATA_URL + `${userID}.json`);
            const data = await response.json();
            setUser(data);

        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [userID])

    return (
    <>
        {loading && <p>Loading...</p>}
        {user && 
            <div className="userDetails">
                <img className="userDetails-avatar" src={user.avatar} alt="фото" />
                <h1 className="userDetails-name">{user.name}</h1>
                <p className="userDetails-city">City: {user.details.city}</p>
                <p className="userDetails-company">Company: {user.details.company}</p>
                <p className="userDetails-position">Position: {user.details.position}</p>
            </div>
        }
    </>
    );
}

export default Details