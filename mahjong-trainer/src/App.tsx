// src/App.tsx
import { useState, useMemo } from 'react';
import './App.css';
import { questions } from './data/questions';
import type { TileData } from './types/mahjong';
import HandView from './components/Game/HandView';
import InfoPanel from './components/Game/InfoPanel';
import StepForm from './components/Input/StepForm';
import Explanation from './components/Result/Explanation';

type GameState = 'question' | 'result';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameState, setGameState] = useState<GameState>('question');
  const [userAnswer, setUserAnswer] = useState<{
    han: number;
    fu: number;
    score: number;
  } | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isParent = currentQuestion.situation.windSeat === 'East';

  // 手牌データを生成（解説モード時はバッジを追加）
  const tilesData = useMemo<TileData[]>(() => {
    if (gameState === 'question') {
      // 通常モード: バッジなし
      return currentQuestion.handTiles.map((id) => ({ id }));
    } else {
      // 解説モード: バッジを追加
      const tiles: TileData[] = currentQuestion.handTiles.map((id) => ({ id }));

      currentQuestion.answer.breakdown.forEach((item) => {
        item.relatedTileIndices.forEach((index) => {
          if (tiles[index]) {
            tiles[index].badgeText = `+${item.fu}符`;
            tiles[index].isHighlight = true;
          }
        });
      });

      return tiles;
    }
  }, [currentQuestion, gameState]);

  const handleSubmitAnswer = (han: number, fu: number, score: number) => {
    setUserAnswer({ han, fu, score });
    setGameState('result');
  };

  const handleNextQuestion = () => {
    // 次の問題へ
    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIndex);
    setGameState('question');
    setUserAnswer(null);
  };

  const isCorrect = useMemo(() => {
    if (!userAnswer) return false;
    const { han, fu, score } = currentQuestion.answer;
    return (
      userAnswer.han === han &&
      userAnswer.fu === fu &&
      userAnswer.score === score
    );
  }, [userAnswer, currentQuestion.answer]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🀄 Mahjong Trainer</h1>
        <p className="subtitle">麻雀点数計算トレーニング</p>
      </header>

      <main className="app-main">
        <div className="question-info">
          <span className="question-number">
            問題 {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>

        <InfoPanel
          isRon={currentQuestion.situation.isRon}
          isRiichi={currentQuestion.situation.isRiichi}
          windRound={currentQuestion.situation.windRound}
          windSeat={currentQuestion.situation.windSeat}
          doraIndicators={currentQuestion.situation.doraIndicators}
        />

        <HandView
          tiles={tilesData}
          winningTileIndex={currentQuestion.situation.winningTileIndex}
          isRon={currentQuestion.situation.isRon}
        />

        {gameState === 'question' && (
          <StepForm onSubmit={handleSubmitAnswer} isParent={isParent} />
        )}

        {gameState === 'result' && userAnswer && (
          <Explanation
            isCorrect={isCorrect}
            correctAnswer={currentQuestion.answer}
            userAnswer={userAnswer}
            breakdown={currentQuestion.answer.breakdown}
            onNext={handleNextQuestion}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2026 Mahjong Trainer - Learn to calculate mahjong scores</p>
      </footer>
    </div>
  );
}

export default App;
