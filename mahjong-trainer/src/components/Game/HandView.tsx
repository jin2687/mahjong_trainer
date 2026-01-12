// src/components/Game/HandView.tsx
import React from 'react';
import Tile from './Tile';
import type { TileData } from '../../types/mahjong';
import './HandView.css';

interface HandViewProps {
  tiles: TileData[];
}

const HandView: React.FC<HandViewProps> = ({ tiles }) => {
  return (
    <div className="hand-view">
      <div className="tiles-container">
        {tiles.map((tile, index) => (
          <Tile
            key={`${tile.id}-${index}`}
            tileId={tile.id}
            badgeText={tile.badgeText}
            isHighlight={tile.isHighlight}
          />
        ))}
      </div>
    </div>
  );
};

export default HandView;
