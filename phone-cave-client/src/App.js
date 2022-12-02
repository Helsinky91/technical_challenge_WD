import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import PhoneList from './pages/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/phones" element={<PhoneList/>}/>
        <Route path="/phones/:id" element={<PhoneDetails/>}/>

        <Route path='/error' element={<Error/>} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
