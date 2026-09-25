import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FullQuiz from "./pages/FullQuiz";
import Result from "./pages/Result";
import Performance from "./pages/Performance";
import TopicSelection from "./pages/TopicSelection";
import TopicQuiz from "./pages/TopicQuiz";
const App = () => {
 
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/full-quiz' element={<FullQuiz/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/performance' element={<Performance/>}/>
      <Route path='/topic-selection' element={<TopicSelection/>}/>
      <Route path='/topic-quiz' element={<TopicQuiz/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
