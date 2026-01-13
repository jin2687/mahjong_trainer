// src/components/ScoreTable/ScoreTableModal.tsx
import React from 'react';
import './ScoreTableModal.css';

interface ScoreTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScoreTableModal: React.FC<ScoreTableModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 点数表データ: [翻, 符] => { 親ロン, 子ロン, 親ツモ, 子ツモ(親払い-子払い) }
  const scoreData: Record<string, { parent: number; child: number; parentTsumo: string; childTsumo: string }> = {
    // 1翻
    '1-30': { parent: 1500, child: 1000, parentTsumo: '500オール', childTsumo: '300-500' },
    '1-40': { parent: 1900, child: 1300, parentTsumo: '700オール', childTsumo: '400-700' },
    '1-50': { parent: 2400, child: 1600, parentTsumo: '800オール', childTsumo: '400-800' },
    '1-60': { parent: 2900, child: 2000, parentTsumo: '1000オール', childTsumo: '500-1000' },
    '1-70': { parent: 3400, child: 2300, parentTsumo: '1200オール', childTsumo: '600-1200' },
    // 2翻
    '2-20': { parent: 2000, child: 1300, parentTsumo: '700オール', childTsumo: '400-700' }, // 平和ツモ
    '2-25': { parent: 2400, child: 1600, parentTsumo: '800オール', childTsumo: '400-800' },
    '2-30': { parent: 2900, child: 2000, parentTsumo: '1000オール', childTsumo: '500-1000' },
    '2-40': { parent: 3900, child: 2600, parentTsumo: '1300オール', childTsumo: '700-1300' },
    '2-50': { parent: 4800, child: 3200, parentTsumo: '1600オール', childTsumo: '800-1600' },
    '2-60': { parent: 5800, child: 3900, parentTsumo: '2000オール', childTsumo: '1000-2000' },
    '2-70': { parent: 6800, child: 4500, parentTsumo: '2300オール', childTsumo: '1200-2300' },
    // 3翻
    '3-25': { parent: 4800, child: 3200, parentTsumo: '1600オール', childTsumo: '800-1600' },
    '3-30': { parent: 5800, child: 3900, parentTsumo: '2000オール', childTsumo: '1000-2000' },
    '3-40': { parent: 7700, child: 5200, parentTsumo: '2600オール', childTsumo: '1300-2600' },
    '3-50': { parent: 9600, child: 6400, parentTsumo: '3200オール', childTsumo: '1600-3200' },
    '3-60': { parent: 11600, child: 7700, parentTsumo: '3900オール', childTsumo: '2000-3900' },
    // 4翻
    '4-25': { parent: 9600, child: 6400, parentTsumo: '3200オール', childTsumo: '1600-3200' },
    '4-30': { parent: 11600, child: 7700, parentTsumo: '3900オール', childTsumo: '2000-3900' },
    '4-40': { parent: 12000, child: 8000, parentTsumo: '4000オール', childTsumo: '2000-4000' }, // 満貫
    // 5翻（満貫）
    '5-30': { parent: 12000, child: 8000, parentTsumo: '4000オール', childTsumo: '2000-4000' },
    // 6-7翻（跳満）
    '6-30': { parent: 18000, child: 12000, parentTsumo: '6000オール', childTsumo: '3000-6000' },
    '7-30': { parent: 18000, child: 12000, parentTsumo: '6000オール', childTsumo: '3000-6000' },
    // 8-10翻（倍満）
    '8-30': { parent: 24000, child: 16000, parentTsumo: '8000オール', childTsumo: '4000-8000' },
    '9-30': { parent: 24000, child: 16000, parentTsumo: '8000オール', childTsumo: '4000-8000' },
    '10-30': { parent: 24000, child: 16000, parentTsumo: '8000オール', childTsumo: '4000-8000' },
    // 11-12翻（三倍満）
    '11-30': { parent: 36000, child: 24000, parentTsumo: '12000オール', childTsumo: '6000-12000' },
    '12-30': { parent: 36000, child: 24000, parentTsumo: '12000オール', childTsumo: '6000-12000' },
    // 13翻以上（役満）
    '13-30': { parent: 48000, child: 32000, parentTsumo: '16000オール', childTsumo: '8000-16000' },
  };

  const hanGroups = [
    { title: '1翻', keys: ['1-30', '1-40', '1-50', '1-60', '1-70'] },
    { title: '2翻', keys: ['2-20', '2-25', '2-30', '2-40', '2-50', '2-60', '2-70'] },
    { title: '3翻', keys: ['3-25', '3-30', '3-40', '3-50', '3-60'] },
    { title: '4翻', keys: ['4-25', '4-30', '4-40'] },
    { title: '5翻（満貫）', keys: ['5-30'] },
    { title: '6-7翻（跳満）', keys: ['6-30', '7-30'] },
    { title: '8-10翻（倍満）', keys: ['8-30', '9-30', '10-30'] },
    { title: '11-12翻（三倍満）', keys: ['11-30', '12-30'] },
    { title: '13翻以上（役満）', keys: ['13-30'] },
  ];

  return (
    <div className="score-table-overlay" onClick={onClose}>
      <div className="score-table-modal" onClick={(e) => e.stopPropagation()}>
        <div className="score-table-header">
          <h2>点数表</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="score-table-content">
          <table className="score-table">
            <thead>
              <tr>
                <th>翻・符</th>
                <th>親ロン</th>
                <th>子ロン</th>
                <th>親ツモ</th>
                <th>子ツモ</th>
              </tr>
            </thead>
            <tbody>
              {hanGroups.map((group) => (
                <React.Fragment key={group.title}>
                  <tr className="group-header">
                    <td colSpan={5}>{group.title}</td>
                  </tr>
                  {group.keys.map((key) => {
                    const [han, fu] = key.split('-');
                    const data = scoreData[key];
                    if (!data) return null;
                    return (
                      <tr key={key}>
                        <td>{han}翻{fu}符</td>
                        <td>{data.parent.toLocaleString()}</td>
                        <td>{data.child.toLocaleString()}</td>
                        <td>{data.parentTsumo}</td>
                        <td>{data.childTsumo}</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="score-table-note">
            <p>※ 子ツモの表記は「親払い-子払い」です</p>
            <p>※ 5翻以上は満貫切り上げで符は関係なくなります</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTableModal;
