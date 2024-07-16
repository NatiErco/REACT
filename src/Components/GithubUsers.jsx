import React, { useEffect, useState } from "react";
import { UseGithubUser } from "./UseGithubUser";

export function GithubUser({ username }) {

  const { data, loading, error } = UseGithubUser(username);

  return (
   
    <div>
    {error && <h1>There has been an error</h1>}
    {loading && <h1>Loading...</h1>}
    <p>Login: {data.username}</p>
    {data &&<h1>{data.name}</h1>}
    <img src={data.avatar_url} style={{width: 100, height: 100, borderRadius: "50%"}}/>
     </div>
    
);
}
