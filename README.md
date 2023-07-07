# 7/7
1. ディレクトリ名をリネーム
 .は拡張子を示すので、ディレクトリ名には使わない方がいい
 ```
 cd ../
 mv vue.js_sample vue_js_sample
 ```

2. まずは、package.jsonを正しい場所に配置したい
```
mv todo-project
```

3. モジュールのインストール
`npm install`

カレントディレクトリの下に.node_modulesというディレクトリが作成されます
それができると成功です


## githubのリモートリポジトリを現在のローカルリポジトリに登録する
git remote add <リモート名> <リポジトリURL>
ls -al
cat .git/config 
vi .git/config

> url = git@github.com:Ymd3a4810/vue.js_sample.git
> url = git@github.com:Ymd3a4810/vue_js_sample.git

git add ./*
git add ./*/*

## gitコマンドで編集中のファイルを一時退避
```
git stash save "temporary"
git stash list
```

## ローカルブランチを作成する
https://www.atlassian.com/ja/git/tutorials/using-branches

```
git checkout -b develop origin/main
git branch develop
git branch -D develop
```

## gitコマンドで編集中のファイルを適用
```
git reflog
git stash apply stash@{0}
```

## vuejsのインストール
```
npm install @vue/cli --save-dev
```

# vue.js_sample

# Vue.js
https://diver.diveintocode.jp/dive_into_course/web_engineer_step_up/curriculums/2594
JavaScriptフレームワークのひとつ、フロントエンドアプリケーション開発で利用

クライアントサイドJavaScriptのライブラリ→jQuery
しかしフロントサイドはそれだけでは不十分
→Vue.jsの登場：ライブラリの1つであり、学習コストの低さと導入のしやすさから多く採用されているフレームワーク
※その他React（リアクト）やAngular（アンギュラー）

# SPAとは
「Single Page Application」の略
→1つのWebページ上で複数のコンテンツを切り替えて表示させるアプリケーション
通常は１つのページに対して１つのHTML⇔SPAの場合は、基本的にはWebページは1つだけ作成
SPAの開発は、全体を制御するプログラムを持ち、アプリケーション全体としての型を提供してくれるフレームワークを使うことで効率化

# Vue.jsの実装方法
JavaScriptでDOM要素を制御することを、バインディングと表現
1. Vueインスタンスの生成
　→new Vue()と記述することでVueインスタンスが生成され、Vue.jsが使用できる
2. Vue.jsを適用するDOM要素の設定
　→Vue.jsではこれを「VueインスタンスをDOMにマウントさせる」：new Vue に指定されたelオプション（DOM 要素のelement）は、Vue.jsにidが割り振られているDOM要素を使用　させるよう指示させるオプション
3. Vueに保持したデータのDOMへの反映
　→dataオプションにデータを登録する：登録したデータは、HTML側では{{ }}という記号の中に記述することで表示

# 双方向バインディングとは[v-model]
→Vue.jsからDOM要素をバインディングできるだけではなく、逆にDOM要素からVue.jsをバイディングする
※具体的には、HTMLに入力された内容をVue.js側に反映させることが可能

入力されたデータをVue.jsをバイディングする時によく使用するのがv-model

# v-modelの使い方

# v-else-if、v-else

# classの操作
v-bind:class="class_name"

# v-for
<select>
  <option>東北</option>
  <option>関東</option>
  <option>関西</option>
</select>
↓
<select>
  <option v-for="region in regions">{{ region }}</option>
</select>
※配列の値分だけoptionタグの作成

# v-on
Vue.jsを使用すると、イベントリスナを簡潔な記法で登録可能
v-onというディレクティブを使用：<button v-on:click="eventName">***</button>（@click="eventName"と省略可能）

Vue.js公式ドキュメント・イベント装飾子
https://v2.ja.vuejs.org/v2/guide/events#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E4%BF%AE%E9%A3%BE%E5%AD%90

