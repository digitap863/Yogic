
import './App.css'
import { MainRouter } from './routes/router'
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
  <>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
  </>
  )
}

export default App
