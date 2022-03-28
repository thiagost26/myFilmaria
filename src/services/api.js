import axios from "axios";

//Base URL > https://sujeitoprogramador.com

//Todos os Filmes ( r-api/?api=filmes/ )

//Único Filme  (r-api/?api=filmes/)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;