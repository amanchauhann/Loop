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
import PostDetails from './Features/PostDetails'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<PageFeed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="profile/:user_name" element={<UserProfile />} />
          <Route path="post/:post_id" element={<PostDetails />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  )
}

export default App
