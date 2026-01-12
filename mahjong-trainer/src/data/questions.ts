// src/data/questions.ts
import type { QuestionData } from '../types/mahjong';

export const questions: QuestionData[] = [
  // 問題1: 平和ツモ (20符)
  {
    id: 'q001',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's5', 's6', 's7', 'z1', 'z1', 'z1', 'm5', 'm6'],
    situation: {
      isRon: false, // ツモ
      isRiichi: true,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['m1'],
    },
    answer: {
      han: 2,
      fu: 20,
      score: 1300,
      yaku: [
        { name: '立直', han: 1 },
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        {
          reason: '副底',
          fu: 20,
          relatedTileIndices: [],
        },
      ],
    },
  },

  // 問題2: 点パネあり (30符 → 40符切り上げ)
  {
    id: 'q002',
    handTiles: ['m1', 'm1', 'm1', 'p7', 'p8', 'p9', 's2', 's3', 's4', 'z2', 'z2', 'z2', 'p5', 'p5'],
    situation: {
      isRon: true, // ロン
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['m9'],
    },
    answer: {
      han: 1,
      fu: 40,
      score: 1300,
      yaku: [
        { name: '断么九', han: 1 },
      ],
      breakdown: [
        {
          reason: '副底',
          fu: 20,
          relatedTileIndices: [],
        },
        {
          reason: '一九暗刻',
          fu: 8,
          relatedTileIndices: [0, 1, 2],
        },
        {
          reason: '雀頭（役牌）',
          fu: 2,
          relatedTileIndices: [9, 10, 11],
        },
        {
          reason: 'ロン',
          fu: 10,
          relatedTileIndices: [],
        },
      ],
    },
  },

  // 問題3: カンチャン待ち (30符)
  {
    id: 'q003',
    handTiles: ['m3', 'm4', 'm5', 'p2', 'p3', 'p4', 's7', 's7', 's7', 's8', 's8', 's8', 'z3', 'z3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['p1'],
    },
    answer: {
      han: 1,
      fu: 30,
      score: 1500,
      yaku: [
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        {
          reason: '副底',
          fu: 20,
          relatedTileIndices: [],
        },
        {
          reason: 'ロン',
          fu: 10,
          relatedTileIndices: [],
        },
      ],
    },
  },

  // 問題4: 高符数の例 (50符)
  {
    id: 'q004',
    handTiles: ['m9', 'm9', 'm9', 'p1', 'p1', 'p1', 's9', 's9', 's9', 'z7', 'z7', 'z7', 'z1', 'z1'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['m2'],
    },
    answer: {
      han: 3,
      fu: 50,
      score: 7700,
      yaku: [
        { name: '混老頭', han: 2 },
        { name: '役牌 東', han: 1 },
      ],
      breakdown: [
        {
          reason: '副底',
          fu: 20,
          relatedTileIndices: [],
        },
        {
          reason: '一九暗刻',
          fu: 8,
          relatedTileIndices: [0, 1, 2],
        },
        {
          reason: '一九暗刻',
          fu: 8,
          relatedTileIndices: [3, 4, 5],
        },
        {
          reason: '一九暗刻',
          fu: 8,
          relatedTileIndices: [6, 7, 8],
        },
        {
          reason: '字牌暗刻',
          fu: 4,
          relatedTileIndices: [9, 10, 11],
        },
        {
          reason: '雀頭（役牌）',
          fu: 2,
          relatedTileIndices: [12, 13],
        },
        {
          reason: 'ロン',
          fu: 10,
          relatedTileIndices: [],
        },
      ],
    },
  },
];
