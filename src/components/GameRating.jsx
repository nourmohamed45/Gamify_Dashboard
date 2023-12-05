import { useEffect, useState } from 'react';
import './gameRating.css';

import PropTypes from "prop-types";


function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    let stars = [];
    if(rating > 5 || rating < 1) {
      return
    }

    for(let i = 0; i < rating; i++) {
      stars.push(i);
    }

    return stars;
  }


  useEffect(() => {
    setStars(generateStars());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="gameRating">
      {
        stars.map((star, index) => (
          <i key={index} className='bi bi-star-fill'></i>
        ))
      }
    </div>
  )
}

export default GameRating

GameRating.propTypes = {
  rating: PropTypes.number
};
