(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{491:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("header-table"),t._v(" "),a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),a("h2",{attrs:{id:"ruby-on-railsとは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby-on-railsとは"}},[t._v("#")]),t._v(" Ruby on Railsとは")]),t._v(" "),a("ol",[a("li",[t._v("略称はRoR、または単にRails")]),t._v(" "),a("li",[t._v("Rubyで書かれたフルスタックWebアプリケーションフレームワーク")])]),t._v(" "),a("ul",[a("li",[t._v("哲学\n"),a("ul",[a("li",[t._v("DRY (Don't Repeat Yoursef. 同じコードは二度書かない)")]),t._v(" "),a("li",[t._v("設定よりも規約 (規約にしたがって開発するかぎり、設定ファイル不\n要...Rails以前に有力だったStrutsは、きまりきったことを設定ファイ\nルに書く必要があった)")])])]),t._v(" "),a("li",[t._v("フルスタック(必要な機能はほとんどなんでもRailsが提供)")]),t._v(" "),a("li",[t._v("プロジェクト管理(プロトジェクトの立ち上げ、ライブラリのインストー\nル、データベース上のテーブルの定義/マイグレーション、テスト、リリー\nス等をコマンドで実行できるようにしている)")]),t._v(" "),a("li",[t._v("Scaffold (プログラム開発の足場) の提供 (数分でWebアプリケーション\nが立ち上がる! 的なデモで一世を風靡した)")]),t._v(" "),a("li",[t._v("MVCアーキテクチャ (ここは、何の変哲もない感じです)")]),t._v(" "),a("li",[t._v("ActiveRecord (ほとんどコードを書かずにデータベースを操作できる)")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("爆発的に成功し、Rubyのキラーアプリケーションとなった。")])]),t._v(" "),a("ul",[a("li",[t._v("Railsを使いたくてRubyを学習する、という人が大量に出現した。")])]),t._v(" "),a("h3",{attrs:{id:"railsの強み-弱み"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#railsの強み-弱み"}},[t._v("#")]),t._v(" Railsの強み/弱み")]),t._v(" "),a("ol",[a("li",[t._v("強み")]),t._v(" "),a("li",[t._v("少ないコード量で多くの仕事")]),t._v(" "),a("li",[t._v("作法が決まっているので、共同作業しやすい")]),t._v(" "),a("li",[t._v("豊富なリソース (教材、サンプル、コミュニティ)")]),t._v(" "),a("li",[t._v("弱み")]),t._v(" "),a("li",[t._v("学習コストが高い")]),t._v(" "),a("li",[t._v("約束事が多い")]),t._v(" "),a("li",[t._v("性能面の問題を抱えやすい")])]),t._v(" "),a("p",[t._v("これらの特性から、スタートアップが少数精鋭チームで初期バージョンを開発\nし、成功した後で他の言語/フレームワークで書き直す、というスタイルでよ\nく利用されています。")]),t._v(" "),a("h2",{attrs:{id:"railsのインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#railsのインストール"}},[t._v("#")]),t._v(" Railsのインストール")]),t._v(" "),a("ol",[a("li",[t._v("事前準備")]),t._v(" "),a("li",[t._v("rbenvのインストール")]),t._v(" "),a("li",[t._v("Rubyのインストール")]),t._v(" "),a("li",[t._v("Rails環境の準備")]),t._v(" "),a("li",[t._v("Railsプロジェクトの作成")])]),t._v(" "),a("h2",{attrs:{id:"事前準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[t._v("#")]),t._v(" 事前準備")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo yum update\n$ sudo yum install -y git\n$ sudo yum install -y bzip2 gcc openssl-devel readline-devel zlib-devel sqlite-devel\n")])])]),a("h2",{attrs:{id:"rbenvのインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rbenvのインストール"}},[t._v("#")]),t._v(" rbenvのインストール")]),t._v(" "),a("p",[t._v("Railsで開発を行なうと、プロジェクト毎に異なるバージョンのRubyを使うこ\nとがよくあります。そのため、yumでOSにインストールしたRubyを使うのでは\nなく、プロジェクト毎に特定のバージョンのRubyを使えるように、rbenvとい\nうツールを使うことが一般的です。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv\n$ git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build\n")])])]),a("p",[t._v("~/.bash_profileに以下を追記")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# rbenv\nexport PATH="$HOME/.rbenv/bin:$PATH"\neval "$(rbenv init -)"\n\n')])])]),a("p",[t._v("反映と確認")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ source ~/.bash_profile\n$ rbenv -v # バージョンが表示される。\n")])])]),a("h3",{attrs:{id:"rubyのインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rubyのインストール"}},[t._v("#")]),t._v(" Rubyのインストール")]),t._v(" "),a("p",[t._v("Rubyのインストール可能なバージョンを確認")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rbenv install --list\n")])])]),a("p",[t._v("任意のバージョンのRubyをインストール。(今回は2.6.3を指定）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rbenv install 2.6.3 # 少しかかります(数分程度)\n")])])]),a("p",[t._v("インストールしたバージョンのRubyをrbenvに設定し、確認します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rbenv global 2.6.3\n$ ruby -v # Rubyが実行できることを確認\n")])])]),a("p",[t._v("ちなみに...")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ruby -v\n(rbenv管理のRubyのバージョン)\n$ which ruby\n(rbenv管理のRubyの場所)\n$ /usr/bin/ruby -v\n(OS管理のRubyのバージョン)\n")])])]),a("h3",{attrs:{id:"rails環境の準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails環境の準備"}},[t._v("#")]),t._v(" Rails環境の準備")]),t._v(" "),a("p",[t._v("bundlerをインストール")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ gem install bundler\n")])])]),a("p",[t._v("bundlerというのは、プロジェクト毎にgemを管理するためのツールです。")]),t._v(" "),a("p",[t._v("gemというのは、Rubyのライブラリを管理するためのツールです。")]),t._v(" "),a("p",[t._v("rbenvでプロジェクト毎に異なるバージョンのRubyを使えるようにするように、\nbundlerでプロジェクト毎に異なるバージョンのライブラリを使えるようにす\nるのです。")]),t._v(" "),a("p",[t._v("Railsの利用可能なバージョンを確認します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ gem query -ra -n  "^rails$"\n')])])]),a("p",[t._v("Railsの任意のバージョンの環境をディレクトリにまとめます。\n(今回は5.2.1を指定しました）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ mkdir rails_v5.2.1 # お好きな名前を\n$ cd rails_v5.2.1\n$ bundle init # カレントディレクトリにGemfileを作成\n$ echo \'gem "rails", "5.2.1"\' >> Gemfile # ※ 任意のバージョンを指定\n$ bundle install --path vendor/bundle # ./vendor/bundleにRails関連のGemが入る\n')])])]),a("p",[t._v("以下の表示が出ることがあります。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HEADS UP! i18n 1.1 changed fallbacks to exclude default locale.\nBut that may break your application.\n\nPlease check your Rails app for 'config.i18n.fallbacks = true'.\nIf you're using I18n (>= 1.1.0) and Rails (< 5.2.2), this should be\n'config.i18n.fallbacks = [I18n.default_locale]'.\nIf not, fallbacks will be broken in your app by I18n 1.1.x.\n\nFor more info see:\nhttps://github.com/svenfuchs/i18n/releases/tag/v1.1.0\n")])])]),a("p",[t._v("これについては、さしあたり無視しておきます。(i18nを使うときまで。)")]),t._v(" "),a("h3",{attrs:{id:"railsプロジェクトの作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#railsプロジェクトの作成"}},[t._v("#")]),t._v(" Railsプロジェクトの作成")]),t._v(" "),a("p",[t._v("Railsのプロジェクトを、上記で作成したRailsディレクトリの中に作成します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/rails_v5.2.1 # 上記で作成したRailsディレクトリに移動\n$ bundle exec rails new bootcamp --skip-bundle # プロジェクトの作成\n")])])]),a("p",[t._v("bundle execはbundlerが~/rails_v5.2.1にインストールしたrailsコマンドを\n実行することを指示しています。")]),t._v(" "),a("p",[t._v("bootcampはプロジェクト名です。好きなように決めることができます。")]),t._v(" "),a("p",[t._v("--skip-bundleはbundle installを自動で実行しないようにしています。こう\nすることで、このプロジェクトに必要なgemを、プロジェクト内の\nvendor/bundle以下にインストールするようにしています。")]),t._v(" "),a("p",[t._v("ここでbootcampディレクトリが作られるのですが、その中にあるGemfileの末\n尾の方にある以下の部分を修正してください。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("group :test do\n  # Adds support for Capybara system testing and selenium driver\n  gem 'capybara', '>= 2.15'\n  gem 'selenium-webdriver'\n  # Easy installation and use of chromedriver to run system tests with Chrome\n  #gem 'chromedriver-helper' ここをコメントアウトして\n  gem 'webdrivers' # この行を追加します。\nend\n")])])]),a("p",[t._v("この修正は何かというと、chromedriver-helperがEnd supportになったことへ\nの対処です。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd bootcamp\n$ bundle install --path vendor/bundle # ./vendor/bundleにGemをインストール\n$ echo '/vendor/bundle' >> .gitignore # Gitの管理対象から外す\n")])])]),a("p",[t._v("ここまで実行すると、すでにRailsの開発サーバを起動可能です。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ bundle exec rails server\n")])])]),a("p",[t._v("ブラウザを起動して "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),a("OutboundLink")],1),t._v(" にアクセスしてみましょう。")]),t._v(" "),a("p",[t._v("Yay! You’re on Rails! と表示されていれば、インストールは完了です。")]),t._v(" "),a("h2",{attrs:{id:"まずはhello"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#まずはhello"}},[t._v("#")]),t._v(" まずはHello")]),t._v(" "),a("p",[t._v("新しいプログラミング言語を覚えるときは、最初にHelloするものです。")]),t._v(" "),a("p",[t._v("（先程のサーバを起動しているターミナルはそのままにしておいて）もうひとつターミナルを開いて、以下を実行します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ bundle exec rails generate controller Welcome index\n")])])]),a("p",[t._v("こんな感じにコントローラ、テンプレート等が生成されます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("      create  app/controllers/welcome_controller.rb\n       route  get 'welcome/index'\n      invoke  erb\n      create    app/views/welcome\n      create    app/views/welcome/index.html.erb\n      invoke  test_unit\n      create    test/controllers/welcome_controller_test.rb\n      invoke  helper\n      create    app/helpers/welcome_helper.rb\n      invoke    test_unit\n      invoke  assets\n      invoke    coffee\n      create      app/assets/javascripts/welcome.coffee\n      invoke    scss\n      create      app/assets/stylesheets/welcome.scss\n")])])]),a("p",[t._v("app/controllers/welcome_controller.rbには、WelcomeControllerクラスが定\n義されています。")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WelcomeController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ApplicationController")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("ほとんど空っぽです。indexメソッドはindexアクションのためのメソッドです。")]),t._v(" "),a("p",[t._v("welcomeコントローラのindexアクションに対応するテンプレートは、\napp/views/welcome/index.html.erbにあります。")]),t._v(" "),a("div",{staticClass:"language-erb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-erb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Welcome#index"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Find me in app/views/welcome/index.html.erb"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("このファイルを以下のように修正しましょう。")]),t._v(" "),a("div",{staticClass:"language-erb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-erb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, Rails!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("ブラウザで "),a("a",{attrs:{href:"http://localhost:3000/welcome/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/welcome/index"),a("OutboundLink")],1),t._v(" にアクセスしてみましょ\nう。どうなりましたか。")]),t._v(" "),a("p",[t._v("（開発サーバの再起動が不要だったことに注目しましょう!）")]),t._v(" "),a("h2",{attrs:{id:"scaffold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaffold"}},[t._v("#")]),t._v(" Scaffold")]),t._v(" "),a("p",[t._v("最後にScaffoldを試してみましょう。")]),t._v(" "),a("p",[t._v("Scaffoldは、データベースを使った、list(一覧表示)、add(追加)、remove(削\n除)、edit(編集)、view(表示)の足場を提供してくれるものです。")]),t._v(" "),a("p",[t._v("以下を実行しましょう。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bundle exec rails generate scaffold idea name:string description:text\nbundle exec rails db:migrate\n")])])]),a("p",[t._v("1行目で、ideaという名前のscaffoldを作ります。name:stringと\ndescription:textはデータベースに作成するideasテーブルに定義するカラムで\nす。")]),t._v(" "),a("p",[t._v("（Railsの「規約」では、テーブル名は複数形になります。）")]),t._v(" "),a("p",[t._v("2行目で、データベース定義を実際にデータベースに反映させます。\n（現在の設定では、sqlite3を使っています。）")]),t._v(" "),a("p",[t._v("ブラウザで "),a("a",{attrs:{href:"http://localhost:3000/ideas",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/ideas"),a("OutboundLink")],1),t._v(" にアクセスしてみましょう。")]),t._v(" "),a("p",[t._v("まだテーブルにデータが入っていので空の状態です。")]),t._v(" "),a("p",[t._v("New Ideaリンクをクリックして、新しいデータを追加してみましょう。")]),t._v(" "),a("p",[t._v("すでにデータの一覧表示、追加、編集、削除、表示ができるようになっている\nのがわかると思います。")]),t._v(" "),a("p",[t._v("おめでとうございます! これで、あなたはWebアプリケーションを作ることに\n成功しました。")]),t._v(" "),a("p",[t._v("実際のコードも読んでみましょうか。")]),t._v(" "),a("p",[t._v("まずはIdeasコントローラを見てみましょう。")]),t._v(" "),a("p",[t._v("app/controller/ideas_controller.rbです。")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IdeasController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ApplicationController")]),t._v("\n  before_action "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":set_idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":edit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /ideas")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /ideas.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@ideas")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /ideas/1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /ideas/1.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /ideas/new")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /ideas/1/edit")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("edit")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# POST /ideas")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# POST /ideas.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idea_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    respond_to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect_to "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Idea was successfully created.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":unprocessable_entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PATCH/PUT /ideas/1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PATCH/PUT /ideas/1.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")])]),t._v("\n    respond_to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idea_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect_to "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Idea was successfully updated.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":edit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":unprocessable_entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DELETE /ideas/1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DELETE /ideas/1.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destroy\n    respond_to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect_to ideas_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Idea was successfully destroyed.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" head "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":no_content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use callbacks to share common setup or constraints between actions.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_idea")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Never trust parameters from the scary internet, only allow the white list through.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("idea_params")])]),t._v("\n      params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":picture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("驚くほど簡潔です。")]),t._v(" "),a("p",[t._v("たとえば "),a("code",[t._v("index")]),t._v(" メソッドは、インスタンス変数 "),a("code",[t._v("@ideas")]),t._v("に"),a("code",[t._v("Idea.all")]),t._v("の戻値を\n代入しているだけです。")]),t._v(" "),a("p",[a("code",[t._v("Idea.all")]),t._v("は、何をしているかというと、データベースに定義したideasテー\nブルから全部の行を取得してその内容を返すというものです。")]),t._v(" "),a("p",[a("code",[t._v("show")]),t._v(" メソッドに至っては中身が空ですが、こちらは冒頭に宣言されている\n"),a("code",[t._v("before_action")]),t._v(" によって、 "),a("code",[t._v("showメソッド")]),t._v(" を実行する前に "),a("code",[t._v("set_idea")]),t._v(" メ\nソッドが実行されます。その "),a("code",[t._v("set_idea")]),t._v(" メソッドはというと...")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_idea")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("これまたたった一行です。これはリクエストパラメータ "),a("code",[t._v("id")]),t._v(" で "),a("code",[t._v("ideas")]),t._v("テー\nブルの主キーを検索し、SELECTできた行をインスタンス変数 "),a("code",[t._v("@idea")]),t._v(" に格納\nしているだけです。")]),t._v(" "),a("p",[a("code",[t._v("show")]),t._v(" メソッドのviewはどうなっていますか。")]),t._v(" "),a("p",[t._v("app/view/idea/show.html.erb")]),t._v(" "),a("div",{staticClass:"language-erb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-erb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token erb language-erb"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("<%=")]),t._v(" notice "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%>")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Name:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token erb language-erb"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("<%=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Description:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token erb language-erb"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("<%=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token erb language-erb"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("<%=")]),t._v(" link_to "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Edit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edit_idea_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@idea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%>")])]),t._v(" |\n"),a("span",{pre:!0,attrs:{class:"token erb language-erb"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("<%=")]),t._v(" link_to "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Back'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ideas_path "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%>")])]),t._v("\n")])])]),a("p",[t._v("ほとんど一目瞭然ではないでしょうか。")]),t._v(" "),a("p",[a("code",[t._v("<%= @idea.name %>")]),t._v(" の箇所で、インスタンス変数 "),a("code",[t._v("@idea")]),t._v(" のnameメソッド\nを用いて "),a("code",[t._v("ideas")]),t._v("テーブルの "),a("code",[t._v("name")]),t._v("列を表示しています。")]),t._v(" "),a("h2",{attrs:{id:"最後に"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最後に"}},[t._v("#")]),t._v(" 最後に")]),t._v(" "),a("p",[t._v("ここまででRailsを使ったアプリケーション開発のはじめの一歩を体験しまし\nた。")]),t._v(" "),a("p",[t._v("ほとんどコードを書かずに最低限の足場まで進むことができ、ここからアプリ\nケーションを育てていけることがなんとなくわかったのではないかと思います。")]),t._v(" "),a("p",[t._v("Railsに関しては、参考になる書籍も、Webサイトも非常にたくさんあります。")]),t._v(" "),a("p",[t._v("短期間でRailsを習得するためのコースもあるので、業務上必要な場合は上長\nに相談して受講するのも手です。")]),t._v(" "),a("p",[t._v("ただし、Railsは最初にも申し上げましたが、それなりに学習コストの高いフ\nレームワークで、本格的なアプリケーションをひととおり作れるようになるた\nめには数百時間の学習と実践が必要になると思われます。")]),t._v(" "),a("p",[t._v("Railsは、しかし、その後のWebアプリケーション開発のお手本になった部分が\n多々あり、Railsを学んでおくと、後発のWebアプリケーション開発フレームワー\nクの習得が容易になるという側面もあります。")]),t._v(" "),a("p",[t._v("機会を見つけて、Railsにチャレンジしてみることは、現在でも意義のあるこ\nとだと思います。")]),t._v(" "),a("credit-footer")],1)}),[],!1,null,null,null);s.default=n.exports}}]);