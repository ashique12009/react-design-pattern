import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'
import UserProfileContainer from './with-pattern/components/UserProfileContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfileContainer userId={1} />
    </>
  )
}

export default App
