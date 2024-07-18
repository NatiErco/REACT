import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import { ShowGithubUser } from './ShowGithubUse';


export function GithubUseList() {

  const [data, setData] = useState([]);

  useEffect(() => {
       fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching users:', error));
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
  
    </div>
  );
}
