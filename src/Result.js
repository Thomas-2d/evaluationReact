import React from 'react'
import ReadMoreReact from 'read-more-react';
import FavBtn from './FavBtn';

export default function Result({result}) {
    const genres = result.genres.map(genre => <span key={genre} className="tag">{genre}</span>);
    return (
        <div>
  <div class="movie-card">
  
  <div class="container">
    
    <img src= {result.images.poster} alt="cover" class="cover" />
        
    <div class="hero">
      <img class="background" src = {result.images.show} alt="banniere"/>
            
      <div class="details">
      
        <div class="title1"> {result.title} </div>
        <FavBtn id={result.id}/>


      </div> {/* end details */}

    </div> {/* end hero */}
    
    <div class="description">
      
      <div class="column1">
        <div class="genres">{genres}</div>
      </div> {/* end column1 */}
      
      
      <div class="column2">
        <ReadMoreReact text={result.description}
                  min={150}
                  ideal={250}
                  max={500}
                  readMoreText="click here to read more"/>           
        
      </div> {/*end column2 */}
    </div> {/*end description */}
    
   
  </div> {/*end container */}
</div> {/*end movie-card */}
</div>
)

}