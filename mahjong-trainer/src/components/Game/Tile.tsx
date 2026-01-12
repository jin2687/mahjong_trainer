// src/components/Game/Tile.tsx
import React from 'react';
import './Tile.css';

interface TileProps {
  tileId: string;
  badgeText?: string;
  isHighlight?: boolean;
}

const Tile: React.FC<TileProps> = ({ tileId, badgeText, isHighlight }) => {
  // 牌のラベルを生成（簡易表示用）
  const getTileLabel = (id: string): string => {
    const type = id.charAt(0);
    const number = id.substring(1);

    const typeMap: Record<string, string> = {
      'm': '萬',
      'p': '筒',
      's': '索',
      'z': '字',
    };

    if (type === 'z') {
      const zhaiMap: Record<string, string> = {
        '1': '東',
        '2': '南',
        '3': '西',
        '4': '北',
        '5': '白',
        '6': '發',
        '7': '中',
      };
      return zhaiMap[number] || number;
    }

    return `${number}${typeMap[type] || ''}`;
  };

  return (
    <div className={`tile ${isHighlight ? 'tile-highlight' : ''}`}>
      <div className="tile-content">
        {getTileLabel(tileId)}
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
