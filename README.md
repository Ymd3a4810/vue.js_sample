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




