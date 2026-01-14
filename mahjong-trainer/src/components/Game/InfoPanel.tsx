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

  const isParent = windSeat === 'East';

  return (
    <div className="info-panel">
      {/* 重要な情報を大きく表示 */}
      <div className="important-badges">
        {isParent && (
          <div className="badge badge-parent">
            <span className="badge-icon">👑</span>
            <span className="badge-text">親</span>
          </div>
        )}
        {isRiichi && (
          <div className="badge badge-riichi">
            <span className="badge-icon">🎯</span>
            <span className="badge-text">リーチ</span>
          </div>
        )}
        <div className={`badge ${isRon ? 'badge-ron' : 'badge-tsumo'}`}>
          <span className="badge-text">{isRon ? 'ロン' : 'ツモ'}</span>
        </div>
      </div>

      {/* その他の情報 */}
      <div className="info-details">
        <div className="info-row">
          <div className="info-item">
            <span className="info-label">場風:</span>
            <span className="info-value">{windMap[windRound]}場</span>
          </div>
          <div className="info-item">
            <span className="info-label">自風:</span>
            <span className="info-value">{windMap[windSeat]}</span>
          </div>
        </div>

        <div className="dora-section">
          <div className="info-label">ドラ表示牌:</div>
          <div className="dora-tiles">
            {doraIndicators.map((dora, index) => (
              <Tile key={`dora-${index}`} tileId={dora} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
