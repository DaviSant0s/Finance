import Modal from 'react-modal';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import './styles/global.scss';

Modal.setAppElement('#root');

function App() {
  return (
    <div className='div'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
