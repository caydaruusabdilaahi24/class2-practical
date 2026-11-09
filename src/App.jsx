import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Product from './Products'
import Headerr from './header1'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <Headerr/>
     <Header/>
     
     <Product naame="audio"Produc="wirelessHeadphone" value="$45"/>
     <Product naame="accsors"Produc="mechnical keybard"value="$62"/>
     <Product naame="accessors"Produc="wireless mouse" value="$24"/>
     <Product naame="wearbles"Produc="smart wtch mouse" value="$75"/>
     <Product naame="audio"Produc="bluetooth" value="$39"/>
     <Product naame="accessors"Produc="laptop stand" value="$29"/>
     
   

    </>
  )
}

export default App
