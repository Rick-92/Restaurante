import Whats from "../../imagens/whatsapp_3670051.png"
import insta from "../../imagens/instagram-logo-icone4.png"
import face from "../../imagens/facebook-icon.png"
import "./Contatos.css"
import { Link } from "react-router-dom"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

function Address() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDPebX29oqfKagU35VgBET6nP2W9tEqmNY"
    })




    return (
        <body className="Address-body">
        <div className="containerRestaurantes" >

            <div className="Titulo">
                <h2 className="NomeLocal">Cassino</h2>
                <h2 className="NomeLocal" >Centro</h2>
            </div>
            <div className="containerContatos">
                <section className="containerCassino" >
                    <ul>
                        <li><Link to="https://api.whatsapp.com/send/?phone=5553999213415&text&type=phone_number&app_absent=0">Entre em contato pelo whats clicando aqui</Link></li>
                        <br />
                        <li><Link to="https://www.instagram.com/restaurantelainvernada/ " >Entre em contato pelo insta clicando aqui</Link></li>
                        <br />
                          <li><Link to="https://www.facebook.com/LaInvernada">Entre em contato pelo face clicando aqui</Link></li>
                        <br />
                    </ul>
                    <ul>
                        <li><Link to="https://api.whatsapp.com/send/?phone=5553999213415&text&type=phone_number&app_absent=0"><img src={Whats} alt="Whats" className="logoRedes" /></Link></li>
                        <li><Link to="https://www.instagram.com/restaurantelainvernada/ " ><img src={insta} alt="insta" className="logoRedes" /></Link></li>
                        <li><Link to="https://www.facebook.com/LaInvernada"><img src={face}  alt="face"className="logoRedes" /></Link></li>
                    </ul>
                                 
                </section>

                <section className="containerCentro">
                    <ul>
                        <li><Link to="https://api.whatsapp.com/send/?phone=5553999213415&text&type=phone_number&app_absent=0">Entre em contato pelo whats clicando aqui</Link></li>
                        <br />
                        <li><Link to="https://www.instagram.com/lainvernadasunset/ ">Entre em contato pelo insta clicando aqui</Link></li>
                        <br />
                          <li><Link to="https://www.facebook.com/profile.php?id=100089741869089">Entre em contato pelo face clicando aqui</Link></li>
                        <br />
                    </ul>
                    <ul>
                        <li><Link to="https://api.whatsapp.com/send/?phone=5553999213415&text&type=phone_number&app_absent=0"><img src={Whats} alt="Whats" className="logoRedes" /></Link></li>
                        <li><Link to="https://www.instagram.com/lainvernadasunset/ "><img src={insta} alt="insta" className="logoRedes" /></Link></li>
                        <li><Link to="https://www.facebook.com/profile.php?id=100089741869089"><img src={face}  alt="face"className="logoRedes" /></Link></li>
                    </ul>

                </section>
            </div >
            </div>
            <div className="container-maps">
                <section className="maps-cassino">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={{
                                lat: -32.18438412540084,
                                lng: -52.165613344289866
                            }

                            }
                            zoom={15}
                        ><></>
                        </GoogleMap>
                    ) : <></>}
                </section>
                <section className="maps-centro">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={{
                                lat: -32.02969189293189,
                                lng: -52.11231947044054
                            }}
                            zoom={15}

                        ><></>
                        </GoogleMap>
                    ) : <></>}
                </section>

            </div>

            </body>

          

        



    )

}
export default Address