
const initialState = {
    books: []
}

const book = (state = initialState, action) => {
    console.log(action.type);
   switch(action.type){
    case 'GET_BOOKS_FULFILLED':
        //    console.log(action.payload);
           return{
               ...state,
               books: action.payload.data
           }
       case 'GET_BOOKS_PENDING':
           return{
               ...state
           }
        case 'GET_BOOKS_REJECTED':
            return{
                ...state
            }
        default:
            return state;
   }
}

export default book;