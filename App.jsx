import { React } from 'react'
import { Counter } from './Counter'
import { Clock } from './Clock'
import { MouseClicker } from './MouseClicker'
import { MyForm } from './MyForm'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Welcome } from './Welcome'
import { Login } from './Login'


export function App () {
  return (
    <div>


     <br/> <br/> <br/>
     <InteractiveWelcome/>
   <Login/>
    </div>

    // <Counter initialValue={0} increment={1} /> Podria usar asi sino le agisno valor a las prop en Counter.jsx
  )
}


