import React, { useState } from 'react';
const Rating = ({ maxValue }) => {
  const [rating, setRating] = useState(0); // Initial rating value is 0
  const handleStarClick = (value) => {
    setRating(value); // Update the rating value when a star is clicked
  };
  return (
    <div>
      {/* Render stars dynamically based on maxValue prop */}
      {[...Array(maxValue)].map((_, index) => (
        <span
          key={index}
          style={{ cursor: 'pointer' }}
          onClick={() => handleStarClick(index + 1)} // +1 because index is zero-based
        >
          {index + 1 <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
export default Rating;