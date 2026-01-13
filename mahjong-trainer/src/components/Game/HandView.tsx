// src/components/Game/HandView.tsx
import React from 'react';
import Tile from './Tile';
import Meld from './Meld';
import type { TileData, Meld as MeldData } from '../../types/mahjong';
import './HandView.css';

interface HandViewProps {
  tiles: TileData[];
  melds?: MeldData[];
  winningTileIndex?: number;
  isRon?: boolean;
}

const HandView: React.FC<HandViewProps> = ({ tiles, melds, winningTileIndex, isRon }) => {
  return (
    <div className="hand-view">
      <div className="hand-view-layout">
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
        {melds && melds.length > 0 && (
          <div className="melds-container">
            {melds.map((meld, index) => (
              <Meld key={`meld-${index}`} meld={meld} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HandView;
