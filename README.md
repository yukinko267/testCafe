# Cafe Search App

カフェ情報を検索するWebアプリケーションです。  

## 概要

本サービスでは，ユーザーが検索ボタンを押すと石川県内にあるカフェを3件提案する機能を実装しました．候補数を３つに限定することで比較の負担を減らし意思決定をスムーズに行えるようにするためです．

さらに，ユーザーが選択したカフェを起点として，周辺のおすすめスポットを３つ紹介するという機能も実装しました．これにより単なるカフェ検索にとどまらずカフェと周辺という形で行動の選択肢を広げることを狙いました．

またAPIから取得したデータからユーザーにとって必要な情報のみを抽出することで視認性と使いやすさの向上を図りました．

## システム構成

[ Browser ]  
↓  
React (Frontend)  
↓  
HotPepper Web Service API  
↓  
OpenTripMap API  


## 処理の流れ

1. ユーザーが操作（検索・ボタン）
2. ReactがAPIリクエストを送信
3. HotPepper APIを呼び出しカフェ情報を抽出
4. Reactでカフェ情報を表示
5. カフェ情報を選択
6. OpenTripMap APIを呼び出しカフェ周辺のおすすめスポットを抽出
7. Reactで周辺情報の表示

## 技術スタック

### Frontend
- React
- JavaScript
- HTML / CSS

### Backend
- Node.js

### その他
- npm
- concurrently


## ディレクトリ構成

testCafe  
├── client/ フロントエンド（React）  
│ ├── src/  
│ │ ├── components/  
│ │ ├── App.js  
│ │ └── index.js  
│  
├── server/ バックエンド（Express）  
│ └── app.js  
│  
├── node_modules/  
└── package.json  

## 起動方法

```bash
npm run dev
