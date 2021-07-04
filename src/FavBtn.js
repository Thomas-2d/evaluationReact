
import React, { useState } from "react";
import Heart from "react-animated-heart";


export default function FavBtn(props) {
    const {favorited, id, title} = props
    const [favorite, setFavorite] = useState(favorited)
    const [isClick, setClick] = useState(false);

    function addFavorite(id, favorite, title){
   
      fetch(`http://localhost:4000/rest/shows/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          user: {favorited: !favorite},
        })
      })
      .then(() => setFavorite(!favorite))
      .then(() => setClick(!isClick))
    }
  // Je n'arrive pas à bien garder le coeur rouge après une recherche mais la valeur de favorited reste la bonne
      return (
      <div class="fav-btn">
        <Heart isClick={isClick} onClick={() => addFavorite(id, favorite, title)} />
      </div>
       )
}

