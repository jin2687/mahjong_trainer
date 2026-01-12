// src/data/questions.ts
import type { QuestionData } from '../types/mahjong';

export const questions: QuestionData[] = [
  // 問題1: 平和ツモ (20符) - ドラなし
  {
    id: 'q001',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's5', 's6', 's7', 'p6', 'p7', 'p8', 's2', 's2'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['m9'], // ドラ: m1
      winningTileIndex: 12,
    },
    answer: {
      han: 2,
      fu: 20,
      score: 1300, // 子2翻20符ツモ: 400-700
      yaku: [
        { name: '立直', han: 1 },
        { name: '門前清自摸和', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
      ],
    },
  },

  // 問題2: 断么九+ドラ1 (30符)
  {
    id: 'q002',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's5', 's6', 's7', 'p6', 'p7', 'p8', 's3', 's3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['m1'], // ドラ: m2
      winningTileIndex: 13,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2000, // 子2翻30符ロン
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

  // 問題3: 役牌のみ (40符) - ドラなし
  {
    id: 'q003',
    handTiles: ['m2', 'm3', 'm4', 'p5', 'p6', 'p7', 's7', 's8', 's9', 'z1', 'z1', 'z1', 'p2', 'p2'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['m5'], // ドラ: m6
      winningTileIndex: 11,
    },
    answer: {
      han: 1,
      fu: 50,
      score: 2400, // 親1翻50符ロン
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

  // 問題4: 立直+ドラ1 (30符)
  {
    id: 'q004',
    handTiles: ['m1', 'm2', 'm3', 'p5', 'p6', 'p7', 's7', 's8', 's9', 's2', 's3', 's4', 'z5', 'z5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['m9'], // ドラ: m1
      winningTileIndex: 13,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2900, // 親2翻30符ロン
      yaku: [
        { name: '立直', han: 1 },
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題5: 平和立直ロン (30符) - ドラなし
  {
    id: 'q005',
    handTiles: ['m2', 'm3', 'm4', 'p4', 'p5', 'p6', 's3', 's4', 's5', 's6', 's7', 's8', 'p2', 'p2'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['s9'], // ドラ: s1
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2000, // 子2翻30符ロン
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

  // 問題6: 断么九+ドラ2 (30符)
  {
    id: 'q006',
    handTiles: ['m2', 'm3', 'm4', 'p3', 'p4', 'p5', 's4', 's5', 's6', 's7', 's8', 's9', 'p7', 'p7'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'North',
      doraIndicators: ['p6'], // ドラ: p7
      winningTileIndex: 11,
    },
    answer: {
      han: 3,
      fu: 30,
      score: 3900, // 子3翻30符ロン
      yaku: [
        { name: '断么九', han: 1 },
        { name: 'ドラ', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題7: 一盃口立直ツモ (30符) - ドラなし
  {
    id: 'q007',
    handTiles: ['m3', 'm3', 'm4', 'm4', 'm5', 'm5', 'p2', 'p3', 'p4', 's7', 's8', 's9', 's5', 's5'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['m1'], // ドラ: m2
      winningTileIndex: 12,
    },
    answer: {
      han: 3,
      fu: 30,
      score: 3900, // 子3翻30符ツモ: 1000-2000
      yaku: [
        { name: '立直', han: 1 },
        { name: '門前清自摸和', han: 1 },
        { name: '一盃口', han: 1 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '門前ツモ', fu: 2, relatedTileIndices: [] },
        { reason: '単騎待ち', fu: 2, relatedTileIndices: [] },
        { reason: '暗刻なし切り上げ', fu: 6, relatedTileIndices: [] },
      ],
    },
  },

  // 問題8: 三色同順 (30符) - ドラなし
  {
    id: 'q008',
    handTiles: ['m3', 'm4', 'm5', 'p3', 'p4', 'p5', 's3', 's4', 's5', 's7', 's8', 's9', 'm6', 'm6'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['p9'], // ドラ: p1
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2900, // 親2翻30符ロン
      yaku: [
        { name: '三色同順', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題9: 一気通貫 (30符) - ドラなし
  {
    id: 'q009',
    handTiles: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'p5', 'p6', 'p7', 's3', 's3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['s5'], // ドラ: s6
      winningTileIndex: 8,
    },
    answer: {
      han: 2,
      fu: 30,
      score: 2000, // 子2翻30符ロン
      yaku: [
        { name: '一気通貫', han: 2 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: 'ロン', fu: 10, relatedTileIndices: [] },
      ],
    },
  },

  // 問題10: 対々和 (50符) - ドラなし
  {
    id: 'q010',
    handTiles: ['m3', 'm3', 'm3', 'p5', 'p5', 'p5', 's7', 's7', 's7', 's4', 's4', 's4', 'p8', 'p8'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'North',
      doraIndicators: ['m8'], // ドラ: m9
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 3200, // 子2翻50符ロン
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

  // 問題11: 三暗刻 (50符) - ドラなし
  {
    id: 'q011',
    handTiles: ['m2', 'm2', 'm2', 'p4', 'p4', 'p4', 's8', 's8', 's8', 'p6', 'p7', 'p8', 's5', 's5'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['s1'], // ドラ: s2
      winningTileIndex: 11,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 4800, // 親2翻50符ロン
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

  // 問題12: 混一色+役牌 (50符) - ドラなし
  {
    id: 'q012',
    handTiles: ['m2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm7', 'm8', 'm9', 'z1', 'z1', 'z1', 'm3', 'm3'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['p5'], // ドラ: p6
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 50,
      score: 11600, // 親4翻50符ロン
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

  // 問題13: 清一色+ドラ1 (30符)
  {
    id: 'q013',
    handTiles: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm6', 'm7', 'm8', 'm7', 'm8', 'm9', 'm2', 'm2'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['m3'], // ドラ: m4
      winningTileIndex: 11,
    },
    answer: {
      han: 7,
      fu: 30,
      score: 18000, // 親7翻30符ロン（跳満）
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

  // 問題14: 七対子立直+ドラ1 (25符)
  {
    id: 'q014',
    handTiles: ['m2', 'm2', 'p3', 'p3', 's5', 's5', 's7', 's7', 'p8', 'p8', 'z2', 'z2', 'm6', 'm6'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['s4'], // ドラ: s5
      winningTileIndex: 13,
    },
    answer: {
      han: 4,
      fu: 25,
      score: 6400, // 子4翻25符ロン
      yaku: [
        { name: '立直', han: 1 },
        { name: '七対子', han: 2 },
        { name: 'ドラ', han: 1 },
      ],
      breakdown: [
        { reason: '七対子', fu: 25, relatedTileIndices: [] },
      ],
    },
  },

  // 問題15: 混老頭+対々和+ドラ1 (60符)
  {
    id: 'q015',
    handTiles: ['m1', 'm1', 'm1', 'p9', 'p9', 'p9', 's1', 's1', 's1', 'z5', 'z5', 'z5', 'm9', 'm9'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'South',
      doraIndicators: ['p1'], // ドラ: p2
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 60,
      score: 8000, // 子4翻60符ロン（満貫）
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

  // 問題16: 三色同刻+対々和 (50符) - ドラなし
  {
    id: 'q016',
    handTiles: ['m5', 'm5', 'm5', 'p5', 'p5', 'p5', 's5', 's5', 's5', 'p7', 'p8', 'p9', 's2', 's2'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['m9'], // ドラ: m1
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 50,
      score: 11600, // 親4翻50符ロン
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

  // 問題17: 立直+ドラ3 (40符)
  {
    id: 'q017',
    handTiles: ['m4', 'm5', 'm6', 'p2', 'p3', 'p4', 's6', 's7', 's8', 'p7', 'p7', 'p7', 's3', 's3'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'North',
      doraIndicators: ['p6'], // ドラ: p7
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 40,
      score: 8000, // 子4翻40符ロン（満貫）
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

  // 問題18: 二盃口立直 (30符) - ドラなし
  {
    id: 'q018',
    handTiles: ['m3', 'm3', 'm4', 'm4', 'm5', 'm5', 's7', 's7', 's8', 's8', 's9', 's9', 'p5', 'p5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'West',
      doraIndicators: ['m8'], // ドラ: m9
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 30,
      score: 7700, // 子4翻30符ロン
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

  // 問題19: 小三元+対々和 (70符) - ドラなし
  {
    id: 'q019',
    handTiles: ['z5', 'z5', 'z5', 'z6', 'z6', 'z6', 'z7', 'z7', 'z7', 'm2', 'm3', 'm4', 'z6', 'z6'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['s9'], // ドラ: s1
      winningTileIndex: 8,
    },
    answer: {
      han: 5,
      fu: 70,
      score: 16800, // 親5翻70符ロン（跳満）
      yaku: [
        { name: '小三元', han: 2 },
        { name: '役牌 白', han: 1 },
        { name: '役牌 發', han: 1 },
        { name: '役牌 中', han: 1 },
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

  // 問題20: 断么九平和立直ツモ (20符) - ドラなし
  {
    id: 'q020',
    handTiles: ['m3', 'm4', 'm5', 'p2', 'p3', 'p4', 'p6', 'p7', 'p8', 's4', 's5', 's6', 's7', 's7'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'North',
      doraIndicators: ['m1'], // ドラ: m2
      winningTileIndex: 13,
    },
    answer: {
      han: 3,
      fu: 20,
      score: 2600, // 子3翻20符ツモ: 700-1300
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

  // 問題21: 役牌2つ (50符) - ドラなし
  {
    id: 'q021',
    handTiles: ['m7', 'm8', 'm9', 'z1', 'z1', 'z1', 'z5', 'z5', 'z5', 'p3', 'p4', 'p5', 's8', 's8'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['p9'], // ドラ: p1
      winningTileIndex: 8,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 4800, // 親2翻50符ロン
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

  // 問題22: 立直カンチャン待ち (40符) - ドラなし
  {
    id: 'q022',
    handTiles: ['m1', 'm2', 'm3', 'p4', 'p5', 'p6', 's7', 's9', 's8', 'p2', 'p3', 'p4', 'm5', 'm5'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['z1'], // ドラ: z2
      winningTileIndex: 8,
    },
    answer: {
      han: 1,
      fu: 40,
      score: 1500, // 親1翻40符ロン
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

  // 問題23: 立直ペンチャン待ち (40符) - ドラなし
  {
    id: 'q023',
    handTiles: ['p1', 'p2', 'p3', 's4', 's5', 's6', 'm7', 'm8', 'm9', 's1', 's2', 's3', 'p7', 'p7'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['p5'], // ドラ: p6
      winningTileIndex: 2,
    },
    answer: {
      han: 1,
      fu: 40,
      score: 1300, // 子1翻40符ロン
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

  // 問題24: 立直単騎待ち (50符) - ドラなし
  {
    id: 'q024',
    handTiles: ['m3', 'm4', 'm5', 'p6', 'p7', 'p8', 's2', 's2', 's2', 's5', 's6', 's7', 'p2', 'p2'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'East',
      doraIndicators: ['m2'], // ドラ: m3
      winningTileIndex: 13,
    },
    answer: {
      han: 2,
      fu: 50,
      score: 6400, // 親2翻50符ロン
      yaku: [
        { name: '立直', han: 1 },
        { name: 'ドラ', han: 1 },
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

  // 問題25: 一気通貫立直 (30符) - ドラなし
  {
    id: 'q025',
    handTiles: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 'm2', 'm3', 'm4', 'p4', 'p4'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'East',
      windSeat: 'North',
      doraIndicators: ['p1'], // ドラ: p2
      winningTileIndex: 8,
    },
    answer: {
      han: 3,
      fu: 30,
      score: 3900, // 子3翻30符ロン
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

  // 問題26: 三色同順立直 (30符) - ドラなし
  {
    id: 'q026',
    handTiles: ['m2', 'm3', 'm4', 'p2', 'p3', 'p4', 's2', 's3', 's4', 'p6', 'p7', 'p8', 'm7', 'm7'],
    situation: {
      isRon: true,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['s8'], // ドラ: s9
      winningTileIndex: 11,
    },
    answer: {
      han: 3,
      fu: 30,
      score: 5800, // 親3翻30符ロン
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

  // 問題27: 対々和三暗刻 (50符) - ドラなし
  {
    id: 'q027',
    handTiles: ['m4', 'm4', 'm4', 'p6', 'p6', 'p6', 's3', 's3', 's3', 's8', 's8', 's8', 'p9', 'p9'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'West',
      doraIndicators: ['z2'], // ドラ: z3
      winningTileIndex: 11,
    },
    answer: {
      han: 4,
      fu: 50,
      score: 8000, // 子4翻50符ロン（満貫）
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

  // 問題28: 混一色対々和役牌+ドラ2 (60符)
  {
    id: 'q028',
    handTiles: ['p3', 'p3', 'p3', 'p6', 'p6', 'p6', 'p8', 'p8', 'p8', 'z2', 'z2', 'z2', 'p5', 'p5'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'South',
      windSeat: 'South',
      doraIndicators: ['p7'], // ドラ: p8
      winningTileIndex: 11,
    },
    answer: {
      han: 7,
      fu: 60,
      score: 18000, // 親7翻60符ロン（跳満）
      yaku: [
        { name: '混一色', han: 3 },
        { name: '対々和', han: 2 },
        { name: '役牌 南', han: 1 },
        { name: 'ドラ', han: 3 },
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

  // 問題29: 清一色一気通貫 (30符) - ドラなし
  {
    id: 'q029',
    handTiles: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm3', 'm4', 'm5', 'm6', 'm6'],
    situation: {
      isRon: true,
      isRiichi: false,
      windRound: 'East',
      windSeat: 'East',
      doraIndicators: ['m9'], // ドラ: m1
      winningTileIndex: 8,
    },
    answer: {
      han: 8,
      fu: 30,
      score: 24000, // 親8翻30符ロン（数え役満）
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

  // 問題30: 立直ツモ+ドラ3 (30符)
  {
    id: 'q030',
    handTiles: ['m2', 'm3', 'm4', 'p5', 'p6', 'p7', 's3', 's4', 's5', 'p8', 'p8', 'p8', 's7', 's7'],
    situation: {
      isRon: false,
      isRiichi: true,
      windRound: 'South',
      windSeat: 'West',
      doraIndicators: ['p7'], // ドラ: p8
      winningTileIndex: 11,
    },
    answer: {
      han: 5,
      fu: 30,
      score: 8000, // 子5翻30符ツモ: 2000-4000（満貫）
      yaku: [
        { name: '立直', han: 1 },
        { name: '門前清自摸和', han: 1 },
        { name: 'ドラ', han: 3 },
      ],
      breakdown: [
        { reason: '副底', fu: 20, relatedTileIndices: [] },
        { reason: '中張牌暗刻', fu: 4, relatedTileIndices: [9, 10, 11] },
        { reason: '門前ツモ', fu: 2, relatedTileIndices: [] },
      ],
    },
  },
];
