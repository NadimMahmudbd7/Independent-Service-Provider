
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Carosel from './Components/Carosel/Carosel';
import Checkout from './Components/Chekout/Checkout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Requireauth from './Components/RequirAuth/Requireauth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Carosel></Carosel>}></Route>
        <Route path='/checkout' element={
          <Requireauth>
            <Checkout></Checkout>
          </Requireauth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
