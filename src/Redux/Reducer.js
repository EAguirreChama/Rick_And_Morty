import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, ALL } from "./Action-typs";
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload], 
                allCharacters: [...state.allCharacters, payload]

            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
                allCharacters: state.allCharacters.filter((fav) => fav.id !== payload)
            }
        
        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter(fav => fav.gender === payload)
            }

        case ALL:
            return{
                ...state,
                myFavorites: state.allCharacters
            }

        case ORDER:
            if(payload === "A")
            return{
                ...state,
                myFavorites: state.allCharacters.sort((a, d) => a.id - d.id)
            }
            if(payload === "D")
            return{
                ...state,
                myFavorites: state.allCharacters.sort((a, d) => d.id - a.id)
            }
            else return{...state};


        default:
            return{
                ...state
            }
    }
}

export default reducer;