import React, {createContext, useReducer, useEffect} from "react"; 
import AppReducer from "./AppReducer"; 

// Initial state 

const initialState= {
    watchlist: localStorage.getItem('watchlist') 
    ? JSON.parse(localStorage.getItem('watchlist')) 
    : [], 
    watched: localStorage.getItem('watched') 
    ? JSON.parse(localStorage.getItem('watched')) 
    : [], 
}; 

// create context 
export const GlobalContext = createContext(initialState);

// provider components 
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //localstorage

    useEffect(() => {
        console.log("state updated", state)
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])

    // actions 
    const addMovieToWatchlist = movie => {
        console.log("calling add movie to watch list")
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    } 

    //action: remove from watchlist
    const removeMovieFromWatchlist = (id) => {
         console.log(id)
         console.log("calling remove movie to watch list")
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id })

    } 

    const addMovieToWatched = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie })

    }

    return (
        <GlobalContext.Provider value={{ 
            watchlist: state.watchlist, 
            watched: state.watched, 
            addMovieToWatchlist,
            addMovieToWatched,
            removeMovieFromWatchlist,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}