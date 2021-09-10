export default function MovieReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
            if (
                state.watchList.find((movie) => movie.id === action.payload.id)
            ) {
                return state;
            }
            return {
                ...state,
                watchList: [action.payload, ...state.watchList],
            };
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter(
                    (movie) => movie.id !== action.payload),
            };
        case "ADD_TO_COMPLETEDLIST":
            if (
                state.completedList.find(
                    (movie) => movie.id === action.payload.id)
            ) {
                return state;
            }
            return {
                ...state,
                completedList: [action.payload, ...state.completedList],
            };
        case "MOVE_TO_COMPLETEDLIST":
            if (
                state.completedList.find(
                    (movie) => movie.id === action.payload.id)
            ) {
                return {
                    ...state,
                    watchList: state.watchList.filter(
                        (movie) => movie.id !== action.payload.id),
                };
            }
            return {
                ...state,
                watchList: state.watchList.filter(
                    (movie) => movie.id !== action.payload.id),
                completedList: [action.payload, ...state.completedList],
            };
        case "REMOVE_TO_COMPLETEDLIST":
            return {
                ...state,
                completedList: state.completedList.filter(
                    (movie) => movie.id !== action.payload),
            };
        default:
            return state;
    }
}
