import { React } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { GithubUseList } from "./Components/GithubUseList";
import { ShowGithubUser } from "./Components/ShowGithubUse";



export function App() {
  return (
  
        <Routes>
          <Route path="/users" element={<GithubUseList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      
    );
  };
  
