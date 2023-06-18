import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageFeed from './Features/PageFeed'
import { Route, Routes } from 'react-router-dom'
import Mockman from "mockman-js"
import Explore from './Features/Explore'
import Login from './Features/Auth/Login/Login'
import Private from './Features/Private'
import { useAuth } from './Contexts/AuthProvider'
import { usePosts } from './Contexts/PostsProvider'
import Liked from './Features/Liked'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Private><PageFeed /></Private>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  )
}

export default App
