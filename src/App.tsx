import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Homepage } from './components/Homepage/Homepage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.ROOT} element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
