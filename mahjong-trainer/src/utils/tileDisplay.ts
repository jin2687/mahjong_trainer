// src/utils/tileDisplay.ts

export interface TileDisplay {
  imagePath: string; // Path to tile image
  text: string;      // Text display for fallback
  alt: string;       // Alt text for image
}

// 牌IDから表示情報を取得
export function getTileDisplay(tileId: string): TileDisplay {
  const type = tileId[0]; // m, p, s, z
  const num = parseInt(tileId[1]);

  // 萬子 (m1-m9)
  if (type === 'm') {
    return {
      imagePath: `/tiles/${tileId}.png`,
      text: `${num}萬`,
      alt: `${num}萬`,
    };
  }

  // 筒子 (p1-p9)
  if (type === 'p') {
    return {
      imagePath: `/tiles/${tileId}.png`,
      text: `${num}筒`,
      alt: `${num}筒`,
    };
  }

  // 索子 (s1-s9)
  if (type === 's') {
    return {
      imagePath: `/tiles/${tileId}.png`,
      text: `${num}索`,
      alt: `${num}索`,
    };
  }

  // 字牌 (z1-z7: 東南西北白發中)
  if (type === 'z') {
    const winds = ['東', '南', '西', '北', '白', '發', '中'];
    return {
      imagePath: `/tiles/${tileId}.png`,
      text: winds[num - 1],
      alt: winds[num - 1],
    };
  }

  // デフォルト
  return {
    imagePath: '',
    text: tileId,
    alt: tileId,
  };
}
