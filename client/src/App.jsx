
import './App.css'
import { MainRouter } from './routes/router'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {

  return (
  <>
          <BrowserRouter>
            <MainRouter />
            <Toaster />
          </BrowserRouter>
  </>
  )
}

export default App
