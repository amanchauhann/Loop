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
import Bookmarks from './Features/Bookmarks'
import UserProfile from './Features/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<PageFeed />} />
        </Route>

        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="profile/:user_id" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  )
}

export default App
