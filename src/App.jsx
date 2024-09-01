import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/navbar'
import About from './assets/about'
import Reservations from './assets/reservations'
import CalenadarAndTime from './assets/calendar'
import Information from './assets/information'
import Cards from './assets/cards'
export default function App() {
  return (
     <div>
      <Navbar/>
      <About/>
      <Cards/>
      <Reservations/>
      
      <Information/>
 
     </div>
  )
}

// export default App
