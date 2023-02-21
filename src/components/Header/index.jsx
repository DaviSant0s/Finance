import { FiDollarSign, FiUser } from 'react-icons/fi';

import './styles.scss';

export function Header() {
    return(
      <header className='header'>
        <div className='title'>
          <FiDollarSign/>
          <h2>Controle Financeiro</h2>
        </div>

        <div className='user-container'>
          <div className='user-info'>
            <span>Cadastre-se</span>
            <span>Login</span>
          </div>
          <FiUser/>
        </div>
      </header>
    )
}