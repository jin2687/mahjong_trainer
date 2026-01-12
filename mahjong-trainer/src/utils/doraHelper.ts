// src/utils/doraHelper.ts

/**
 * ドラ表示牌から実際のドラ牌を取得
 */
export function getDoraFromIndicator(indicator: string): string {
  const type = indicator[0];
  const num = parseInt(indicator[1]);

  // 萬子・筒子・索子
  if (type === 'm' || type === 'p' || type === 's') {
    const nextNum = num === 9 ? 1 : num + 1;
    return `${type}${nextNum}`;
  }

  // 字牌
  if (type === 'z') {
    // 風牌: 東→南→西→北→東
    if (num >= 1 && num <= 4) {
      const nextNum = num === 4 ? 1 : num + 1;
      return `z${nextNum}`;
    }
    // 三元牌: 白→發→中→白
    if (num >= 5 && num <= 7) {
      const nextNum = num === 7 ? 5 : num + 1;
      return `z${nextNum}`;
    }
  }

  return indicator;
}

/**
 * 手牌にドラが何枚あるかカウント
 */
export function countDora(handTiles: string[], doraIndicators: string[]): number {
  const doras = doraIndicators.map(getDoraFromIndicator);
  let count = 0;

  for (const tile of handTiles) {
    if (doras.includes(tile)) {
      count++;
    }
  }

  return count;
}
