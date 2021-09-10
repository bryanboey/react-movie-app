import React, { createContext, useReducer, useContext, useEffect } from "react";
import MovieReducer from "./MovieReducer";

const initState = {
    watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    completedList: localStorage.getItem("completedList")
        ? JSON.parse(localStorage.getItem("completedList"))
        : [],
};

const GlobalContext = createContext(initState);

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export default function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(MovieReducer, initState);

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem(
            "completedList",
            JSON.stringify(state.completedList)
        );
    }, [state]);

    const addToWatchList = (movie) => {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
    };
    const removeFromWatchList = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
    };
    const addToCompletedList = (movie) => {
        dispatch({ type: "ADD_TO_COMPLETEDLIST", payload: movie });
    };
    const moveToCompletedList = (movie) => {
        dispatch({ type: "MOVE_TO_COMPLETEDLIST", payload: movie });
    };
    const removeFromCompletedList = (id) => {
        dispatch({ type: "REMOVE_TO_COMPLETEDLIST", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                state,
                addToWatchList,
                removeFromWatchList,
                addToCompletedList,
                moveToCompletedList,
                removeFromCompletedList,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
