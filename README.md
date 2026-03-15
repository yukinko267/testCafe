RUN:
testCafe directory : npm run dev


------
npm : Javascript管理ツール
React : javascript Framework
express : サーバー動かすやつ

------
進捗：serverを動かしAPIから取得した情報を表示

------
directory:

testCafe
-client(React)
-server
-node_modules(npm)

------
動作方法：
RUN->
concurrentlyが動く(package.json)
    Express server : node server/app.js
    React server : cd client && npm start

Expressサーバー
CORS設定でReactからのアクセス許可

React開発サーバー
JavaScriptをブラウザ用にコンパイル

ボタン押す->


-------
やりたいこと
メニューを見れるようにする
もっと見やすいように改良


# Cafe Search App

HotPepper Web Service APIを利用して、カフェ情報を検索・表示するWebアプリケーションです。  
Reactによるフロントエンドと、Node.js（Express）によるバックエンドを分離した構成で開発しています。

---

## アプリ概要

ユーザーがボタン操作や検索を行うことで、HotPepper APIからカフェ情報を取得し一覧表示します。  
APIキーの管理やデータ取得はバックエンド側で行い、フロントエンドは取得したデータをUIとして表示します。

---

## システム構成


[ Browser ]
↓
React (client)

UI表示

APIリクエスト
↓
Node.js + Express (server)

HotPepper API呼び出し

データ整形
↓
HotPepper Web Service API


処理の流れ


ユーザー操作
↓
ReactがAPIリクエスト
↓
Node.jsサーバーがHotPepper APIを呼び出す
↓
取得データをReactに返却
↓
カフェ情報を一覧表示


---

## 技術スタック

### Frontend
- React
- JavaScript
- HTML / CSS

### Backend
- Node.js
- Express

### API
- HotPepper Web Service API

### その他
- npm
- concurrently

---

## ディレクトリ構造


testCafe
│
├── client/ # フロントエンド（React）  
│ ├── src/  
│ │ ├── components/ # UIコンポーネント  
│ │ ├── App.js # メイン画面  
│ │ └── index.js # Reactエントリーポイント  
│  
├── server/ # バックエンド（Node.js + Express）  
│ └── app.js # APIサーバー  
│  
├── node_modules/  
└── package.json  


### client
Reactで実装されたフロントエンド部分。  
ユーザー操作を受け取り、サーバーにAPIリクエストを送信して取得したデータを表示する。

### server
Node.js（Express）で構築されたAPIサーバー。  
HotPepper APIにアクセスしてカフェ情報を取得し、フロントエンドに返す役割を持つ。

---

## セットアップ方法

### 1. リポジトリをクローン


git clone <repository-url>
cd testCafe


### 2. 依存関係をインストール


npm install
cd client
npm install


### 3. アプリ起動


npm run dev


以下が同時に起動します

- Express server  
- React development server

---

## 今後の改善予定

- UIの改善（カード表示の最適化）
- 検索機能の追加
- カフェの詳細情報表示



1 ユーザーがカフェをクリック
2 React Routerで詳細ページへ
3 サーバーAPIから詳細データ取得
4 UIに表示

- Reactコンポーネントを分割してUIの再利用性を高めた
- APIキーをサーバー側で管理
- フロントエンドとバックエンドを分離した構成

┌─────────┐
│ Browser │
└────┬────┘
     ↓
┌─────────┐
│  React  │
└────┬────┘
     ↓
┌─────────┐
│ Node.js │
└────┬────┘
     ↓
┌──────────────┐
│ HotPepper API│
└──────────────┘