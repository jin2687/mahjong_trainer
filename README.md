# 🀄 Mahjong Trainer

麻雀の点数計算（符計算）を学習するためのWebアプリケーションです。

## 🎯 特徴

- **段階的な入力**: 翻数、符数、点数を3ステップで入力
- **視覚的な解説**: 正解後、牌の上にバッジを表示して符の内訳を視覚的に理解
- **モバイル対応**: スマートフォンでも快適に学習可能
- **麻雀卓デザイン**: 緑を基調とした本格的な麻雀卓のデザイン

## 🚀 デプロイ

このアプリケーションはGitHub Pagesにデプロイされています。

**URL**: https://jin2687.github.io/mahjong_trainer/

## 💻 技術スタック

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS (モバイルレスポンシブ)
- **Deployment**: GitHub Pages

## 🎮 使い方

1. 表示された手牌の情報（場風、自風、ドラ、アガリ方法）を確認
2. 翻数を選択
3. 符数を選択
4. 点数を選択
5. 正解すると、牌の上にバッジが表示され、符の内訳が視覚的に理解できます

## 📝 問題の追加

新しい問題は `src/data/questions.ts` に追加できます。型定義に従ってデータを作成してください。

## 🛠️ ローカル開発

```bash
cd mahjong-trainer
npm install
npm run dev
```

## 📦 ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに生成されます。

## 📄 ライセンス

MIT License
