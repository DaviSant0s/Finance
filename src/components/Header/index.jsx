import { FiDollarSign, FiUser } from 'react-icons/fi'

export function Header() {
    return(
        <header>
        <div className='title'>
          <FiDollarSign/>
          <h2>Controle Financeiro</h2>
        </div>

        <div className='user-container'>
          <div>
            <span>Cadastre-se</span>
            <span>Login</span>
          </div>
          <FiUser/>
        </div>
      </header>
    )
}