import React from 'react';

import data from '../../dados_iniciais.json';
import Carousel from '../Carousel';

function slide() {
  return (
    <>
      {data.categorias.map((category) => (
        <Carousel ignoreFirstVideo={category.titulo} category={category} />
      ))}
    </>
  );
}
export default slide;
