import './estilo-dia-semana.css'

function CardDiaSemana (){
    return(
        <div className="card-dia-semana">
        <p>
         <strong>Horarios de Funcionamento:</strong> 
         </p>
          <ul className='grade-horarios'>
            <li className='lista'> Segundas:(Folga Coletiva)</li>
            <li className='lista'>Terças: 19:00/00:00</li>
            <li className='lista'>Quartas: 19:00/00:00 </li>
            <li className='lista'>Quintas: 19:00/00:00</li>
            <li className='lista'>Sextas: 19:00/00:00 </li>
            <li className='lista'>Sabados: 19:00/00:00</li>
            <li className='lista'>Domingos: 11:30/15:00</li>            
            </ul>  
       


    </div>
)}
export default CardDiaSemana