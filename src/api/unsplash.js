import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 4b1c8fda74bb97850e2df400629a094a9e55aa647f00172c6b549d63fa4c917e'
    }
});