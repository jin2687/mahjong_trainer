// src/types/mahjong.ts

export type TileId = string; // 例: "m1"(一萬), "z5"(白)

// 1枚の牌の描画用データ
export interface TileData {
  id: TileId;
  // 解説モード時に表示するテキスト (undefinedなら非表示)
  badgeText?: string;
  // 解説モード時に強調表示するか (例: ドラなど)
  isHighlight?: boolean;
}

// 1問分のデータ構造
export interface QuestionData {
  id: string;
  handTiles: TileId[]; // 手牌のID配列 (長さ14)
  situation: {
    isRon: boolean;               // ロンあがり: true, ツモ: false
    isRiichi: boolean;
    windRound: 'East' | 'South';  // 場風
    windSeat: 'East' | 'South' | 'West' | 'North'; // 自風
    doraIndicators: TileId[];     // ドラ表示牌
    winningTileIndex: number;     // アガリ牌のインデックス（通常は13）
  };
  // 正解データ
  answer: {
    han: number;
    fu: number;
    score: number;
    // 役の情報
    yaku: {
      name: string;  // 例: "立直", "平和", "ドラ"
      han: number;   // 例: 1, 1, 1
    }[];
    // 解説用: どの牌に何の符がついたか
    breakdown: {
      reason: string;               // 例: "一九暗刻", "カンチャン"
      fu: number;                   // 例: 8, 2
      relatedTileIndices: number[]; // 手牌配列の何番目か (0-13)
    }[];
  };
}
