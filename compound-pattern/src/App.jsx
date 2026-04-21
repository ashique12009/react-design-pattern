import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Modal from './messy/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modal title="Welcome to the Modal"
        body="This is a simple modal component. It can be used to display important information or to get user input."
        primaryAction={<button className="primary-btn">Primary Action</button>}
        secondaryAction={<button className="secondary-btn">Secondary Action</button>}
      />
    </>
  )
}

export default App
