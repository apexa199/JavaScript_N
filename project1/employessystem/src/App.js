import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { ApplicationNav } from './components/ApplicationNav';
import { LogInForm } from './components/LogInForm';

function App() {
  return (
    <div>
      <Container>

    <ApplicationNav/>

    <Routes>

      <Route path='/' element={<Registration></Registration>}></Route>
     

    </Routes>

      </Container>
    </div>
  );
}

export default App;
