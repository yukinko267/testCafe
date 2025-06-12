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



