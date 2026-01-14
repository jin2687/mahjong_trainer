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
      <div className="info-compact-row">
        {/* 親バッジ */}
        {isParent && (
          <div className="badge badge-parent">
            <span className="badge-icon">👑</span>
            <span className="badge-text">親</span>
          </div>
        )}
        
        {/* リーチバッジ */}
        {isRiichi && (
          <div className="badge badge-riichi">
            <span className="badge-icon">🎯</span>
            <span className="badge-text">リーチ</span>
          </div>
        )}
        
        {/* ロン/ツモバッジ */}
        <div className={`badge ${isRon ? 'badge-ron' : 'badge-tsumo'}`}>
          <span className="badge-text">{isRon ? 'ロン' : 'ツモ'}</span>
        </div>

        {/* 場風 */}
        <div className="info-compact-item">
          <span className="compact-value">{windMap[windRound]}場</span>
        </div>

        {/* 自風 */}
        <div className="info-compact-item">
          <span className="compact-value">{windMap[windSeat]}</span>
        </div>

        {/* ドラ表示牌 */}
        <div className="info-compact-item dora-compact">
          <span className="compact-label">ドラ:</span>
          <div className="dora-tiles-compact">
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
