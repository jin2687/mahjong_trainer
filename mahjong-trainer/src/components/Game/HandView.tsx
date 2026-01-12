// src/components/Game/HandView.tsx
import React from 'react';
import Tile from './Tile';
import type { TileData } from '../../types/mahjong';
import './HandView.css';

interface HandViewProps {
  tiles: TileData[];
  winningTileIndex?: number;
  isRon?: boolean;
}

const HandView: React.FC<HandViewProps> = ({ tiles, winningTileIndex, isRon }) => {
  return (
    <div className="hand-view">
      <div className="tiles-container">
        {tiles.map((tile, index) => (
          <React.Fragment key={`${tile.id}-${index}`}>
            <Tile
              tileId={tile.id}
              badgeText={tile.badgeText}
              isHighlight={tile.isHighlight}
              isWinning={index === winningTileIndex}
            />
            {index === winningTileIndex && (
              <div className="winning-tile-separator">
                <span className="winning-label">
                  {isRon ? 'ロン' : 'ツモ'}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HandView;
