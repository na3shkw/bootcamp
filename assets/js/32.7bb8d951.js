(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{424:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_3-ansible-playbook-の作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ansible-playbook-の作成"}},[s._v("#")]),s._v(" 3. Ansible playbook の作成")]),s._v(" "),a("p",[s._v("Ansible のアドホックコマンドは単純なオペレーションには便利ですが、\n複雑な構成管理や作業の定型化などには適していません。")]),s._v(" "),a("p",[s._v("従って Ansible を実行するには playbook と呼ばれる YAML ファイルを作成し実行します。\nでは、実際に playbook を作成してみましょう。")]),s._v(" "),a("h3",{attrs:{id:"インベントリを作成する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インベントリを作成する"}},[s._v("#")]),s._v(" インベントリを作成する")]),s._v(" "),a("p",[s._v("まずはじめに Inventory ファイルと呼ばれる物を作成します。\nAnsible において、Inventory ファイルは対象を示していて実行に欠かせない要素です。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/iij/ansible-exercise",target:"_blank",rel:"noopener noreferrer"}},[s._v("教材"),a("OutboundLink")],1),s._v("のフォルダには\n先ほどのサンプル実行でも使われた inventory ファイルがありますので\n試しに開いてみましょう。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" inventories/hosts\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\napp1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndb1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nrp1\n")])])]),a("p",[s._v("Ansible の Inventory ファイルは INI 形式に近い記述によって作成されます。\n上記、Inventory ファイルの括弧内の見出し("),a("code",[s._v("[app]")]),s._v("など)はグループ名を表し、\nホストをグルーピングすることができます。\nなお、[]に属さないホストはデフォルトである"),a("code",[s._v("all")]),s._v("グループに属することになります")]),s._v(" "),a("p",[s._v("では、host ファイルに "),a("code",[s._v("host000")]),s._v(", "),a("code",[s._v("host001")]),s._v(", "),a("code",[s._v("host002")]),s._v(" を追加してみましょう。\nグループ名は"),a("code",[s._v("exercise")]),s._v("として下さい。")]),s._v(" "),a("h4",{attrs:{id:"inventory-ファイルのテスト"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-ファイルのテスト"}},[s._v("#")]),s._v(" Inventory ファイルのテスト")]),s._v(" "),a("p",[s._v("先ほど作成した Inventory が正しいことを確かめるために、"),a("code",[s._v("ansible")]),s._v("コマンドで Ping モジュールを実行してみます。 コマンドと実行結果は下記のようになるはずです。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ansible -i ~/inventory/hosts exercise -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nhost002 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ansible_facts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovered_interpreter_python"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/python"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"changed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pong"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nhost001 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ansible_facts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovered_interpreter_python"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/python"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"changed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pong"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nhost000 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ansible_facts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovered_interpreter_python"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/python"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"changed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pong"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"playbook-を作成する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playbook-を作成する"}},[s._v("#")]),s._v(" Playbook を作成する")]),s._v(" "),a("p",[s._v("Playbook（プレイブック）は、管理対象に対してこうなってほしいという構成や手順を記述したファイルです。\nplaybook は先ほど実行していたアドホックコマンドを複数取り込み、\n複数の task のセットとして利用することができるようになります。")]),s._v(" "),a("p",[s._v("では、これまでアドホックに行っていた ansible ping を行う playbook を作成してみましょう。")]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" exercise\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])])]),a("h4",{attrs:{id:"解説"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解説"}},[s._v("#")]),s._v(" 解説")]),s._v(" "),a("ul",[a("li",[s._v("1 行目: "),a("code",[s._v("---")]),s._v(" "),a("ul",[a("li",[s._v("Playbook の始まりを意味します")]),s._v(" "),a("li",[s._v("YAML における形式の区切りの意味も持つため Playbook を書く際には必ず入れましょう")])])]),s._v(" "),a("li",[s._v("2 行目 "),a("code",[s._v("hosts: exercise")]),s._v(" "),a("ul",[a("li",[s._v("この Playbook（Play）は、Inventory の中の"),a("code",[s._v("exercise")]),s._v("グループに対して実行すると示します")])])]),s._v(" "),a("li",[s._v("4 行目 "),a("code",[s._v("tasks:")]),s._v(" "),a("ul",[a("li",[s._v("この行以下は、この Playbook（Play）で実行される task を定義します")]),s._v(" "),a("li",[s._v("tasks 後の行は、インデント（行頭の空白による字下げ）が入ります\n"),a("ul",[a("li",[s._v("このインデントは、YAML の書式同様、以降の要素が tasks の子要素や孫要素となっていることを意味します")])])])])]),s._v(" "),a("li",[s._v("5 行目 "),a("code",[s._v("ping")]),s._v(" "),a("ul",[a("li",[s._v("ここで"),a("code",[s._v("ping")]),s._v("モジュールを用いて操作する事（task)を宣言します\n"),a("ul",[a("li",[s._v("モジュールによって様々なオプションを追加することがあります")])])])])])]),s._v(" "),a("h4",{attrs:{id:"playbook-の実行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playbook-の実行"}},[s._v("#")]),s._v(" Playbook の実行")]),s._v(" "),a("p",[s._v("ここまでで Inventory ファイルと Playbook ファイルが作成できました。\n"),a("code",[s._v("ansible-plyabook")]),s._v("を使用する上での最低限のファイルが作成できたので実行してみましょう。\nコマンドと実行結果は下記のようになるはずです。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ansible-playbook -i inventories/hosts playbooks.yml")]),s._v("\n\nPLAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("exercise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ****************************************************************************************************************************************************************\n\nTASK "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Gathering Facts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" *********************************************************************************************************************************************************\nok: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nok: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nok: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nTASK "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ********************************************************************************************************************************************************************\nok: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nok: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nok: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPLAY RECAP *********************************************************************************************************************************************************************\nhost000                    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ok")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("changed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("unreachable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("skipped")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rescued")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ignored")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nhost001                    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ok")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("changed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("unreachable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("skipped")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rescued")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ignored")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nhost002                    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ok")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("changed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("unreachable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("skipped")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rescued")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ignored")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),a("p",[s._v("上記の通り exercise グループに属している host000, host001, host002 の 3 台に対し、ping モジュールが実行され"),a("code",[s._v("OK")]),s._v("が表示されれば成功です。")]),s._v(" "),a("h3",{attrs:{id:"コラム-inventory-を-yaml-で書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コラム-inventory-を-yaml-で書く"}},[s._v("#")]),s._v(" コラム Inventory を YAML で書く")]),s._v(" "),a("p",[s._v("Ansible のターゲットホストの情報を定義するインベントリファイルは、INI 形式の他にも YAML 形式でも定義できす。")]),s._v(" "),a("p",[s._v("先ほど利用した INI 形式の Inventory ファイルを YAML 形式で記述すると以下の通りになります。\nYAML 形式で記述すると全てのグループが"),a("code",[s._v("all")]),s._v("グループの配下にあることが分かります。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("all:\n  children:\n    app:\n      hosts:\n        app1: {}\n    db:\n      hosts:\n        db1: {}\n    exercise:\n      hosts:\n        host000: {}\n        host001: {}\n        host002: {}\n    rp:\n      hosts:\n        rp1: {}\n    ungrouped: {}\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);