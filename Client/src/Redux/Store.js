import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./Reducer"

// Esta linea sirve para conectar nuestra app con la extension en el navegador (REDUX DEVTOOLS)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    // Esta linea sirve para poder hacer peticiones a una Api/Servidor
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
