import {useState} from 'react';
import { FiSearch } from 'react-icons/fi'
import './style.css';

function App() {

  //input = valor escrito
  //setInput = valor armazenado
  const [input, setInput] = useState('')

  function Search(){
    alert("Valor: " + input);
  }

  //value = valor digitado
  //onChange = receber valor, atrelar ele ao evento 'e'
  //e.target.value = entregar o valor ao armazenamento no setInput
  return (
    <div className="Container">
      <h1 className="Title">Buscador CEP</h1>

      <div className="containerInput">
       <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setInput(e.target.value)}/>

       <button className="buttonSearch" onClick={Search}> <FiSearch size={25} color="#FFF"/> </button>
      </div>

      <main className='main'>
        <h2>CEP: 63600000</h2>

        <span>Rua Padre Joaci Cavalcante</span>
        <span>Complemento</span>
        <span>Bairro Alto da Esperança</span>
        <span>Senador Pompeu - CE</span>
      </main>
    </div>
  );
}

export default App;
