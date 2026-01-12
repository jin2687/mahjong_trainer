// src/components/Input/StepForm.tsx
import React, { useState } from 'react';
import './StepForm.css';

interface StepFormProps {
  onSubmit: (han: number, fu: number, score: number) => void;
  isParent: boolean;
}

const StepForm: React.FC<StepFormProps> = ({ onSubmit, isParent }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [han, setHan] = useState<number | null>(null);
  const [fu, setFu] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const hanOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const fuOptions = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];

  // 親/子で異なる頻出点数
  const scoreOptions = isParent
    ? [1500, 2000, 2900, 3900, 5800, 7700, 8000, 11600, 12000, 16000, 24000, 32000, 48000]
    : [1000, 1300, 1500, 2000, 2600, 3900, 5200, 7700, 8000, 12000, 16000, 24000, 32000];

  const handleNext = () => {
    if (currentStep === 1 && han !== null) {
      setCurrentStep(2);
    } else if (currentStep === 2 && fu !== null) {
      setCurrentStep(3);
    } else if (currentStep === 3 && score !== null) {
      onSubmit(han!, fu!, score!);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return han !== null;
    if (currentStep === 2) return fu !== null;
    if (currentStep === 3) return score !== null;
    return false;
  };

  return (
    <div className="step-form">
      <div className="step-indicator">
        <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1. 翻数</div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2. 符数</div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3. 点数</div>
      </div>

      <div className="form-content">
        {currentStep === 1 && (
          <div className="selection-area">
            <h3>翻数を選択してください</h3>
            <div className="options-grid">
              {hanOptions.map((h) => (
                <button
                  key={h}
                  className={`option-button ${han === h ? 'selected' : ''}`}
                  onClick={() => setHan(h)}
                >
                  {h}翻
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="selection-area">
            <h3>符数を選択してください</h3>
            <div className="options-grid">
              {fuOptions.map((f) => (
                <button
                  key={f}
                  className={`option-button ${fu === f ? 'selected' : ''}`}
                  onClick={() => setFu(f)}
                >
                  {f}符
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="selection-area">
            <h3>点数を選択してください</h3>
            <div className="options-grid">
              {scoreOptions.map((s) => (
                <button
                  key={s}
                  className={`option-button ${score === s ? 'selected' : ''}`}
                  onClick={() => setScore(s)}
                >
                  {s.toLocaleString()}点
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="form-actions">
        {currentStep > 1 && (
          <button className="btn btn-secondary" onClick={handleBack}>
            戻る
          </button>
        )}
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {currentStep === 3 ? '決定' : '次へ'}
        </button>
      </div>
    </div>
  );
};

export default StepForm;
