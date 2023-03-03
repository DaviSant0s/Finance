import { FiDollarSign, FiUser } from 'react-icons/fi';

import './styles.scss';

export function Header( {name, email} ) {
    return(
      <header className='header'>
        <div className='title'>
          <FiDollarSign/>
          <h2>Controle Financeiro</h2>
        </div>

        <div className='user-container'>
          <div className='user-info'>
            <span>{name}</span>
            <span>{email}</span>
          </div>
          <FiUser/>
        </div>
      </header>
    )
}