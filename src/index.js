import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from'./Rotas/Home';
import reportWebVitals from './reportWebVitals';
import { register } from 'swiper/element/bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Menu from './Rotas/Menu';
import Sobre from './Rotas/sobre';
import Contatos from './Rotas/Contatos';

register();



// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contatos' element={<Contatos />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
