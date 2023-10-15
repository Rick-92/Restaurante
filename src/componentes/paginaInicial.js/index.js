import './estilo.css'
import Slides from '../slides'
import CardDescricao from '../Cards/card-texto'
import CardDiaSemana from '../Cards/card-dia-semana'
import CardVideo from '../Cards/CardVideo'




function Abertura() {
    return (
        <main className='container'>
            <main className='slides'>
                <Slides />
                <CardDiaSemana />

            </main>
            <main className='slides2'>
                <CardVideo />
                <CardDescricao />
            </main>
        </main>
    )
}

export default Abertura