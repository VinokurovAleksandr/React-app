import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
// const BASE_ID_URL = 'https://jsonplaceholder.typicode.com/posts/';

export default class PostService {
    static async getAll(limit = 10, page = 1) {

        const res = await axios.get(BASE_URL, {
            params: {
                _limi: limit,
                _page: page,
            }
        })
        return res;
    };

     static async getById(id) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
   
        return res;
    };

    static async getCommentsByPostId(id) {
         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
   
        return res;
    }
};