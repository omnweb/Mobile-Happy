import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.5:3333',
})

export default api;

//  'http://192.168.1.5:3333' ou add ip do expo client qdo iniciado
