import { useDispatch } from "react-redux"
import { connect } from "react-redux"
import { useState } from "react"
import { removeFav, filterCards, orderCards, all } from "../Redux/Action"
import Card from "../components/Card/Card"
import style from "./Favorite.module.css"

const Favorites = ({ myFavorites, removeFav }) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    }

    const handleFilter = (event) => {
        if(event.target.value === "All") {
            dispatch(all())
        }
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style.CardFav}>
            <select name="" id="" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="" id="" onChange={handleFilter}> 
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknow</option>
            </select>
        { myFavorites.map((fav) => {
            return (
                <Card 
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={() => {removeFav(fav.id)}}
                />
            )
        })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (id) => {dispatch(removeFav(id))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites)
