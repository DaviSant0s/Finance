import Modal from  'react-modal';
import {FiPlus, FiXSquare} from 'react-icons/fi';
import { useState } from 'react';

import './style.scss';

export function CustomModal({ isOpen, action, openModal } ){
    const [isIncome, setIsIncome] = useState(true);
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [installments, setInstallments] = useState('');

    function formatDate(date){
        const [ano, mes, dia] = date.split('-');
        //return ano + '/' + mes + '/' + dia
        return `${dia}/${mes}/${ano}`;
    }

    function handleAddData(e) {
        e.preventDefault();
        const newData = {
            id: toString(parseInt(Math.random()*1000)),
            income: Boolean(isIncome),
            value: Number(value),
            date: formatDate(date), 
            description,
            installments
        }
        action(newData);
        openModal(false);
    }

    
    return(
        <Modal 
        isOpen={isOpen} 
        className="modal" 
        overlayClassName="overlay"
        onRequestClose={() => openModal(false)}
        > 
            <form onSubmit={handleAddData}>
                <header>
                    <h4>Cadastrar um novo ativo</h4>
                    <div>
                        <button className='add' type='submit'><FiPlus/>Adicionar</button>
                        <button className='close' onClick={() => openModal(false)}><FiXSquare/></button>
                    </div>
                </header>

                <fieldset className='first-fieldset'>
                    <span>Entrada</span>

                    <input 
                    className={isIncome ? 'green': ''} 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="1" 
                    defaultValue="0" 
                    onChange={() => setIsIncome(!isIncome)}
                    required/>

                    <span>Saída</span>
                </fieldset>

                <fieldset className='second-fieldset'>

                    {/* input de valor */}
                    <input 
                    type="number" 
                    step="0.01" 
                    placeholder='Valor' 
                    required 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}/>

                    {/* input de data */}
                    <input 
                    type="date" 
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />

                    {/* input da descrição */}
                    <input 
                    type="text" 
                    placeholder='Descrição' 
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />

                    {/* input do número de parcelas */}
                    <input 
                    type="number" 
                    step="1" 
                    placeholder='Nº de parcelas'
                    value={installments}
                    onChange={(e) => setInstallments(e.target.value)}

                    />
                </fieldset>

            </form>
        </Modal>
        
    )
}