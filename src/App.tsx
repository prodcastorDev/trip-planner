import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { Header } from './components/Header/Header';
import { ROOT_URL } from './constants/URLS';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROOT_URL} element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
