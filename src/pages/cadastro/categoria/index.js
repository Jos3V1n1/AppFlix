import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <form>
        <label>
          Nome da Categoria:
          <input type="text"/>
        </label>

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;