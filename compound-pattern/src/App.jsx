import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Modal from './messy/Modal'
import Modal from './with-pattern/modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {/* <Modal title="Welcome to the Modal"
        body="This is a simple modal component. It can be used to display important information or to get user input."
        primaryAction={<button className="primary-btn">Primary Action</button>}
        secondaryAction={<button className="secondary-btn">Secondary Action</button>}
      /> */}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Welcome to the Modal</Modal.Header>
        <Modal.Body>This is a simple modal component. It can be used to display important information or to get user input.</Modal.Body>
        <Modal.Footer>
          <button className="primary-btn">Primary Action</button>
          <button className="secondary-btn">Secondary Action</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
