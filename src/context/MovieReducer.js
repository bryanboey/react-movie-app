export default function MovieReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload]
            }
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload)
            }
        case "ADD_TO_COMPLETEDLIST":
            return {
                ...state,
                completedList: [...state.completedList, action.payload]
            }
        case "MOVE_TO_COMPLETEDLIST":
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload.id),
                completedList: [...state.completedList, action.payload]
            }
        case "REMOVE_TO_COMPLETEDLIST": 
            return {
                ...state,
                completedList: state.completedList.filter((movie) => movie.id !== action.payload)
            }
        default:
            return state;
    }
}