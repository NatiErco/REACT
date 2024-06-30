import { React } from 'react'
import { Counter } from './Counter'
import { Clock } from './Clock'


export function App () {
  return (
    <div><Counter initialValue={0} increment={1} />
    <Clock/>
    </div>

    // <Counter initialValue={0} increment={1} /> Podria usar asi sino le agisno valor a las prop en Counter.jsx
  )
}


