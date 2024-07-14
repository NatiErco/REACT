import React from 'react'
import {useParams} from "react-router-dom"



export function Products (){

    const { id } = useParams();

  return (
    <div>
        <h3> Details of product {id} </h3>
    </div>
  )
}
