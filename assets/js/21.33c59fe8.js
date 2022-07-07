(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{327:function(a,e,t){a.exports=t.p+"assets/img/Relational_model_concepts_ja.a873849a.png"},328:function(a,e,t){a.exports=t.p+"assets/img/DBOverView_Database001.13f1dc61.png"},434:function(a,e,t){"use strict";t.r(e);var v=t(10),_=Object(v.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("header-table"),a._v(" "),e("h1",{attrs:{id:"database-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-overview"}},[a._v("#")]),a._v(" Database Overview")]),a._v(" "),e("p",[a._v("Databaseとはいかなる道具かを知るきっかけを与える場として本企画に賛同してこの資料をまとめます。\nアプリケーション開発者を目指す方にはデータとの向き合い方を考える一材料として、あるいはDatabaseを\n専門的に取り組む事を目指す方にはこれを機に幅広い知識を自ら深める入り口を与えられる事を期待します")]),a._v(" "),e("h2",{attrs:{id:"目次"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目次"}},[a._v("#")]),a._v(" 目次")]),a._v(" "),e("ol",[e("li",[a._v("データ、データベースの関係")]),a._v(" "),e("li",[a._v("RDBMS(Relational Database Management System)")]),a._v(" "),e("li",[a._v("Relational Model")]),a._v(" "),e("li",[a._v("SQL(Query)")]),a._v(" "),e("li",[a._v("ACID特性")]),a._v(" "),e("li",[a._v("データの保全")]),a._v(" "),e("li",[a._v("データベースの中で起きている事を知る")]),a._v(" "),e("li",[a._v("RDBMSが突きつけられた課題")]),a._v(" "),e("li",[a._v("RDBMSに代る選択肢")]),a._v(" "),e("li",[a._v("Database as a Service")]),a._v(" "),e("li",[a._v("最適解は何か")])]),a._v(" "),e("h2",{attrs:{id:"データ、データベースの関係"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#データ、データベースの関係"}},[a._v("#")]),a._v(" データ、データベースの関係")]),a._v(" "),e("ol",[e("li",[e("p",[a._v('データとは\n　「ISO/IEC 2382-1」および日本工業規格の「X0001 情報処理用語-基本用語」において「データ」の用語定義は\n"A reinterpretable representation of information in a formalized manner suitable for communication, interpretation, or processing."\n「情報の表現であって、伝達、解釈または処理に適するように形式化され、再度情報として解釈できるもの」とされている')]),a._v(" "),e("p",[a._v("出典:WIKIPEDIA")])]),a._v(" "),e("li",[e("p",[a._v("データベースとは\n　　データベースとは、構造化した情報またはデータの組織的な集合であり、通常はコンピューター・システムに電子的に格納されています。データベースは通常、データベース管理システム\n（DBMS）で制御します。データとDBMS、およびそれらに関連するアプリケーションをまとめてデータベース・システムと呼びます。多くの場合は単にデータベースと呼んでいます。")]),a._v(" "),e("p",[a._v("出典: "),e("a",{attrs:{href:"https://www.oracle.com/jp/database/what-is-database/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.oracle.com/jp/database/what-is-database/"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("*受講者の方に質問\n　  Q.「データベースといって思い浮かべるものは、何ですか？」\n　A.「　　　　」")])])]),a._v(" "),e("h2",{attrs:{id:"rdbms-relational-database-management-system"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-relational-database-management-system"}},[a._v("#")]),a._v(" RDBMS(Relational Database Management System)")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("RDBMS(Relational Database Management System)\n関係（かんけい、リレーション、英: Relation）とは関係モデル（リレーショナルモデル）において、一つの見出しと0以上の同じ型の組(タブル、行)の\n順序づけられていない集合からなるデータ構造のことである")]),a._v(" "),e("p",[e("img",{attrs:{src:t(327),alt:"Relation",title:"Relation"}})]),a._v(" "),e("p",[a._v("出典:WIKIPEDIA")]),a._v(" "),e("p",[a._v("RDBMSにおいてはデータを行と列から構成される2次元の表形式で表す事が多く、ここからはTABLE(表)を使ったデータモデルを例に\n講義を進めます")])])]),a._v(" "),e("h2",{attrs:{id:"relational-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relational-model"}},[a._v("#")]),a._v(" Relational Model")]),a._v(" "),e("ol",[e("li",[a._v("もう少し身近なデータを使って「関係」を表現してみます\n"),e("ul",[e("li",[a._v("2021年度新入社員の関係性に関するデータをモデル化"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// emp\nEMPNO DEPNO ENAME     JOB      MGR  HIREDATE   SAL\n1     10    moriyasu  CEO      null 1992-12-03 XXXXXXXXXXX\n2     20    sorimachi HR-MGR   1001 1993-01-21 XXXXXXXXXXX        \n3     40    ado       ENGINEER 2001 1995-10-30 XXXXXXXXXXX\n4     51    ogawa     SALES    2010 1997-04-01 XXXXXXXXXXX\n5     50    muroya    SALES    2020 1999-06-01 ZZZZZZZZZZZ\n6     51    endo      GENERAL  1002 1999-06-01 ZZZZZZZZZZZ\n7     20    morita    GENERAL  1002 1999-04-01 ZZZZZZZZZZZ\n8     32    furuhashi ENGINEER 2050 2000-04-01 XXXXXXXXXXX\n9     40    asano     ENGINEER 2001 1998-01-01 XXXXXXXXXXX\n10    30    minamino  ENGINEER 2001 1998-01-01 XXXXXXXXXXX\n\n// dept\nDEPNO DNAME       LOCATION    DESC\n10    CEOROOM     IDB         XXXXXXXXXXX\n20    HR          IDB         XXXXXXXXXXX        \n30    SUPPORT     SRI         XXXXXXXXXXX\n31    OPERATIONS  IDB         XXXXXXXXXXX \n32    OPERATIONS  FKO         XXXXXXXXXXX\n33    OPERATIONS  OSK         XXXXXXXXXXX\n40    DEVELOPMENT IDB         XXXXXXXXXX\n50    SALES1E     IDB         XXXXXXXXXXX\n51    SALES2E     IDB         XXXXXXXXXXX\n53    SALES1W     OSK         XXXXXXXXXXX\n")])])])])])])]),a._v(" "),e("h2",{attrs:{id:"sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[a._v("#")]),a._v(" SQL")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("SQL(Strutured Query Languageの略)")]),a._v(" "),e("ul",[e("li",[a._v("データ定義: データを格納する表を定義 / DDL (Data Definition Language)")]),a._v(" "),e("li",[a._v("データ操作: 表に対してデータの検索、更新、挿入、削除、複数の表を結合 / DML (Data Manipulation Language)")]),a._v(" "),e("li",[a._v("トランザクション機能: データを更新してから、更新情報が確定するまでの一連の流れを管理 / DCL (Data Control Language)")])]),a._v(" "),e("p",[a._v("SQLの中で最も重要な機能となる「データ検索/Query(クエリ)」について触れます\n前述のEMP表、DEPT表を用いて次の条件で”データ検索”を行ってみましょう")]),a._v(" "),e("p",[a._v("Q.全社員の中でSUPPORT部に属している社員名を調べるSQL(Query)が書ける方？")]),a._v(" "),e("p",[a._v("A.「」")])])]),a._v(" "),e("h2",{attrs:{id:"acid特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acid特性"}},[a._v("#")]),a._v(" ACID特性")]),a._v(" "),e("ol",[e("li",[a._v("ACID特性とは\n　 信頼性のあるトランザクションシステムの持つべき性質として1970年代後半にジム・グレイが定義した概念\nこれ以上分解してはならないという意味の不可分性、一貫性、独立性、および永続性は、トランザクション処理の信頼性を保証する為の性質\n"),e("ul",[e("li",[a._v("“Atomicity”   （原子性）")]),a._v(" "),e("li",[a._v("“Consistency” （一貫性）")]),a._v(" "),e("li",[a._v("“Isolation”   （独立性）")]),a._v(" "),e("li",[a._v("“Durability”  （耐久性)")])])])]),a._v(" "),e("h2",{attrs:{id:"データの保全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#データの保全"}},[a._v("#")]),a._v(" データの保全")]),a._v(" "),e("ol",[e("li",[a._v("データの保全\n"),e("ul",[e("li",[a._v("データベースにおいてデータの一貫性を保護し，不整合を排除して安全にデータを保管する行為もしくはその考え方")])])])]),a._v(" "),e("h2",{attrs:{id:"データベースの中で起きている事を知る"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#データベースの中で起きている事を知る"}},[a._v("#")]),a._v(" データベースの中で起きている事を知る")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("データベース内部で起きる最適化の話")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("最も最小の___でデータ集合を見つける事")])]),a._v(" "),e("li",[e("p",[a._v("出来る限り最小限の___でデータにアクセスする事")]),a._v(" "),e("p",[a._v("-> 何をもって「適切」なのかを判断するデータベース内部の機構を ___ と呼ぶ")])])]),a._v(" "),e("p",[a._v("先ほどのemp表、dept表からSUPPORT部所属の社員(とLocation)を「検索」する場合どうなるか？")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SELECT e.ename, d.loc from emp e, dept d\nWHERE e.deptno=d.deptno AND e.deptno=30\n;\n")])])]),e("p",[a._v("表の結合方法を”NASTED LOOP”とすれば、emp表には10行、dept表には10行データがあるので最大で\n10x10回の探索でデータの特定が出来るでしょう。データベース内部では、100回行って探索する事を\n最適か？という事を常に意識して動作している、と理解しておきましょう。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// - データベースをもっと深く勉強したいと考えている方へ課題                   \n// 次のSQLを実行し、結果がどうなって、どのような影響があり、なぜそうなったか調べてみてください\n\nSELECT e.ename, d.loc from emp e, dept d\nWHERE e.deptno=d.deptno AND e.deptno=30\nAND d.deptno=30\n;\n")])])]),e("p",[a._v("「適切」である事は都度状況に応じて変わる、と頭の片隅に必ず置いておきましょう。")])])]),a._v(" "),e("h2",{attrs:{id:"rdbmsが突きつけられた課題"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdbmsが突きつけられた課題"}},[a._v("#")]),a._v(" RDBMSが突きつけられた課題")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("e-commerce")]),a._v(" "),e("ul",[e("li",[a._v("1990年代後半から、企業がインターネットを介して不特定多数の消費者に対して小売（企業対消費者間取引、B2C）を行うことが徐々に広まる")]),a._v(" "),e("li",[a._v("B2CのコマースにおけるDatabaseの重要性は増す一方、役割が多岐に、要件の増大は☝️")])])]),a._v(" "),e("li",[e("p",[a._v("Online Game / Social Game")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("時期同じくして1997年後半...")])]),a._v(" "),e("li",[e("p",[a._v("アイテム課金 /「射幸性」")]),a._v(" "),e("p",[a._v("-> あれもこれも「DBに突っ込んでおけ!」")]),a._v(" "),e("ul",[e("li",[a._v("余談ですが、筆者はこの頃からDatabaseを知りのめり込んで行きました")])])])])])]),a._v(" "),e("h2",{attrs:{id:"rdbmsに代る選択肢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdbmsに代る選択肢"}},[a._v("#")]),a._v(" RDBMSに代る選択肢")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("データモデルを根底から捉え直す")]),a._v(" "),e("ul",[e("li",[a._v("一時的なセッション情報管理、ユニーク性の担保、テンポラリかつアドホックなデータ等、割り切ってデータを管理したらいいのでは？")])])]),a._v(" "),e("li",[e("p",[a._v("KVS")]),a._v(" "),e("ul",[e("li",[a._v("memcached")]),a._v(" "),e("li",[a._v("redis")]),a._v(" "),e("li",[a._v("cassandora")])])]),a._v(" "),e("li",[e("p",[a._v("DocumentDB")]),a._v(" "),e("ul",[e("li",[a._v("MongoDB\n"),e("ul",[e("li",[a._v("Schemaless")]),a._v(" "),e("li",[a._v("JSONファイルをドキュメントとして保存")])])]),a._v(" "),e("li",[a._v("CouchBase")])])])]),a._v(" "),e("h2",{attrs:{id:"database-as-a-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-as-a-service"}},[a._v("#")]),a._v(" Database as a Service")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Databaseの維持管理コストは無視できない、重要性は変わらずむしろ増すばかり")]),a._v(" "),e("ul",[e("li",[a._v("MySQLとにかく詳しい人ください")]),a._v(" "),e("li",[a._v("Memcachedもわかるとありがたい")]),a._v(" "),e("li",[a._v("RedisでClusterは組めますか？")]),a._v(" "),e("li",[a._v("新Versionのあの機能を試したいんです、いつ試せそうですか？")]),a._v(" "),e("li",[a._v("開発者はコードだけを書きたい")]),a._v(" "),e("li",[a._v("管理は専門性とトレードオフ")])])]),a._v(" "),e("li",[e("p",[a._v("Full Managed Database Service")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Database管理から開放します、さあどうぞ")]),a._v(" "),e("ul",[e("li",[a._v("AWS RDS")]),a._v(" "),e("li",[a._v("GCP CloudSQL")])])]),a._v(" "),e("li",[e("p",[a._v("顧客「性能が全然足りません、なんとかして！」")]),a._v(" "),e("ul",[e("li",[a._v("クラウドベンダー「性能要求に応じてスケールアウトさせます!」")]),a._v(" "),e("li",[a._v("AWS Aurora")]),a._v(" "),e("li",[a._v("GCP Spanner")])])]),a._v(" "),e("li",[e("p",[a._v("顧客「クラウドでDataWareHouseが出来ると助かる。費用は使っただけ、にして欲しい」")]),a._v(" "),e("ul",[e("li",[a._v("AWS RedShift")]),a._v(" "),e("li",[a._v("Google BigQuery")])])])])])]),a._v(" "),e("p",[e("img",{attrs:{src:t(328),alt:"Database_lists",title:"Databases"}})]),a._v(" "),e("h2",{attrs:{id:"最適解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最適解"}},[a._v("#")]),a._v(" 最適解")]),a._v(" "),e("p",[a._v("皆さんは様々な形でデータと向き合い合うことになると思います。今日はデータモデルの生い立ちからDatabaseの発展の\n経緯、本当にごく一部ですがDatabaseの内部構造に触れました。Databaseという便利な道具を使いこなす事で単なる\nデータの塊が意味を持ち出し「データ」から貴重な「情報」に変えられるという気づきを与えられればとても嬉しく思います。")]),a._v(" "),e("p",[a._v("繰り返しに成りますがDatabaseは便利な道具に過ぎません、楽しく面白く使い倒してください。")]),a._v(" "),e("p",[a._v("ご清聴ありがとうございました。")]),a._v(" "),e("credit-footer")],1)}),[],!1,null,null,null);e.default=_.exports}}]);