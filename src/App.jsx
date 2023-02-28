import Modal from 'react-modal';

import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import './styles/global.scss';

Modal.setAppElement('#root');

function App() {
  return (
    <div className='div'>
      {/* <Login/> */}
      <Dashboard/>
    </div>
  )
}

export default App
