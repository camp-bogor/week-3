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

export const postBook = (data) => {
    return{
        type: 'POST_BOOK',
        payload: axios({
            method: "POST",
            url: "http://localhost:8000/book",
            data: data
        })
    }
}