# 独自関数を登録する[methods]
実行したい処理を関数にして登録し、イベントリスナには関数を登録するのが一般的

# 状態の変化を察知する[computed]
computedは算出プロパティを登録するオプションです。算出プロパティはVueインスタンスでコントロールされているデータを監視し、値の変更を検出する度に動的に値を計算


#Rails
Webアプリケーションフレームワーク
フレームワークを使った開発では、上に挙げたような仕組みを備えた共通部分はそのまま利用しつつ、自らのアプリケーションにとって必要な部分を付け足していくような形で開発を進めるためのもの：Sinatraなど

# Ruby on Rails（以下Rails）
プログラミング言語Rubyを使って作られたWebアプリケーションフレームワーク、オープンソースソフトウェア(OSS)の１種
Railsの特徴：
1.CoC（Convention over Configuration）、 “設定より規約”
2.Don’t Repeat Yourself（略してDRY） 「アプリケーション全体で、同じコードの重複が起こらないようにする」
3.開発を始める際、Railsが備えているコマンドを1度実行するだけで、最低限の動作に必要なディレクトリやファイルを生成
4.高い生産性を実現
 どこに何の部品が書いてあるかがわかるため、目的のコード（改修箇所など）を探し当てやすい
 ルール・設計があらかじめ決まっているので、自分たちで決める手間や迷いが少ない
 別のアプリ開発チームへ行ったときのキャッチアップのコストが低い

 # Railsが関わるサーバ環境
 Webアプリケーションは、サーバコンピュータ上で動作
 Webサーバソフトウェア、アプリケーションサーバソフトウェア、データベースサーバソフトウェア:3層構成

 # Webサーバ
 サーバコンピュータ上で動作するWebサーバソフトウェア

 ブラウザからのリクエストを受けて、アプリケーションサーバに対してリクエスト
 ↓
 アプリケーションサーバからのレスポンス（HTML、CSS、JavaScriptなど）をブラウザへ返す

アプリケーションサーバも（広義の）Webサーバとしての機能を持っているが、本番環境などアクセスが多い場合には負荷が増大するため、
その軽減のためにWebサーバとアプリケーションサーバを分けて仕事を分担

# アプリケーションサーバ
ブラウザやWebサーバとHTTPで通信し、HTML/CSS（動的ファイル、erbテンプレートなどからつくる）などの静的ファイルを生成し送信
Webブラウザからのリクエストが動的なコンテンツを要求するパスであった場合、アプリケーションサーバにリクエストを送信
※動的なコンテンツとは、見る人やタイミングなどによって都度内容が変わるもの
Puma（ピューマ）, Unicorn（ユニコーン）など　Rubyの世界に限ると、Rack
ローカル環境での開発中は、わざわざWebサーバを用意しないことが多いため、アプリケーションサーバがブラウザとHTTPで通信

# Webアプリケーション
RailsやSinatraなどで作られたアプリケーション本体
アプリケーションサーバに起動してもらい、命令をきっかけにして動作

# データベースサーバ
Webアプリケーションが発行するSQLを受け付けて、それに応じた読み書き処理
MySQL（マイエスキューエル）, PostgreSQL（ポストグレスキューエル）など

Webサーバは、クライアントからのリクエストを受け取り、静的コンテンツを提供する役割がある。
アプリケーションサーバは、Webサーバからの依頼で処理をし、動的コンテンツを提供する役割がある。
データベースサーバは、Webアプリケーションが発行したSQLを受け取って、データベースの読み書きを行う。

# Gem（ジェム）
Ruby以外の文脈ではライブラリと呼ばれる部品
有名なGemは世界中のコントリビュータによる改善が続けられているおかげで、コードの品質が高いという特徴
Rubygems.orgで公開
RailsもGemの一種、Railsに限らず、Gemはそれ単体で成り立つものだけでなく、他のGemの機能も使って作られている




Railsを使った代表的なアプリには以下のようなものがあります。
GitHub　食べログ　クックパッド






