const initialState = {
    books:[
        {
            id:1,
            title:'Javascript',
            author:'Fowler'
        },
        {
            id:2,
            title:'React',
            author:'Nygard'
        }
    ]
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
             books: action.payload
            }
        default:
            return state
    }
}

export default reducer;