import axios from "axios";


const restAPI = axios.create({baseURL:"http://localhost:8000/menu"})

function getProduto(){
    const response = restAPI.get('/')
    return response.data
}

export {
    getProduto,
}