
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <>
       <Router>
        <MyNavbar/>
          <Routes>
         
            <Route path='/' element={<Home/>}/>
           


          </Routes>
       </Router>
    </>
  );
}

export default App;
