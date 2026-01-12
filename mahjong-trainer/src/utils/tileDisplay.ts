// src/utils/tileDisplay.ts

export interface TileDisplay {
  unicode: string; // Unicode character
  text: string;    // Text display for fallback
  color: string;   // Color for the tile
}

// 牌IDから表示情報を取得
export function getTileDisplay(tileId: string): TileDisplay {
  const type = tileId[0]; // m, p, s, z
  const num = parseInt(tileId[1]);

  // 萬子 (m1-m9)
  if (type === 'm') {
    const unicodeBase = 0x1f007; // 🀇
    return {
      unicode: String.fromCodePoint(unicodeBase + num - 1),
      text: `${num}萬`,
      color: '#d32f2f',
    };
  }

  // 筒子 (p1-p9)
  if (type === 'p') {
    const unicodeBase = 0x1f019; // 🀙
    return {
      unicode: String.fromCodePoint(unicodeBase + num - 1),
      text: `${num}筒`,
      color: '#1976d2',
    };
  }

  // 索子 (s1-s9)
  if (type === 's') {
    const unicodeBase = 0x1f010; // 🀐
    return {
      unicode: String.fromCodePoint(unicodeBase + num - 1),
      text: `${num}索`,
      color: '#388e3c',
    };
  }

  // 字牌 (z1-z7: 東南西北白發中)
  if (type === 'z') {
    const winds = ['東', '南', '西', '北', '白', '發', '中'];
    const unicodeCodes = [0x1f000, 0x1f001, 0x1f002, 0x1f003, 0x1f006, 0x1f005, 0x1f004];
    return {
      unicode: String.fromCodePoint(unicodeCodes[num - 1]),
      text: winds[num - 1],
      color: '#424242',
    };
  }

  // デフォルト
  return {
    unicode: '🀫',
    text: tileId,
    color: '#666',
  };
}
