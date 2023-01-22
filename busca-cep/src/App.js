import {useState} from 'react';
import { FiSearch } from 'react-icons/fi'
import './style.css';
import api from './services/api';

function App() {

  //input = valor escrito
  //setInput = valor armazenado
  const [input, setInput] = useState('');
  const [cep, setCEP] = useState({});

  async function Search(){
    if(input === ""){
      alert("Preencha o campo com algum CEP.")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCEP(response.data)
      setInput("");
    } catch {
      alert(("Erro na busca."));
      setInput("")
    }

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

      {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep} </h2>

        <span> {cep.logradouro} </span>
        <span>Complemento: {cep.complemento} </span>
        <span> {cep.bairro} </span>
        <span> {cep.localidade} - {cep.uf} </span>
      </main>
      )}
      
    </div>
  );
}

export default App;
