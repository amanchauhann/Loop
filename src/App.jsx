import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageFeed from './Features/PageFeed'
import { Route, Routes } from 'react-router-dom'
import Mockman from "mockman-js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<PageFeed />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  )
}

export default App
