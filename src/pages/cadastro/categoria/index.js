import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "", 
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    //chave: nome, descrição, bla, bla, bla
    setValues({
      ...values,
      [chave]: valor, //nome: valor;
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Nome da Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(infosEvento) {
        infosEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

     {/*<div>
          <label>
            Descrição:
            <textarea 
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>*/}

        <FormField 
          label="Nome da Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

     {/*<div>
          <label>
            Cor:
            <input 
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
        />
          </label>
        </div>*/}

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;