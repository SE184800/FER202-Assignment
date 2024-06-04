import './App.css';
import Orchids from './OrchidsComponent.js/Orchids';
import Navigation from './OrchidsComponent.js/Navigation';
import { Route,Routes } from 'react-router-dom';
import Detail from './OrchidsComponent.js/Detail';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Orchids/>}></Route>
        <Route path='/Detail/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
