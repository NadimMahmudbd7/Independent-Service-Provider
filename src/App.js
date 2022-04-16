
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Carosel from './Components/Carosel/Carosel';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Carosel></Carosel>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
