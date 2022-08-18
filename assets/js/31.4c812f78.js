(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{427:function(a,s,t){"use strict";t.r(s);var e=t(10),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_4-ansible-で-アプリケーションサーバを作成する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ansible-で-アプリケーションサーバを作成する"}},[a._v("#")]),a._v(" 4. Ansible で アプリケーションサーバを作成する")]),a._v(" "),s("p",[a._v("ここまでで一通り、Ansible playbook の作り方を学びました。\nでは、ここからは実際にデータベースとアプリケーションを使った\nサーバを構築しましょう。")]),a._v(" "),s("h3",{attrs:{id:"playbook-を作成する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playbook-を作成する"}},[a._v("#")]),a._v(" playbook を作成する")]),a._v(" "),s("p",[a._v("前回、Playbook は管理対象に対してこうなってほしいという構成や手順を記述したファイル、と述べました。\n従って、ansible では、実行したい事に応じてそれぞれ playbook を作る事で操作や手順を区別しています。")]),a._v(" "),s("p",[a._v("今回は前回の「対象ホストに対して ping 応答を確認する」とは異なり\n「データベース・アプリケーションサーバを作る」というものになりますので別の playbook ファイルを作成します。")]),a._v(" "),s("p",[a._v("教材には既にデータベース・アプリケーションサーバを作る為の playbook。"),s("code",[a._v("site.yml")]),a._v("が作成されていますので開いてみましょう。")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# データベースサーバを構築する playbook")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("import_playbook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" playbooks/db.yml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# アプリケーションサーバを構築する playbook")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("import_playbook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" playbooks/app.yml\n")])])]),s("p",[a._v("データベースサーバ、アプリケーションサーバを作るにしては妙に少ない記述ですが\nこれも Ansible の playbook として有効な記述になります。")]),a._v(" "),s("p",[a._v("Ansible の playbook では、処理の共通化や流用を想定して作られています。\n従って、それぞれの操作をパーツのように作成し、実際に ansible-playbook コマンドで読み込む\nplaybook ファイルにはそれぞれのパーツを読み込む（import）して使うことがあります。")]),a._v(" "),s("p",[a._v("この"),s("code",[a._v("site.yml")]),a._v("では、「データベースサーバの構築」と「アプリケーションサーバ」の構築が\nそれぞれ別の playbook に分解されており、この二つを実行する物が「データベース・アプリケーションサーバを構築する」(site.yml)となっています。")]),a._v(" "),s("p",[a._v("では、それぞれではどのような事を行っているのか見てみましょう。\n試しに「データベースサーバを構築する」playbook を開いてみます。")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" set up the database server\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" db\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("become")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" no\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("gather_facts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" no\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("vars_files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ../vars/proxy.yml\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("roles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" roles/mariadb\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql\n")])])]),s("p",[a._v("なにやらまた見慣れない物が沢山出てきましたのでそれぞれ解説をしていきます。")]),a._v(" "),s("h4",{attrs:{id:"解説"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解説"}},[a._v("#")]),a._v(" 解説")]),a._v(" "),s("ul",[s("li",[a._v("2 行目 "),s("code",[a._v("name: set up the database server")]),a._v(" "),s("ul",[s("li",[a._v("エントリ名を表します。省略することも可能ですが"),s("code",[a._v("ansible-playbook")]),a._v("を実行した際に name が出力されるため、できるだけ分かりやすい名称を付けておきましょう")])])]),a._v(" "),s("li",[a._v("4 行目 "),s("code",[a._v("become: no")]),a._v(" "),s("ul",[s("li",[a._v("yes の場合、この Playbook（Play）を root ユーザーで実行することを示します")])])]),a._v(" "),s("li",[a._v("5 行目 "),s("code",[a._v("gather_facts: no")]),a._v(" "),s("ul",[s("li",[a._v("ansible は実行する前に対象ホストの情報収集を行います。 no にするとその情報収集を行いません")])])]),a._v(" "),s("li",[a._v("6 行目 "),s("code",[a._v("var_files")]),a._v(" "),s("ul",[s("li",[a._v("playbooks 内で使う変数を記載したファイルの指定")])])]),a._v(" "),s("li",[a._v("8 行目 "),s("code",[a._v("roles")]),a._v(" "),s("ul",[s("li",[a._v("タスク・ハンドラをひとまとめにしたものを読み出すもの")])])])]),a._v(" "),s("h3",{attrs:{id:"playbook-の実行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playbook-の実行"}},[a._v("#")]),a._v(" playbook の実行")]),a._v(" "),s("h4",{attrs:{id:"その前に"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#その前に"}},[a._v("#")]),a._v(" その前に")]),a._v(" "),s("p",[a._v("例えば会社の中など、外部へのアクセスに対しproxy設定が必要な場合は以下を編集して下さい")]),a._v(" "),s("p",[s("code",[a._v("vars/proxy.yml")])]),a._v(" "),s("p",[a._v("ここにコメントアウトされたサンプルがあると思いますので\n適宜修正し、コメントインしてください")]),a._v(" "),s("h4",{attrs:{id:"本実行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本実行"}},[a._v("#")]),a._v(" 本実行")]),a._v(" "),s("p",[a._v("では下記コマンドを実行してみましょう")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("ansible-playbook -i inventory/hosts site.yml\n")])])]),s("p",[s("code",[a._v("failed=0")]),a._v("と表示されれば実行は成功です。\nブラウザで"),s("a",{attrs:{href:"http://localhost:18080",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:18080"),s("OutboundLink")],1),a._v("にアクセスすると素朴な Web アプリケーションの画面が見えます。\nまた、下記コマンドでホストに対して実際にファイルがコピーされていることが確認できます。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# MySQL config file")]),a._v("\nansible db1 -m "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" -a "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cat /etc/my.cnf'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# app jar file")]),a._v("\nansible app1 -m "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" -a "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ls -l /opt/ansible-exercise/app.jar'")]),a._v("\n")])])]),s("h3",{attrs:{id:"コラム-シンタックスチェック・ドライランの活用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コラム-シンタックスチェック・ドライランの活用"}},[a._v("#")]),a._v(" コラム シンタックスチェック・ドライランの活用")]),a._v(" "),s("p",[a._v("Ansible を使う上で、playbook が正しく作る事ができたか事前に確認したくなることはないでしょうか。\n本講義では Docker コンテナを対象としたため、誤った操作だった場合はコンテナを破棄して作りなおせば即座にやり直すことができますが、それでもこういったスクラップ＆ビルドは新規構築の時だけでアップグレードなど、既に運用段階の物に適用する際はそういうわけにもいきません。")]),a._v(" "),s("p",[a._v("幸い、Ansible には事前に書式をチェックする(Syntax check)や実行チェック（ドライラン）機能が備わっています。")]),a._v(" "),s("p",[a._v("Playbook の書式チェックには "),s("code",[a._v("--syntax-check")]),a._v("オプションを使います。\n先ほどのコマンドの例で言えば以下のように実行します。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("ansible-playbook -i inventory/hosts site.yml --syntax-check\n")])])]),s("p",[a._v("これは playbook が正しく記述されているかどうかをチェックするコマンドになります。\n"),s("code",[a._v("--syntax-check")]),a._v("は簡単に実行できる反面、あくまで書式のチェックを行うだけなので\nタスクの実行チェックはなされません。")]),a._v(" "),s("p",[a._v("例えば、 http サーバをインストールし、起動する。といったタスクを作ろうとしたときに\n"),s("code",[a._v("httpd の起動")]),a._v(" -> "),s("code",[a._v("httpd のインストール")]),a._v(" と書いていてもそれぞれの書式が正しければ\nsyntax-check は　 OK となってしまいます。")]),a._v(" "),s("p",[a._v("従って、Playbook が正しく実行できるか？と言うことを事前に調べるにはチェックモード（ドライラン）を用います。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("ansible-playbook -i inventory/hosts site.yml -C\n")])])]),s("p",[a._v("こちらのコマンドであれば、実際に Playbook を順番に試行し、実行できるか否かを\nチェックするため、より深く知ることが可能です。\nでは Ansible はこのドライランの時はどのように動作をしているのでしょうか？\nそれはモジュール毎に "),s("code",[a._v("-C")]),a._v("オプション付きで実行された時の動作が記載されており\n条件分岐を行っています。")]),a._v(" "),s("p",[a._v("しかし、ドライランモードにも万能では無いところがあり、コマンドモジュール(command)のようなモジュールはチェックモードの分岐がなく、処理そのものがスキップされてしまうものがあります。\nこういったタスクが含まれている場合、コマンドの結果を次のタスクに受け渡す、\nといったタスクが失敗してしまうので注意して使う必要があります。")]),a._v(" "),s("credit-footer")],1)}),[],!1,null,null,null);s.default=n.exports}}]);