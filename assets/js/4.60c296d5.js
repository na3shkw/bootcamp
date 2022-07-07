(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{282:function(s,t,e){s.exports=e.p+"assets/img/what_jenkins.c28c15ce.png"},283:function(s,t,e){s.exports=e.p+"assets/img/input-admin-pass.fea68fe2.png"},284:function(s,t,e){s.exports=e.p+"assets/img/install-plugin.ad0565e9.png"},285:function(s,t,e){s.exports=e.p+"assets/img/create-admin-user.f067ee6a.png"},286:function(s,t,e){s.exports=e.p+"assets/img/welcome-jenkins.51a231af.png"},287:function(s,t,e){s.exports=e.p+"assets/img/jenkins-first.0be56149.png"},288:function(s,t,e){s.exports=e.p+"assets/img/create-job.64f88f43.png"},289:function(s,t,e){s.exports=e.p+"assets/img/job-build-script.6ceffc7f.png"},290:function(s,t,e){s.exports=e.p+"assets/img/build-result.1e4321ae.png"},291:function(s,t,e){s.exports=e.p+"assets/img/create-token.7c7a8540.png"},292:function(s,t,e){s.exports=e.p+"assets/img/build-trigger.9ac0a1e6.png"},293:function(s,t,e){s.exports=e.p+"assets/img/build-param.680aae50.png"},294:function(s,t,e){s.exports=e.p+"assets/img/password1.4238be70.png"},295:function(s,t,e){s.exports=e.p+"assets/img/password2.b7c554bb.png"},296:function(s,t,e){s.exports=e.p+"assets/img/secret-add.aea6c781.png"},297:function(s,t,e){s.exports=e.p+"assets/img/secret-config.a408764a.png"},298:function(s,t,e){s.exports=e.p+"assets/img/password3.71f8cc6a.png"},430:function(s,t,e){"use strict";e.r(t);var a=e(10),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jenkins-を触ってみよう"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-を触ってみよう"}},[s._v("#")]),s._v(" Jenkins を触ってみよう")]),s._v(" "),t("h2",{attrs:{id:"事前準備"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[s._v("#")]),s._v(" 事前準備")]),s._v(" "),t("p",[s._v("この講義では Jenkins を試しに触るため、docker で手元に Jenkins を構築します。\nイメージのダウンロードに少し時間がかかるので、pull だけ済ませておいてください。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker pull jenkins/jenkins:lts\n")])])]),t("h2",{attrs:{id:"jenkins-とは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-とは"}},[s._v("#")]),s._v(" Jenkins とは")]),s._v(" "),t("p",[s._v("2011 年に発表された CI（継続的インテグレーション）/ CD（継続的デリバリ）ツールの１つです。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(282),alt:"what_jenkins"}})]),s._v(" "),t("p",[s._v("Jenkins ではソフトウェアのテストやビルドに必要なさまざまなタスクを「ビルド手順」としてまとめ、パラメータや実行トリガなどを加えた「ジョブ」を作成します。\nそのジョブを手動での実行や Git の commit への反応、システムからの自動連携で実行することで、デプロイやテストの実行をサポートしてくれるツールです。\nジョブのビルド手順はシェルスクリプトを直接指定できるほか、Java のビルドに使う Maven などさまざまなプラグインを導入し拡張することで、非常に柔軟なタスクを実行可能になっています。\nまたマスタとスレーブ構成を構築し、大規模にスケールさせることも可能です。")]),s._v(" "),t("p",[s._v("欠点としては、昨今の "),t("a",{attrs:{href:"http://drone.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("drone.io"),t("OutboundLink")],1),s._v(" や GitHub Actions といったツールが Docker コンテナを使ってタスクの実行環境をカプセル化しているのに対し、Jenkins では実行環境はすべてのタスクで共通です。\nこれはつまり、あるジョブで Ruby を実行したければ Jenkins が動作しているホストに Ruby をインストールする必要があります。そうするとジョブによって異なる Ruby のバージョンを使うのが非常に難しくなります。")]),s._v(" "),t("p",[s._v("昨今では Docker コンテナを前提とした開発環境やテストツールが増えていることもあり、ビルドやテストには Docker コンテナを使った CI ツールを使うことが大半です。\nしかし柔軟にタスクを構築可能な Jenkins はうまく管理すれば非常にシンプルで強力なツールになるため、現在でも活躍の機会は多々あります。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("このハンズオンでは扱いませんが、現在の Jenkins では「Pipeline」というジョブを定義することで、"),t("a",{attrs:{href:"http://drone.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("drone.io"),t("OutboundLink")],1),s._v(" などと同じようにジョブの実行内容をファイルで定義できます。また Docker プラグインを利用することで、Docker を使ったジョブの実行も可能です。")])]),s._v(" "),t("h3",{attrs:{id:"補足-ci-継続的インテグレーション"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#補足-ci-継続的インテグレーション"}},[s._v("#")]),s._v(" 補足: CI（継続的インテグレーション）")]),s._v(" "),t("p",[s._v("CI とは、プログラムの開発中にテストやデプロイを頻繁に実施することで、問題を早期に発見することを目的とした開発手法です。\nたとえば丸々一ヵ月開発してからはじめてデプロイ・テストをするよりも、変更の度に何回も軽めのテストを実施するほうが早期に問題を発見・修正できます。\n（もちろん最終的な結合試験も必要不可欠です）")]),s._v(" "),t("p",[s._v("そうした開発をサポートするため、GitHub の commit などをトリガにしてテストやデプロイを実施して結果を知らせてくれるツールを総称して CI ツールと呼びます。 Jenkins もその 1 つです。")]),s._v(" "),t("p",[s._v("最近の主要な CI ツールとしては")]),s._v(" "),t("ul",[t("li",[s._v("Jenkins ("),t("a",{attrs:{href:"https://www.jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jenkins.io/"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("li",[s._v("Circle CI ("),t("a",{attrs:{href:"https://circleci.com/ja/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://circleci.com/ja/"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("li",[s._v("Travis CI ("),t("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://travis-ci.org/"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("li",[t("a",{attrs:{href:"http://drone.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("drone.io"),t("OutboundLink")],1),s._v(" ("),t("a",{attrs:{href:"https://drone.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://drone.io/"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("li",[s._v("GitHub Actions ("),t("a",{attrs:{href:"https://github.co.jp/features/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.co.jp/features/actions"),t("OutboundLink")],1),s._v(")")])]),s._v(" "),t("p",[s._v("などが上げられます。")]),s._v(" "),t("h2",{attrs:{id:"jenkins-を立ち上げてみる-自力で立ち上げる場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-を立ち上げてみる-自力で立ち上げる場合"}},[s._v("#")]),s._v(" Jenkins を立ち上げてみる（自力で立ち上げる場合）")]),s._v(" "),t("p",[s._v("Jenkins を試しに触るため、docker を使って手元に構築してみましょう。\n社内に共用で使える Jenkins サーバが立っていればそちらを使うこともできます。講師の指示にしたがってください。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("IIJ社内では今回のハンズオン用にJenkinsサーバーを立ち上げているので、そちらを使ってください。")])]),s._v(" "),t("p",[s._v("docker の使える環境で以下のコマンドを実行して、Jenkins を実行してください。")]),s._v(" "),t("p",[s._v("windows")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" jenkins\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%CD%/jenkins,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/jenkins_home jenkins/jenkins:lts\n")])])]),t("p",[s._v("linux, mac")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" jenkins\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PWD")]),s._v("}")]),s._v("/jenkins,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/jenkins_home jenkins/jenkins:lts\n")])])]),t("p",[s._v("途中で以下のように初期パスワードが表示されるため、コピー&ペーストしておきましょう。")]),s._v(" "),t("div",{staticClass:"language-termianl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*************************************************************\n*************************************************************\n*************************************************************\n\nJenkins initial setup is required. An admin user has been created and a password generated.\nPlease use the following password to proceed to installation:\n\n050703f1fa114304839a65244184d222 <- 初期パスワードの例\n\nThis may also be found at: /var/jenkins_home/secrets/initialAdminPassword\n\n*************************************************************\n*************************************************************\n*************************************************************\n")])])]),t("p",[t("code",[s._v("Jenkins is fully up and running")]),s._v(" と表示されたら成功です。 "),t("code",[s._v("localhost:8080")]),s._v(" をブラウザで開いてみてください。以下のような画面が表示されると思います。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(283),alt:"input-admin-pass"}})]),s._v(" "),t("p",[s._v("先ほどコピー&ペーストしたパスワードを入力して「Continue」を押しましょう。すると次の画面が表示されます。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(284),alt:"install-plugin"}})]),s._v(" "),t("p",[s._v("「Install suggested plugins」を選んでください。すると plugin のインストールが自動的に始まります。plugin のインストールが終わると以下の画面が表示されるので、適当に入力しましょう。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(285),alt:"create-admin-user"}})]),s._v(" "),t("p",[s._v("最終的に「Jenkins へようこそ！」と表示されれば成功です。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(286),alt:"welcome-jenkins"}})]),s._v(" "),t("h2",{attrs:{id:"jenkins-を使ってみよう"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-を使ってみよう"}},[s._v("#")]),s._v(" Jenkins を使ってみよう")]),s._v(" "),t("p",[s._v("早速試しに使ってみましょう。「新しいジョブを作成」をクリックするとジョブの作成画面に入ります。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(287),alt:"jenkins-first"}})]),s._v(" "),t("p",[s._v("まずは「フリースタイル・プロジェクトのビルド」をクリックしてください。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(288),alt:"create-job"}})]),s._v(" "),t("p",[s._v("作成するとジョブの設定画面が開きます。色々設定がありますが、まずは「ビルド」からスクリプトを登録してみましょう。「ビルド手順の追加」から「シェルの実行」を選ぶとスクリプトを登録できます。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(289),alt:"job-build-script"}})]),s._v(" "),t("p",[s._v("たとえば以下のようなスクリプトを設定してみてください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'welcome to bootcamp'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" welcome.txt\n")])])]),t("p",[s._v("「保存」をクリックするとジョブが作成されるので、「ビルド実行」を押して実行してみます。\n「ビルド履歴」に"),t("code",[s._v("#1")]),s._v("が増えたでしょうか。"),t("code",[s._v("#1")]),s._v("をクリックして「コンソール出力」をクリックするとビルドの様子を確認できます。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(290),alt:"build-result"}})]),s._v(" "),t("h2",{attrs:{id:"ワークスペース"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ワークスペース"}},[s._v("#")]),s._v(" ワークスペース")]),s._v(" "),t("p",[s._v("上の例ではシェルスクリプトで"),t("code",[s._v("welcome.txt")]),s._v("というファイルを作成しました。このようにビルドの実行で生成されるファイルを「成果物」と呼んだりします。")]),s._v(" "),t("p",[s._v("成果物はどこに作られているでしょうか。以下のようにディレクトリを覗いてみると、成果物が生成されているのが分かります。\n(自分でサーバーを立ててる場合はシェルなどで確認できます。公開サーバーの場合はタスクでスクリプトを実行して確認することもできます。)")]),s._v(" "),t("div",{staticClass:"language-terminal extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ cat jenkins/workspace/test-project-<アカウント名>/welcome.txt\nwelcome to bootcamp\n")])])]),t("p",[s._v("ディレクトリ名からも分かる通り、ジョブが実行されるディレクトリを「ワークスペース」と呼び、成果物も基本的にここに作成されます。ワークスペースはジョブ毎に別々に作られるため、他のジョブに影響されず実行することができます。")]),s._v(" "),t("p",[s._v("成果物はジョブの実行前に自動で削除するようにも設定できますが、そうでない場合は前回の成果物がそのまま残っているためスクリプトを作る際は注意が必要です。また成果物を残しすぎると Jenkins ホストのディスクを圧迫するため不要な成果物は削除するようにしましょう。")]),s._v(" "),t("h2",{attrs:{id:"ビルドトリガー"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ビルドトリガー"}},[s._v("#")]),s._v(" ビルドトリガー")]),s._v(" "),t("p",[s._v("先ほどはジョブを手動で実行しましたが、他にも様々な方法でビルドを実行することができます。\nWebhook などの HTTP リクエストからジョブを実行するトリガを設定してみましょう。")]),s._v(" "),t("p",[s._v("まずは Jenkins の API token を取得します。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(291),alt:"create-token"}})]),s._v(" "),t("p",[s._v("画像の通り 右上の admin -> 設定 -> API トークン から token を生成します。\nこのとき生成された token をコピー&ペーストするのを忘れないでください。")]),s._v(" "),t("p",[s._v("画面上部のパンくずリストなどからジョブのトップ画面に移動し、「設定」をクリックして設定画面に移動しましょう。「ビルド・トリガ」はこのジョブを実行するトリガを設定できます。「リモートからビルド」を選ぶと HTTP リクエストによるビルドを登録しましょう。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(292),alt:"build-trigger"}})]),s._v(" "),t("p",[s._v("認証トークンを設定できるので適当な文字列を設定して保存します。保存後、設定画面に書かれているように"),t("code",[s._v("JENKINS_URL/job/test-project-<アカウント名>/build")]),s._v("にリクエストしてみましょう。先ほど取得した API token を使用するため、上で入力した JOB ごとの認証トークンは使用しません。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST --user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<アカウント名>:<API token>'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JENKINS_URL/job/test-project-<アカウント名>/build'")]),s._v("\n")])])]),t("p",[s._v("上記を実行するとジョブが実行されます。\nこのように Jenkins は外部のプログラムから簡単にジョブを実行できます。")]),s._v(" "),t("h2",{attrs:{id:"パラメータ付きビルド"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ付きビルド"}},[s._v("#")]),s._v(" パラメータ付きビルド")]),s._v(" "),t("p",[s._v("ビルドにはパラメータを設定できます。「General」にある「ビルドをパラメータ化」からパラメータを設定してみてください。\n「パラメータの追加」を押すと種類を選ぶプルダウンが出てきます。\nここでは「テキスト」のパラメータを追加してみましょう。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(293),alt:"build-param"}})]),s._v(" "),t("p",[s._v("設定したパラメータは環境変数として使えます。スクリプトを以下のようにしてみてください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$param")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" welcome.txt\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" welcome.txt\n")])])]),t("p",[s._v("パラメータ付きビルドをリモートから実行するには、先ほどの例に加えてパラメータの内容をリクエストに含めます。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'param=bootcamp'")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<アカウント名>:<API token>'")]),s._v(" JENKINS_URL/job/test-project/buildWithParameters\n")])])]),t("p",[s._v("ビルドの履歴から結果を見ると、"),t("code",[s._v("echo boocamp")]),s._v("というコマンドが実行されているのが分かります。")]),s._v(" "),t("h2",{attrs:{id:"秘密情報の利用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秘密情報の利用"}},[s._v("#")]),s._v(" 秘密情報の利用")]),s._v(" "),t("p",[s._v("Jenkins ではパスワードなど秘密情報を取り扱う機能があります。パスワードをスクリプトに直接書いてしまうと誰でも見えてしまうので、外には表示されない状態で埋め込むことができます。")]),s._v(" "),t("p",[s._v("ジョブ設定画面「ビルド環境」にある「秘密テキストや秘密ファイルを利用する」を使います。\n秘密情報である "),t("code",[s._v("password")]),s._v(" を埋め込んでみましょう。まずは「追加」から「秘密テキスト」を選択しましょう。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(294),alt:"password1"}})]),s._v(" "),t("p",[s._v("「変数」には先ほどのパラメータ化と同様に、この秘密情報を埋め込むときの変数名を指定します（今回は "),t("code",[s._v("password")]),s._v("）。\n「認証情報」には、Jenkins に保存されている秘密情報の中から紐付ける対象を選択できます。今はまだ何も登録されていないと思うので、「追加」から秘密情報を追加してみましょう。追加先には「Jenkins」を選択してください。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(295),alt:"password2"}})]),s._v(" "),t("p",[s._v("すると秘密情報の登録画面に移るので、画像の通り入力して「追加」を選択してください。「種類」は「Secret text」、「ID」には"),t("code",[s._v("secret")]),s._v("、「Secret」には適当なパスワード文字列を設定しておきます。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(296),alt:"secret-add"}})]),s._v(" "),t("p",[s._v("secret を追加したら先ほどの画面で"),t("code",[s._v("secret")]),s._v("が選べるようになっているので、選択して保存しましょう。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(297),alt:"secret-config"}})]),s._v(" "),t("p",[s._v("スクリプトを以下のようにすると、先ほど設定したパスワードが使えます。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" welcome.txt\n")])])]),t("p",[t("code",[s._v("welcome.txt")]),s._v("を見てみると、先ほど設定したパスワードが入力されているのが確認できます。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" jenkins/workspace/test-project/welcome.txt\nwelcome to bootcamp\nbootcamp\nhogehoge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- パスワード\n")])])]),t("p",[s._v("ちなみに Jenkins の実行結果画面では、秘密情報はマスクされて見えないようになっています。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(298),alt:"password3"}})]),s._v(" "),t("h2",{attrs:{id:"最後に"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最後に"}},[s._v("#")]),s._v(" 最後に")]),s._v(" "),t("p",[s._v("Jenkins は非常にさまざまなことができますが、そのぶん使いこなすのが難しいです。さらに環境によってバージョンの違いや入っているプラグインの違いで微妙に使い勝手が違ったり、使い方が分かりにくかったり苦労することもあります。")]),s._v(" "),t("p",[s._v("ただしきちんと運用された Jenkins サーバを適切に使うと、さまざまなシステムと連携して自由度の高いビルドを実施できるため開発などの業務を効率化できます。")]),s._v(" "),t("credit-footer")],1)}),[],!1,null,null,null);t.default=n.exports}}]);