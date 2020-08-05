import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import Button from '../../../componentes/Button';
import FormField from '../../../componentes/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descrição, bla, bla, bla
    setValues({
      ...values,
      [chave]: valor, // nome: valor;
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('BomDia!');
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([
          ...resposta,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        [
          {
            id: 1,
            nome: 'Front End',
            descricao: 'Categoria Bacana',
            cor: '#cbd1ff',
          },
          {
            id: 2,
            nome: 'Back End',
            descricao: 'Categoria Bacana 2',
            cor: '#cbd1ff',
          },
        ],
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Nome da Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosEvento) {
        infosEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
