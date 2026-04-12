import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile userId={1} />
    </>
  )
}

export default App
