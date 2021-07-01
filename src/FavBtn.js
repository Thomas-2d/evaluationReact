
import React, { useState } from "react";
import Heart from "react-animated-heart";


export default function FavBtn(props) {
    const {favorited, id, data} = props
    const [favorite, setFavorite] = useState(favorited)
    const [isClick, setClick] = useState(false);

    function addFavorite(id, favorite){
      // fetch(`http://localhost:4000/rest/shows/${id}`, { method: 'PUT' })
      //           .then(() => setFavorite(!favorite))
      
      fetch(`http://localhost:4000/rest/shows/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          title: "Game of Thrones",
          user: {favorited: !favorite},
          })}

        
        
      )
      .then(() => setFavorite(!favorite))
      .then(() => setClick(!isClick))
      .then(() => console.log(favorite))
      .then(() => console.log(data))
    }

 
    const favBtnElement = (
      <div class="fav-btn">
        <Heart isClick={true} onClick={() => addFavorite(id, favorite)} />
      </div>
  )
  return favBtnElement
    
}

