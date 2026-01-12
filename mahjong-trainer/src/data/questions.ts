// src/data/questions.ts
import type { QuestionData } from '../types/mahjong';

export const questions: QuestionData[] = [
  // 問題1: 平和ツモ (20符)
  {
    id: 'q001',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's5', 's6', 's7', 'p6', 'p7', 'p8', 's2', 's2'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['m9'],
      winningTileIndex: 12,
    },
    answer: {
      han: 2,
      fu: 20,
      score: 1300,
      yaku: [
        { name: '立直', han: 1 },
        { name: '門前清自摸和', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
      ],
    },
  },

  // 問題2: 断么九ロン (30符)
  {
    id: 'q002',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's5', 's6', 's7', 'p6', 'p7', 'p8', 's3', 's3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['m1'],
      winningTileIndex: 13,
    },
    answer: {
      han: 1,
      fu: 30,
      score: 1000,
      yaku: [
        { name: '断么九', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題3: 役牌のみ (30符)
  {
    id: 'q003',
    handTiles: ['m2', 'm3', 'm4', 'p5', 'p6', 'p7', 's7', 's8', 's9', 'z1', 'z1', 'z1', 'p2', 'p2'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['m5'],
      winningTileIndex: 11,
    },
    answer: {
      han: 1,
      fu: 40,
      score: 1500,
      yaku: [
        { name: '役牌 東', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
        { reason: '門前加符', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題4: 立直のみ (30符)
  {
    id: 'q004',
    handTiles: ['m1', 'm2', 'm3', 'p5', 'p6', 'p7', 's7', 's8', 's9', 's2', 's3', 's4', 'z5', 'z5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['m9'],
      winningTileIndex: 13,
    },
    answer: {
      han: 1,
      fu: 30,
      score: 1000,
      yaku: [
        { name: '立直', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題5: 平和立直ロン (30符)
  {
    id: 'q005',
    handTiles: ['m2', 'm3', 'm4', 'p4', 'p5', 'p6', 's3', 's4', 's5', 's6', 's7', 's8', 'p2', 'p2'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['s9'],
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2000,
      yaku: [
        { name: '立直', han: 1 },
        { name: '平和', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題6: 断么九ドラ1 (30符)
  {
    id: 'q006',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's4', 's5', 's6', 's7', 's8', 's9', 'p7', 'p7'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'North',
      doraIndicators: ['p6'],
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2000,
      yaku: [
        { name: '断么九', han: 1 },
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題7: 一盃口 (40符)
  {
    id: 'q007',
    handTiles: ['m3', 'm3', 'm4', 'm4', 'm5', 'm5', 'p2', 'p3', 'p4', 's7', 's8', 's9', 's5', 's5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['m1'],
      winningTileIndex: 11,
    },
    answer: {
      han: 3,
      fu: 40,
      score: 5200,
      yaku: [
        { name: '立直', han: 1 },
        { name: '一盃口', han: 1 },
        { name: '門前清自摸和', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '門前ツモ', fu: 2, relatedTileIndices: [] },
        { reason: '単騎待ち', fu: 2, relatedTileIndices: [] },
      ],
    },
  },

  // 問題8: 三色同順 (40符)
  {
    id: 'q008',
    handTiles: ['m3', 'm4', 'm5', 'p3', 'p4', 'p5', 's3', 's4', 's5', 's7', 's8', 's9', 'm6', 'm6'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['p9'],
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2900,
      yaku: [
        { name: '三色同順', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題9: 一気通貫 (40符)
  {
    id: 'q009',
    handTiles: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'p5', 'p6', 'p7', 's3', 's3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['s5'],
      winningTileIndex: 8,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2000,
      yaku: [
        { name: '一気通貫', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題10: 対々和 (50符)
  {
    id: 'q010',
    handTiles: ['m3', 'm3', 'm3', 'p5', 'p5', 'p5', 's7', 's7', 's7', 's4', 's4', 's4', 'p8', 'p8'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'North',
      doraIndicators: ['m8'],
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 3200,
      yaku: [
        { name: '対々和', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [0, 1, 2] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [3, 4, 5] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [6, 7, 8] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題11: 三暗刻 (60符)
  {
    id: 'q011',
    handTiles: ['m2', 'm2', 'm2', 'p4', 'p4', 'p4', 's8', 's8', 's8', 'p6', 'p7', 'p8', 's5', 's5'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['s1'],
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 4800,
      yaku: [
        { name: '三暗刻', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [0, 1, 2] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [3, 4, 5] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [6, 7, 8] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題12: 混一色 (50符)
  {
    id: 'q012',
    handTiles: ['m2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm7', 'm8', 'm9', 'z1', 'z1', 'z1', 'm3', 'm3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['p5'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 50,
      score: 11600,
      yaku: [
        { name: '混一色', han: 3 },
        { name: '役牌 東', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題13: 清一色 (40符)
  {
    id: 'q013',
    handTiles: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm6', 'm7', 'm8', 'm7', 'm8', 'm9', 'm2', 'm2'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['m3'],
      winningTileIndex: 11,
    },
    answer: {
      han: 7,
      fu: 40,
      score: 18000,
      yaku: [
        { name: '清一色', han: 6 },
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題14: 七対子 (25符)
  {
    id: 'q014',
    handTiles: ['m2', 'm2', 'p3', 'p3', 's5', 's5', 's7', 's7', 'p8', 'p8', 'z2', 'z2', 'm6', 'm6'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['s4'],
      winningTileIndex: 13,
    },
    answer: {
      han: 3,
      fu: 25,
      score: 3200,
      yaku: [
        { name: '立直', han: 1 },
        { name: '七対子', han: 2 },
      ],
      breakdown: [
        { reason: '七対子', fu: 25, relatedTileIndices: [] },
      ],
    },
  },

  // 問題15: 混老頭 (60符)
  {
    id: 'q015',
    handTiles: ['m1', 'm1', 'm1', 'p9', 'p9', 'p9', 's1', 's1', 's1', 'z5', 'z5', 'z5', 'm9', 'm9'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['p1'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 60,
      score: 8000,
      yaku: [
        { name: '混老頭', han: 2 },
        { name: '対々和', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '么九牌暗刻', fu: 8, relatedTileIndices: [0, 1, 2] },
        { reason: '么九牌暗刻', fu: 8, relatedTileIndices: [3, 4, 5] },
        { reason: '么九牌暗刻', fu: 8, relatedTileIndices: [6, 7, 8] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題16: 三色同刻 (60符)
  {
    id: 'q016',
    handTiles: ['m5', 'm5', 'm5', 'p5', 'p5', 'p5', 's5', 's5', 's5', 'p7', 'p8', 'p9', 's2', 's2'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['m9'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 50,
      score: 9600,
      yaku: [
        { name: '三色同刻', han: 2 },
        { name: '対々和', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [0, 1, 2] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [3, 4, 5] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [6, 7, 8] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題17: 立直ドラ2 (30符)
  {
    id: 'q017',
    handTiles: ['m4', 'm5', 'm6', 'p2', 'p3', 'p4', 's6', 's7', 's8', 'p7', 'p7', 'p7', 's3', 's3'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'North',
      doraIndicators: ['p6'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 40,
      score: 8000,
      yaku: [
        { name: '立直', han: 1 },
        { name: 'ドラ', han: 3 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
        { reason: '門前加符', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題18: 二盃口 (40符)
  {
    id: 'q018',
    handTiles: ['m3', 'm3', 'm4', 'm4', 'm5', 'm5', 's7', 's7', 's8', 's8', 's9', 's9', 'p5', 'p5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'West',
      doraIndicators: ['m8'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 40,
      score: 8000,
      yaku: [
        { name: '立直', han: 1 },
        { name: '二盃口', han: 3 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題19: 小三元 (60符)
  {
    id: 'q019',
    handTiles: ['z5', 'z5', 'z5', 'z6', 'z6', 'z6', 'z7', 'z7', 'z7', 'm2', 'm3', 'm4', 'z6', 'z6'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['s9'],
      winningTileIndex: 8,
    },
    answer: {
      han: 6,
      fu: 70,
      score: 18000,
      yaku: [
        { name: '小三元', han: 2 },
        { name: '役牌 白', han: 1 },
        { name: '役牌 發', han: 1 },
        { name: '役牌 中', han: 1 },
        { name: '対々和', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [0, 1, 2] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [3, 4, 5] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [6, 7, 8] },
        { reason: '雀頭（役牌）', fu: 2, relatedTileIndices: [12, 13] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題20: 断么九平和立直ツモ (20符)
  {
    id: 'q020',
    handTiles: ['m3', 'm4', 'm5', 'p2', 'p3', 'p4', 'p6', 'p7', 'p8', 's4', 's5', 's6', 's7', 's7'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'North',
      doraIndicators: ['m1'],
      winningTileIndex: 13,
    },
    answer: {
      han: 3,
      fu: 20,
      score: 2600,
      yaku: [
        { name: '立直', han: 1 },
        { name: '門前清自摸和', han: 1 },
        { name: '断么九', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
      ],
    },
  },

  // 問題21: 役牌2つ (40符)
  {
    id: 'q021',
    handTiles: ['m7', 'm8', 'm9', 'z1', 'z1', 'z1', 'z5', 'z5', 'z5', 'p3', 'p4', 'p5', 's8', 's8'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['p9'],
      winningTileIndex: 8,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 4800,
      yaku: [
        { name: '役牌 東', han: 1 },
        { name: '役牌 白', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [3, 4, 5] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [6, 7, 8] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題22: カンチャン待ち (30符)
  {
    id: 'q022',
    handTiles: ['m1', 'm2', 'm3', 'p4', 'p5', 'p6', 's7', 's9', 's8', 'p2', 'p3', 'p4', 'm5', 'm5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['z1'],
      winningTileIndex: 8,
    },
    answer: {
      han: 1,
      fu: 40,
      score: 1300,
      yaku: [
        { name: '立直', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'カンチャン待ち', fu: 2, relatedTileIndices: [6, 7, 8] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題23: ペンチャン待ち (30符)
  {
    id: 'q023',
    handTiles: ['p1', 'p2', 'p3', 's4', 's5', 's6', 'm7', 'm8', 'm9', 's1', 's2', 's3', 'p7', 'p7'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['p5'],
      winningTileIndex: 2,
    },
    answer: {
      han: 1,
      fu: 40,
      score: 1300,
      yaku: [
        { name: '立直', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ペンチャン待ち', fu: 2, relatedTileIndices: [0, 1, 2] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題24: 単騎待ち (30符)
  {
    id: 'q024',
    handTiles: ['m3', 'm4', 'm5', 'p6', 'p7', 'p8', 's2', 's2', 's2', 's5', 's6', 's7', 'p2', 'p2'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['m2'],
      winningTileIndex: 13,
    },
    answer: {
      han: 1,
      fu: 50,
      score: 1600,
      yaku: [
        { name: '立直', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [6, 7, 8] },
        { reason: '単騎待ち', fu: 2, relatedTileIndices: [12, 13] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
        { reason: '門前加符', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題25: 一気通貫立直 (40符)
  {
    id: 'q025',
    handTiles: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 'm2', 'm3', 'm4', 'p4', 'p4'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'North',
      doraIndicators: ['p1'],
      winningTileIndex: 8,
    },
    answer: {
      han: 3,
      fu: 30,
      score: 3900,
      yaku: [
        { name: '立直', han: 1 },
        { name: '一気通貫', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題26: 三色同順立直 (40符)
  {
    id: 'q026',
    handTiles: ['m2', 'm3', 'm4', 'p2', 'p3', 'p4', 's2', 's3', 's4', 'p6', 'p7', 'p8', 'm7', 'm7'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['s8'],
      winningTileIndex: 11,
    },
    answer: {
      han: 3,
      fu: 30,
      score: 5800,
      yaku: [
        { name: '立直', han: 1 },
        { name: '三色同順', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題27: 対々和三暗刻 (50符)
  {
    id: 'q027',
    handTiles: ['m4', 'm4', 'm4', 'p6', 'p6', 'p6', 's3', 's3', 's3', 's8', 's8', 's8', 'p9', 'p9'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['z2'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 50,
      score: 8000,
      yaku: [
        { name: '対々和', han: 2 },
        { name: '三暗刻', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [0, 1, 2] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [3, 4, 5] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [6, 7, 8] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題28: 混一色対々和 (60符)
  {
    id: 'q028',
    handTiles: ['p3', 'p3', 'p3', 'p6', 'p6', 'p6', 'p8', 'p8', 'p8', 'z2', 'z2', 'z2', 'p5', 'p5'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['p7'],
      winningTileIndex: 11,
    },
    answer: {
      han: 6,
      fu: 60,
      score: 18000,
      yaku: [
        { name: '混一色', han: 3 },
        { name: '対々和', han: 2 },
        { name: '役牌 南', han: 1 },
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [0, 1, 2] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [3, 4, 5] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [6, 7, 8] },
        { reason: '字牌暗刻', fu: 8, relatedTileIndices: [9, 10, 11] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題29: 清一色一気通貫 (60符)
  {
    id: 'q029',
    handTiles: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm3', 'm4', 'm5', 'm6', 'm6'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['m9'],
      winningTileIndex: 8,
    },
    answer: {
      han: 8,
      fu: 30,
      score: 24000,
      yaku: [
        { name: '清一色', han: 6 },
        { name: '一気通貫', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題30: 立直一発ツモドラ (20符)
  {
    id: 'q030',
    handTiles: ['m2', 'm3', 'm4', 'p5', 'p6', 'p7', 's3', 's4', 's5', 'p8', 'p8', 'p8', 's7', 's7'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'West',
      doraIndicators: ['p7'],
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 30,
      score: 3900,
      yaku: [
        { name: '立直', han: 1 },
        { name: '門前清自摸和', han: 1 },
        { name: 'ドラ', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [9, 10, 11] },
        { reason: '門前ツモ', fu: 2, relatedTileIndices: [] },
      ],
    },
  },
];
