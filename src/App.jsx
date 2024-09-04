//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Form from './Components/Form'
import Footer from './Components/Footer'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id='root'>
      <Header/>
      <main>
        <Form/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
