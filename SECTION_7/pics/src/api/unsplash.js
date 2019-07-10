import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {

        Authorization: 'Client-ID d32cebea123578bd377e968593d8aa234c605a79e5f3205c19d6cbe655b400e6'
    }
});

