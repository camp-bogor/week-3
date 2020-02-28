
const initialState = {
    books: []
}

const book = (state = initialState, action) => {
   switch(action.type){
       case 'GET_BOOKS_PENDING':
           return{
               ...state
           }
        case 'GET_BOOKS_REJECTED':
            return{
                ...state
            }
        case 'GET_BOOKS_FULFILLED':
            return{
                ...state,
                books: action.payload.data
            }

        case 'POST_BOOK_PENDING':
            return{
                ...state
            }

        case 'POST_BOOK_REJECTED':
            return{
                ...state
            }
        
        case 'POST_BOOK_FULFILLED':
            const newDataBook = [...state.books, action.payload.data];
            return{
                ...state,
                books: newDataBook
            }
        default:
            return state;
   }
}

export default book;