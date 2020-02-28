import axios from 'axios';

export const getBooks = () => {
    return{
        type: 'GET_BOOKS',
        payload: axios({
            method: "GET",
            url: "http://localhost:8000/book"
        })
    }
}
