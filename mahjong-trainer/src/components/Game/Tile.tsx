// src/components/Game/Tile.tsx
import React from 'react';
import './Tile.css';
import { getTileDisplay } from '../../utils/tileDisplay';

interface TileProps {
  tileId: string;
  badgeText?: string;
  isHighlight?: boolean;
  isWinning?: boolean;
}

const Tile: React.FC<TileProps> = ({ tileId, badgeText, isHighlight, isWinning }) => {
  const display = getTileDisplay(tileId);

  return (
    <div className={`tile ${isHighlight ? 'tile-highlight' : ''} ${isWinning ? 'tile-winning' : ''}`}>
      <div className="tile-content">
        <img
          src={display.imagePath}
          alt={display.alt}
          className="tile-image"
        />
      </div>
      {badgeText && (
        <div className="tile-badge">
          {badgeText}
        </div>
      )}
    </div>
  );
};

export default Tile;
