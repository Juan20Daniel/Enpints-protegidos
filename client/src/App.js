import React, { useState, useEffect } from 'react';
import './App.css';
import { getTokenApi } from './api/getToken';
import { getUsersApi } from './api/getUsers'; 
const App = () => {
  const [ users, setUsers ] = useState([]);
 
  useEffect(() => {
    getTokenApi();
  }, []);

  const getUsers = async () => {
    const token = localStorage.getItem('token');
    const result = await getUsersApi(token);
    setUsers(result.rows);
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <header>
          <div className="token">
            <p>{localStorage.getItem('token')}</p>
          </div>
      </header>
    <table>
      <tr>
        <th>Id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
      {paintUsers(users)}
    </table>
    </>
  );
}

function paintUsers(users) {
  return users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{user.idUser}</td>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
      </tr>
    );
  })
}

export default App;
