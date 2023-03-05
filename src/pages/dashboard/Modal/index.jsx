import Modal from  'react-modal';
import {FiPlus, FiXSquare} from 'react-icons/fi';

import './style.scss';

export function CustomModal({ isOpen } ){
    return(
        <Modal isOpen={isOpen} className="modal" overlayClassName="overlay"> 
            <form>
                <header>
                    <h4>Cadastrar um novo ativo</h4>
                    <div>
                        <button className='add' type='submit'><FiPlus/>Adicionar</button>
                        <button className='close'><FiXSquare/></button>
                    </div>
                </header>

                <fieldset className='first-fieldset'>
                    <span>Entrada</span>
                    <input className='green' type="range" min="0" max="1" step="1" defaultValue="0" required/>
                    <span>Saída</span>
                </fieldset>

                <fieldset className='second-fieldset'>
                    <input type="number" step="0.01" placeholder='Valor' required/>
                    <input type="date" required/>
                    <input type="text" placeholder='Descrição' required/>
                    <input type="number" step="1" placeholder='Nº de parcelas'/>
                </fieldset>

            </form>
        </Modal>
        
    )
}