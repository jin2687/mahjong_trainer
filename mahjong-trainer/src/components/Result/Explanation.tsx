// src/components/Result/Explanation.tsx
import React from 'react';
import './Explanation.css';

interface ExplanationProps {
  isCorrect: boolean;
  correctAnswer: {
    han: number;
    fu: number;
    score: number;
    yaku: {
      name: string;
      han: number;
    }[];
  };
  userAnswer: {
    han: number;
    fu: number;
    score: number;
  };
  breakdown: {
    reason: string;
    fu: number;
    relatedTileIndices: number[];
  }[];
  onNext: () => void;
}

const Explanation: React.FC<ExplanationProps> = ({
  isCorrect,
  correctAnswer,
  userAnswer,
  breakdown,
  onNext,
}) => {
  const totalFu = breakdown.reduce((sum, item) => sum + item.fu, 0);

  return (
    <div className="explanation">
      <div className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? '正解！' : '不正解'}
      </div>

      <div className="answer-comparison">
        <div className="answer-section">
          <h3>あなたの回答</h3>
          <div className="answer-details">
            <div className="detail-item">
              <span className="label">翻数:</span>
              <span className={`value ${userAnswer.han === correctAnswer.han ? 'correct-value' : 'incorrect-value'}`}>
                {userAnswer.han}翻
              </span>
            </div>
            <div className="detail-item">
              <span className="label">符数:</span>
              <span className={`value ${userAnswer.fu === correctAnswer.fu ? 'correct-value' : 'incorrect-value'}`}>
                {userAnswer.fu}符
              </span>
            </div>
            <div className="detail-item">
              <span className="label">点数:</span>
              <span className={`value ${userAnswer.score === correctAnswer.score ? 'correct-value' : 'incorrect-value'}`}>
                {userAnswer.score.toLocaleString()}点
              </span>
            </div>
          </div>
        </div>

        <div className="answer-section">
          <h3>正解</h3>
          <div className="answer-details">
            <div className="detail-item">
              <span className="label">翻数:</span>
              <span className="value correct-value">{correctAnswer.han}翻</span>
            </div>
            <div className="detail-item">
              <span className="label">符数:</span>
              <span className="value correct-value">{correctAnswer.fu}符</span>
            </div>
            <div className="detail-item">
              <span className="label">点数:</span>
              <span className="value correct-value">{correctAnswer.score.toLocaleString()}点</span>
            </div>
          </div>
        </div>
      </div>

      <div className="yaku-section">
        <h3>役の内訳（翻数）</h3>
        <div className="yaku-list">
          {correctAnswer.yaku.map((yaku, index) => (
            <div key={index} className="yaku-item">
              <span className="yaku-name">{yaku.name}</span>
              <span className="yaku-han">{yaku.han}翻</span>
            </div>
          ))}
        </div>
        <div className="yaku-total">
          <span>合計</span>
          <span className="total-value">{correctAnswer.han}翻</span>
        </div>
      </div>

      <div className="breakdown-section">
        <h3>符の内訳</h3>
        <div className="breakdown-list">
          {breakdown.map((item, index) => (
            <div key={index} className="breakdown-item">
              <span className="breakdown-reason">{item.reason}</span>
              <span className="breakdown-fu">+{item.fu}符</span>
            </div>
          ))}
        </div>
        <div className="breakdown-total">
          <span>合計</span>
          <span className="total-value">{totalFu}符</span>
        </div>
      </div>

      <div className="action-area">
        <button className="btn btn-next" onClick={onNext}>
          次の問題へ
        </button>
      </div>
    </div>
  );
};

export default Explanation;
