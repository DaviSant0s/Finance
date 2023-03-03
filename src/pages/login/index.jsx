import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import './style.scss'

export function Login() {
    return(
        <div className="login-container">
            <Header email='Login' name='Cadastre-se'/>
            <main className='login-content'>
                <div className='title'>
                    <h4>Organize seu futuro</h4>
                    <p>Tenha acesso às suas</p>
                    <p>finanças em qualquer lugar</p>
                </div>

                <form className='login-form'>
                    <label htmlFor="email">
                        <span>E-mail </span>
                        <input type="text" id="email" />
                    </label>

                    <label htmlFor="password">
                        <span>Senha </span>
                        <input type="text" id="password" />
                    </label>

                    <label htmlFor="password-confirmation">
                        <span>Confirmação da senha </span>
                        <input type="text" id="password-confirmation" />
                    </label>

                    <fieldset>
                        <button type='subimit'>Cadastrar</button>
                        <a href="#login">Já possui uma conta? Entre agora!</a>
                    </fieldset>
                    
                </form>

            </main>
            <Footer/>
        </div>
    )
}