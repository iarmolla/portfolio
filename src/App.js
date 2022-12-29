import "./App.css"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Home from "./views/Home"
import NavBar from './components/NavBar'
import Error from "./views/Error"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<Home/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Dashboard() {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  )
}

export default App
