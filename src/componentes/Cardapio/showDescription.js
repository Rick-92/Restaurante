import React, { useState } from 'react';
import foto from "../../imagens/carneParrilla.jpg"
import foto1 from "../../imagens/linguicinha.jpg"
import "./ShowDescription.css"

function ShowDescription() {
  const [productDescription, setProductDescription] = useState('');
  const [imgProduct, setimgProduct] = useState('');

  const products = [
    { id: 1, name: 'Produto 1', image:foto1, description: '280gr de uma deliciosa entrada de linguiça fina mista assada na parrilla.' },
    { id: 2, name: 'Produto 2', image:foto, description: 'Duas tiras de contra file de costela "chorizo" pesando em media 550gr ' },
    { id: 3, name: 'Produto 3', image:foto, description: 'Descrição do Produto 3' },
    { id: 4, name: 'Produto 1', image:foto, description: 'Descrição do Produto 4' },
    { id: 5, name: 'Produto 2', image:foto, description: 'Descrição do Produto 5' },
    { id: 6, name: 'Produto 3', image:foto, description: 'Descrição do Produto 6' },
    { id: 7, name: 'Produto 1', image:foto, description: 'Descrição do Produto 7' },
    { id: 8, name: 'Produto 2', image:foto, description: 'Descrição do Produto 8' },
    { id: 9, name: 'Produto 3', image:foto, description: 'Descrição do Produto 9' },
    { id: 10, name: 'Produto 1', image:foto, description: 'Descrição do Produto 10' },
    { id: 11, name: 'Produto 2', image:foto, description: 'Descrição do Produto 11' },
    { id: 12, name: 'Produto 3', image:foto, description: 'Descrição do Produto 12' },
  ];

  const handleMouseOver = (description,image) => {
    setProductDescription(description);
    setimgProduct(image);
  };

  const handleMouseOut = () => {
    setProductDescription('');
    setimgProduct('');
  };

  return (
    <body className="boxBody">
       <main className="boxImgs">
    <div >
      <ul className='boxLista'>
        {products.map((product) => (
          <li key={product.id}>
            <img className='foto'
              src={product.image}
              alt={product.name}
              onMouseOver={() => handleMouseOver(product.description,<img className='photoAmpliada'alt='Foto-Ampliada' src={product.image}/>)}
              onMouseOut={handleMouseOut}
          
            />
          </li>
        ))}
      </ul>

    </div>
    </main>
    <aside className="boxText">
      <div className="product-description">
        {productDescription && <p>{productDescription}</p>}
      </div>
      <div className="product-img">
        {imgProduct && <p >{imgProduct}</p>}
      </div>
            </aside>,

            
    </body>
  );
}

export default ShowDescription;
