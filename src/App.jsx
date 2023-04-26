import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='App'>

      {/* header  */}
      <Header></Header>
      
      {/* <h1 className="bg-green-500">Welcome to nextPage!</h1> */}
     <div className="min-h-[calc(100vh-136px)]">
     <Outlet />
     </div>
      <Footer />
    </div>
  )
}

export default App
