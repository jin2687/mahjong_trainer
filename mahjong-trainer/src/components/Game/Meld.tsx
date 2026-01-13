// src/components/Game/Meld.tsx
import React from 'react';
import './Meld.css';
import { getTileDisplay } from '../../utils/tileDisplay';
import type { Meld as MeldData } from '../../types/mahjong';

interface MeldProps {
  meld: MeldData;
}

const Meld: React.FC<MeldProps> = ({ meld }) => {
  const { tiles, calledTileIndex = 0 } = meld;

  return (
    <div className="meld">
      {tiles.map((tileId, index) => {
        const display = getTileDisplay(tileId);
        const imageSrc = `${import.meta.env.BASE_URL}tiles/${tileId}.png`;
        const isRotated = index === calledTileIndex; // 鳴いた牌は横向き

        return (
          <div
            key={`${tileId}-${index}`}
            className={`meld-tile ${isRotated ? 'meld-tile-rotated' : ''}`}
          >
            <img
              src={imageSrc}
              alt={display.alt}
              className="meld-tile-image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Meld;
