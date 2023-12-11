import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { ApplicationNav } from './components/ApplicationNav';
import { LogIn } from './pages/LogIn';
import { Home } from './pages/Home';


function App() {
  return (
    <div>
      
    <ApplicationNav/>
      <Container>


    <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/' element={<Registration></Registration>}></Route>
     <Route path='/login' element={<LogIn></LogIn>}></Route>

    </Routes>

      </Container>
    </div>
  );
}

export default App;
