import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouter from './routes/PrivateRouter';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
         <Route path="/home" element={<PrivateRouter><Home /></PrivateRouter>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
