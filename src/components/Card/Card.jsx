import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/Action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css"

function Card(props) {
   
   console.log(props)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id)
      } 
      else if (!isFav){ 
         setIsFav(true);
         props.addFav(props) 
      }
   }

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   return (
      <div className={style.Card}>
         
         <button onClick={handleFavorite} className={style.fav}>{isFav ? "❤️" : "🤍"}</button>

         <button onClick={() => props.onClose(props.id)} className={style.close}>X</button>
         <NavLink to={`/detail/${props.id}`} className={style.NavLink}>
         <div className={style.info}>
         <p>Nombre: {props.name}</p>

         <p>Especie:{props.species}</p>
         <p>Estado: {props.status}</p>
         <p>{props.gender}</p>
         <p>Origen: {props.origin}</p>
         </div>
         <img src={props.image} alt='' className={style.image}/>
         </NavLink>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);


