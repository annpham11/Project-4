export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST": 
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist], 
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            console.log(action)
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload
                ),
            }
        case "ADD_MOVIE_TO_WATCHED": 
            console.log(action)
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID
                ),
                watched: [action.payload, ...state.watched],
            };

        default:  
        return state;  
    }
}