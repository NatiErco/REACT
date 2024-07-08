import { React } from 'react'
import { Counter } from './Components/Counter'
import { Clock } from './Components/Clock'
import { MouseClicker } from '../MouseClicker'
import { MyForm } from '../MyForm'
import { InteractiveWelcome } from '../InteractiveWelcome'
import { Welcome } from './Components/Welcome'
import { Login } from '../Login'
import { UncontrolledLogin } from './Components/UncontrolledLogin'
import { FocusableInput } from '../FocusableInput'


  export function App () {
  function handleLogin(loginData) {
    console.log("Login data:", loginData);
  }

  return (
    <div>

     <br/> 
     <Login onLogin={handleLogin}/> <br/> <br/> <br/>
     <UncontrolledLogin onLogin={handleLogin}/>
    </div>

    // <Counter initialValue={0} increment={1} /> Podria usar asi sino le agisno valor a las prop en Counter.jsx
  )
}
