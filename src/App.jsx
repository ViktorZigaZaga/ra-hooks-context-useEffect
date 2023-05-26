import React, { useEffect, useState } from 'react'
import './App.css'
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState(null);

  const update = async () => {
    const response = await fetch(import.meta.env.VITE_DATA_URL + 'users.json');
    const data = await response.json();
    setUsers(data);
  }

  useEffect (() => {
    update();
  }, []);

  return (
    <>
      <List list={users} showDetails={(id) => setUserID(id)} />
      {userID && <Details userID={userID} />}
    </>

  );
}

export default App
