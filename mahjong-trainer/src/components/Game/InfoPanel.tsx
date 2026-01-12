// src/components/Game/InfoPanel.tsx
import React from 'react';
import Tile from './Tile';
import './InfoPanel.css';

interface InfoPanelProps {
  isRon: boolean;
  isRiichi: boolean;
  windRound: 'East' | 'South';
  windSeat: 'East' | 'South' | 'West' | 'North';
  doraIndicators: string[];
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  isRon,
  isRiichi,
  windRound,
  windSeat,
  doraIndicators,
}) => {
  const windMap: Record<string, string> = {
    East: '東',
    South: '南',
    West: '西',
    North: '北',
  };

  return (
    <div className="info-panel">
      <div className="info-section">
        <div className="info-item">
          <span className="info-label">場風:</span>
          <span className="info-value">{windMap[windRound]}場</span>
        </div>
        <div className="info-item">
          <span className="info-label">自風:</span>
          <span className="info-value">{windMap[windSeat]}</span>
        </div>
      </div>

      <div className="info-section">
        <div className="info-item">
          <span className="info-label">アガリ:</span>
          <span className={`info-value ${isRon ? 'highlight-ron' : 'highlight-tsumo'}`}>
            {isRon ? 'ロン' : 'ツモ'}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">リーチ:</span>
          <span className="info-value">{isRiichi ? 'あり' : 'なし'}</span>
        </div>
      </div>

      <div className="info-section dora-section">
        <div className="info-label">ドラ表示牌:</div>
        <div className="dora-tiles">
          {doraIndicators.map((dora, index) => (
            <Tile key={`dora-${index}`} tileId={dora} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
