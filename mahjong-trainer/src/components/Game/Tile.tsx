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
  // Viteのベースパスを含めた画像パス
  const imageSrc = `${import.meta.env.BASE_URL}tiles/${tileId}.png`;

  return (
    <div className={`tile ${isHighlight ? 'tile-highlight' : ''} ${isWinning ? 'tile-winning' : ''}`}>
      <div className="tile-content">
        <img
          src={imageSrc}
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
