import React from 'react'
import { useParams } from 'react-router-dom'
import { GithubUser } from './GithubUser'

export function ShowGithubUse  () {

  const {username} = useParams()

  return (
    <div>

    <GithubUser username={username}/>;
    </div>
  )
}
