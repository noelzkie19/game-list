import React from 'react';

interface GameCardProps {
  name: string;
  img: string;
  onFavoriteToggle: () => void;
  isFavorite: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ name, img, onFavoriteToggle, isFavorite }) => {
  return (
    <div className="game-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <button onClick={onFavoriteToggle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default GameCard;