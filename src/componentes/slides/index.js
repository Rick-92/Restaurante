import React, { Component } from 'react';
import './estilo.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import image from '../../imagens/carneParrilla.jpg'
import image2 from '../../imagens/chorizo.jpg'
import image3 from '../../imagens/linguicinha.jpg'
import image4 from '../../imagens/vinho.jpg'
class Slides extends Component {
    render() {
        return (
            <Carousel className='cont-fotos' autoPlay={true}  emulateTouch={true} infiniteLoop={true} interval={5000} showArrows={true} showThumbs={false} stopOnHover={false} >
                <div>
                    <img className='fotos-slide' alt='entrecot' src={image} />
                    <p className="legend">Cortes de entrecot</p>
                </div>
                <div>
                    <img className='fotos-slide' alt='chorizo' src={image2} />
                    <p className="legend">Bife ancho</p>
                </div>
                <div>
                    <img className='fotos-slide' alt='Linguiça' src={image3} />
                    <p className="legend">Linguiça fina</p>
                </div>
                <div>
                    <img className='fotos-slide' alt='Garzon vinho' src={image4} />
                    <p className="legend">Garzon de corte</p>
                </div>
            </Carousel>
        );
    }
};


export default Slides
