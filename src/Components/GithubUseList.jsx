import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import { ShowGithubUser } from './ShowGithubUse';


export function GithubUseList() {

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link to={`/data/${data.login}`}>{data.login}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:username`} component={ShowGithubUser} />
    </div>
  );
}
