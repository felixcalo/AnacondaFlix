import React from 'react';
import Menu from '../../componentes/Menu';
import Banner from '../../componentes/BannerMain';
import Footer from '../../componentes/Footer';
import data from '../../dados_iniciais.json';
import Slide from '../../componentes/Slide';

import './app.css';

function App() {
  return (
    <div className="app">
      <Menu title="Novo video" link="/cadastro" />
      <Banner
        videoTitle={data.categorias[0].videos[0].titulo}
        videoDescription="yh ta bater meu manon "
        url={data.categorias[0].videos[0].url}
      />
      <Slide />
      <Footer />
    </div>
  );
}
export default App;
