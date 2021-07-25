(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{473:function(t,a,e){"use strict";e.r(a);var s=e(44),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("header-table"),t._v(" "),e("h1",{attrs:{id:"page-frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),e("h2",{attrs:{id:"おさらい"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#おさらい"}},[t._v("#")]),t._v(" おさらい")]),t._v(" "),e("p",[t._v("前回の下準備でDockerコマンドのインストールを実施いただきました。")]),t._v(" "),e("p",[t._v("下記コマンドを入力し、コマンドが実行できるか確認してください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker version\n")])])]),e("h2",{attrs:{id:"_1-docker-とは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-とは"}},[t._v("#")]),t._v(" 1. Docker とは")]),t._v(" "),e("p",[t._v("Docker は、現在Docker 社が開発しているコンテナ型の仮想環境プラットフォームです。コンテナとは仮想マシンのような1台のコンピュータの上で、仮想的に複数のコンピュータを動作させる技術の1つのしくみです。しかしながら、仮想マシンとは少し異なるしくみの元動作しています。一般的な仮想マシンと呼ばれるソフトウェア（VirtualBox など）では、ホストOS上で仮想マシン用のソフトウェアを動かし、その中でまたOS を起動します。OS の中で別のOSを起動するため起動やホスト自体のハードウェアにアクセスする際、時間がかかるなどのデメリットが存在します。しかしコンテナ型では、ホストOS 上に専用のアプリケーション実行用の領域を作成しその中で実行するしくみとなっているためアプリケーションや環境の起動が高速でメモリやディスクも小容量で実行できます。また、開発環境などにDocker を使うことでホストアプリケーションを実行に必要な環境と合わせて配布することで、メンバー全員が同じ環境で開発を行うことが容易になります。")]),t._v(" "),e("p",[t._v("Docker には、大きくわけて2つの重要な概念が存在します。1つ目は、前述しているコンテナである「"),e("strong",[t._v("Docker コンテナ")]),t._v("」です。2つ目は、「"),e("strong",[t._v("Docker イメージ")]),t._v("」と呼ばれるコンテナの土台となるシステムファイルです。\n多くの場合、docker内のアプリケーションが動作するまでの流れは以下のようになっています。")]),t._v(" "),e("ol",[e("li",[t._v("Docker イメージのダウンロード（または作成）")]),t._v(" "),e("li",[t._v("Docker イメージを元にコンテナを作成")]),t._v(" "),e("li",[t._v("Docker コンテナを起動しアプリケーションを実行")])]),t._v(" "),e("p",[t._v("そこで本講義では、")]),t._v(" "),e("ul",[e("li",[t._v("Docker イメージのダウンロード、Docker コンテナの作成方法")]),t._v(" "),e("li",[t._v("ダウンロードしたDocker イメージやDocker コンテナの管理方法")]),t._v(" "),e("li",[t._v("Dockerfileを用いたDocker イメージの作成")])]),t._v(" "),e("p",[t._v("についてご紹介したいと思います。")]),t._v(" "),e("h2",{attrs:{id:"_2-docker-でhello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-でhello-world"}},[t._v("#")]),t._v(" 2. Docker でHello World")]),t._v(" "),e("p",[t._v("では初めに、"),e("code",[t._v("docker run")]),t._v(" コマンドを用いて、初めてのコンテナ作成をしてみましょう。")]),t._v(" "),e("p",[e("code",[t._v("docker run")]),t._v(" コマンドは、上記の")]),t._v(" "),e("ol",[e("li",[t._v("Docker イメージのダウンロード")]),t._v(" "),e("li",[t._v("Docker イメージを元にコンテナを作成")])]),t._v(" "),e("p",[t._v("を実行してくれるコマンドです。今回の場合、初めに「hello-world」のDocker イメージをダウンロードしてきます。ダウンロードが完了後、Docker イメージの定義に基づいて、"),e("strong",[t._v("Hello from Docker!")]),t._v(" という文字列を表示するアプリケーションが自動的に実行されます。")]),t._v(" "),e("p",[t._v("以下のコマンドを実行してください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run hello-world\n")])])]),e("p",[t._v("上記コマンドを実行すると以下のような画面が表示されると思います。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Unable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\n1b930d010525: Pull complete\nDigest: sha256:2557e3c07ed1e38f26e389462d03ed943586f744621577a99efb77324b0fe535\nStatus: Downloaded newer image for hello-world:latest\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),e("h2",{attrs:{id:"_3-dockerコマンドを用いたコンテナ・イメージの管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-dockerコマンドを用いたコンテナ・イメージの管理"}},[t._v("#")]),t._v(" 3. dockerコマンドを用いたコンテナ・イメージの管理")]),t._v(" "),e("h3",{attrs:{id:"_3-1-docker-ps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-docker-ps"}},[t._v("#")]),t._v(" 3.1 docker ps")]),t._v(" "),e("p",[e("code",[t._v("docker ps")]),t._v(" コマンドは、ローカル環境に存在するDockerコンテナに関する情報を表示してくれます。現在起動しているコンテナは"),e("code",[t._v("docker ps")]),t._v(" と入力すると表示されます。しかしながら今の状態で本コマンドを実行してもヘッダー情報だけで何も表示されないと思います。実は今回のコンテナは文字を出力したら終了してしまいます。つまり永続的に稼働しているコンテナではありません。こういったすでに終了してしまったり、エラーで起動できていないコンテナを確認するためには、オプションで"),e("code",[t._v("-a")]),t._v(" を付けることで表示可能です。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a\nCONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                      PORTS                      NAMES\n9b1f2c08a269        hello-world                     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),t._v("                 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" seconds ago      Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" seconds ago                              admiring_jang\n")])])]),e("h3",{attrs:{id:"_3-2-docker-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-docker-images"}},[t._v("#")]),t._v(" 3.2 docker images")]),t._v(" "),e("p",[e("code",[t._v("docker images")]),t._v(" コマンドは、ローカル環境に存在するDocker イメージの一覧を表示するコマンドです。現状では、「hello-world」イメージのみが存在すると思います。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker images\nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\nhello-world                   latest              fce289e99eb9        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".84kB\n")])])]),e("p",[t._v("Dockerイメージには、名前の他に「TAG」を付けることができます。TAGでは、主にバージョンを管理していることが多いです。今回表示されている「latest」は最新版であることを意味しています。")]),t._v(" "),e("h3",{attrs:{id:"_3-3-docker-start、stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-docker-start、stop"}},[t._v("#")]),t._v(" 3.3 docker start、stop")]),t._v(" "),e("p",[e("code",[t._v("docker start")]),t._v(" は、コンテナの起動を行うコマンドで、"),e("code",[t._v("docker stop")]),t._v(" は、コンテナを停止するコマンドです。これらのコマンドでは、起動・停止対象のコンテナを選択する必要があるため、引数として"),e("code",[t._v("docker ps")]),t._v(" の表示結果にあった「CONTAINER ID」を設定します。")]),t._v(" "),e("p",[t._v("では、今回のコンテナを起動してみましょう。ただし普通に起動するだけでは、標準入出力がコンテナ内にとどまってしまい、最初と同じ画面は表示されません。そこで、手元の標準入出力とコンテナ内の標準入出力を紐づけるために、"),e("code",[t._v("-a")]),t._v(" オプション（"),e("code",[t._v("--attach")]),t._v(" オプション)を付けてあげます。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker start -a 9b1f2c08a269\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("省略"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-4-docker-rm、rmi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-docker-rm、rmi"}},[t._v("#")]),t._v(" 3.4 docker rm、rmi")]),t._v(" "),e("p",[e("code",[t._v("docker rm")]),t._v(" と"),e("code",[t._v("docker rmi")]),t._v(" は、それぞれDocker コンテナ、Docker イメージの削除を行うコマンドです。それぞれ引数に「CONTAINER ID」や「IMAGE ID」を設定する必要があります。また、削除したいDocker イメージを元に作成したDocker コンテナが存在する場合削除できません。その際は、事前にDocker コンテナを削除した後に、Docker イメージを削除してください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 9b1f2c08a269\n9b1f2c08a269\n$ docker rmi fce289e99eb9\nUntagged: hello-world:latest\nUntagged: hello-world@sha256:2557e3c07ed1e38f26e389462d03ed943586f744621577a99efb77324b0fe535\nDeleted: sha256:fce289e99eb9bca977dae136fbe2a82b6b7d4c372474c9235adc1741675f587e\nDeleted: sha256:af0b15c8625bb1938f1d7b17081031f649fd14e6b233688eea3c5483994a66a3\n")])])]),e("h2",{attrs:{id:"_4-dockerfile-によるdocker-イメージ作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-dockerfile-によるdocker-イメージ作成"}},[t._v("#")]),t._v(" 4. Dockerfile によるDocker イメージ作成")]),t._v(" "),e("p",[t._v("Docker では、「"),e("strong",[t._v("Dockerfile")]),t._v("」というファイルを用いて、Docker イメージの作成を行うことができます。Dockerfile は専用言語で記述します。このようにコンテナを初めとするサーバ環境やミドルウェアなどをコード（プログラム、設定ファイルなど）で構成管理することを「"),e("strong",[t._v("Infrastructure as Code（IaC）")]),t._v("」と呼びます。Dockerfile のように環境をコード化して管理することにより、以下のようなメリットが挙げられます。")]),t._v(" "),e("ul",[e("li",[t._v("新規メンバーの開発環境が、Dockerfile を共有するだけで構築可能")]),t._v(" "),e("li",[t._v("複雑なインフラ環境がテキストベースで管理でき、git 等での管理が容易に")]),t._v(" "),e("li",[t._v("構築手順などがコード化されるため、漏れや間違いが発見しやすくなる")])]),t._v(" "),e("p",[t._v("今回は、ubuntu というDocker イメージを元にカスタマイズしながら、nginx によるWeb サーバのDocker イメージを作成します。また、作成したDocker イメージを使ってDocker コンテナを立ち上げ、HTML ファイルがレスポンスされることを確認します。")]),t._v(" "),e("p",[t._v("では、実際にDockerfile を作成し、Docker イメージを作成していきましょう。以下の内容をファイル名「Dockerfile」として作成してください。")]),t._v(" "),e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ubuntu")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" maintainer="),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email"')])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt-get update && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    apt-get install nginx -y && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    rm /var/www/html/index.nginx-debian.html")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" index.html /var/www/html/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-g"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daemon off;"')]),t._v("]")]),t._v("\n")])])]),e("p",[t._v("また、"),e("code",[t._v("COPY")]),t._v(" コマンドで利用する「index.html」を以下のように作成してください（あくまで一例です）。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token doctype"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),e("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello world"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("IIJ Boot Camp"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello World from docker container!!"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("作成したDockerfile の内容を先頭から読み解いていきましょう。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FROM")]),t._v(" 命令は、ベースとなるDocker イメージを設定する命令です。今回は、ubuntu を利用しています。Dockerfile は必ず"),e("code",[t._v("FROM")]),t._v(" 命令から始まっていなければなりません。")]),t._v(" "),e("li",[e("code",[t._v("LABEL")]),t._v(" 命令は、Docker イメージにメタデータを付加するときに利用します。今回は、"),e("code",[t._v("maintainer")]),t._v(" つまり管理者を追加しています。昔のDockerfile においては、"),e("code",[t._v("MAINTAINER")]),t._v(" 命令を使って設定していましたが、現在は非推奨となっています。")]),t._v(" "),e("li",[e("code",[t._v("RUN")]),t._v(" 命令は、Dockerfile の中でもとても重要な命令で、Docker イメージ作成時に実行する命令を記述します。今回はパッケージのアップデートとnginx のインストール、nginx のデフォルトウェブページであるHTML ファイルの削除を行っています。この行で重要なのは、"),e("strong",[t._v("&&")]),t._v(" で繋いで実行している点です。Dockerfile からDocker イメージを作成する際、"),e("code",[t._v("RUN")]),t._v(" 命令などの実行した状態をキャッシュとして保存します。そのため、"),e("code",[t._v("apt-get update")]),t._v(" と"),e("code",[t._v("apt-get install nginx -y")]),t._v(" が異なる行で書かれていると、新しくパッケージを追加するために、"),e("code",[t._v("apt-get install nginx -y")]),t._v("の行を更新して、再度Docker イメージを作成しようとした際に、"),e("code",[t._v("apt-get update")]),t._v(" で作成されたキャッシュを利用してしまい、"),e("strong",[t._v("最新版ではないnginx やパッケージがインストールされてしまう")]),t._v("可能性があります。")]),t._v(" "),e("li",[e("code",[t._v("COPY")]),t._v(" 命令は、ローカルにあるファイルなどをコンテナの内部へコピーする際に利用します。")]),t._v(" "),e("li",[e("code",[t._v("EXPOSE")]),t._v(" 命令は、コンテナ実行時にポートで待ち受けることをdocker に伝えます。注意点として、この命令を書いただけでは、ホスト環境からアクセスはできません。実際にアクセスするためには、後述する"),e("code",[t._v("docker run")]),t._v(" コマンドのオプションでポートを設定する必要があります。")]),t._v(" "),e("li",[e("code",[t._v("ENTRYPOINT")]),t._v(" 命令は、"),e("code",[t._v("RUN")]),t._v(" 命令と異なり、Dockerイメージから実際のコンテナを作成する際に実行されます。")])]),t._v(" "),e("p",[t._v("その他詳しい機能について知りたい方は、"),e("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式のリファレンス"),e("OutboundLink")],1),t._v("をご参照ください。")]),t._v(" "),e("p",[t._v("では、先ほど作成したDockerfileが存在するディレクトリ内で以下のコマンドを実行してください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker build -t iijbootcamp "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("このコマンドによって、Dockerfile からDocker イメージが作成されます。"),e("code",[t._v("-t")]),t._v(" オプションでイメージ名を決めることができます。また、最後の"),e("code",[t._v(".")]),t._v(" は、Dockerfile が存在するディレクトリ（カレントディレクトリ）を意味しています。")]),t._v(" "),e("p",[t._v("実際にDockerイメージが作成されているかコマンドで確認してみてください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\niijbootcamp         latest              417ab982faaa        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" days ago          170MB\nubuntu              latest              93fd78260bd1        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("86")]),t._v(".2MB\n")])])]),e("p",[t._v("「REPOSITORY」がubuntu とiijbootcamp の２つのイメージが新たに作られていると思います。ubuntu は"),e("code",[t._v("FROM")]),t._v(" で指定したDocker イメージです。iijbootcamp は、ubuntu のDocker イメージを元にnginx やHTML ファイルを追加して今回作成したDocker イメージです。")]),t._v(" "),e("p",[t._v("では、実際にこのコンテナを起動してアクセスしてみましょう。次のコマンドを実行してください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v(":80 iijbootcamp\n")])])]),e("p",[e("code",[t._v("-d")]),t._v(" オプションはコンテナをデタッチドモードで起動することを意味しています。また、nginx はデフォルトでデーモンとして起動してしまうため、Dockerfile ではnginx をデーモンとして起動しないオプションで起動しています。また、"),e("code",[t._v("-p")]),t._v(" オプションでは、ホスト側とコンテナ側のポートを対応付けています。「:」の左側がホスト環境、右側がコンテナ環境のポートを示しており、"),e("strong",[t._v("ホスト環境の8888ポートへアクセスすると、コンテナの80ポートにつながる")]),t._v("ようになっています。")]),t._v(" "),e("p",[t._v("コンテナが起動していることを確認してください。正しく実行されていると以下のような画面が表示されます。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\nCONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                      NAMES\n171c3b25c75e        iijbootcamp:latest         "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx -g \'daemon of…"')]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" minutes ago      Up "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" minutes       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:8888-"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp       condescending_wilson\n")])])]),e("p",[t._v("では、実際にコンテナに対してアクセスしてみましょう。お好きな方法（Webブラウザでもcurlコマンド等でも)で「 "),e("a",{attrs:{href:"http://localhost:8888",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8888"),e("OutboundLink")],1),t._v(" 」にアクセスしてみましょう。以下にcurl コマンドを用いた例を示します。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:8888\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DOCTYPE html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello world"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/head"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("IIJ Boot Camp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/h"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World from docker container"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("上記のように実際に作成したHTMLが表示されていれば成功です。\nプロキシを設定している場合は下記のように"),e("code",[t._v("--noproxy")]),t._v("オプションを指定する必要があります。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --noproxy localhost http://localhost:8888\n")])])]),e("p",[e("strong",[t._v("curlコマンドによってHTMLが取得できることを確認してください")])]),t._v(" "),e("h2",{attrs:{id:"_5-docker-イメージの共有方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-docker-イメージの共有方法"}},[t._v("#")]),t._v(" 5. Docker イメージの共有方法")]),t._v(" "),e("p",[t._v("皆さんが作成したDocker イメージなどを他の人に共有したい場合、Dockerfile をファイルサーバやGitHub 等で共有する以外に、"),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v("を始めとする「"),e("strong",[t._v("Docker イメージレジストリ")]),t._v("」で公開し、それを利用してもらうことが可能です。例えば、本講義で利用した「hello-world」や「ubuntu」のDocker イメージは、Docker Hubで公開されているものを利用しています。")]),t._v(" "),e("p",[t._v("Docker イメージレジストリに自分のDocker イメージを公開する際には、"),e("code",[t._v("docker push")]),t._v(" コマンドを利用します。逆に、Docker イメージをダウンロードしたい場合は、"),e("code",[t._v("docker pull")]),t._v(" コマンドを利用します。また、Dockerイメージを"),e("code",[t._v("docker save")]),t._v(" コマンドでtarファイルとして保存し、"),e("code",[t._v("docker load")]),t._v(" コマンドでtarからロードするといったことも行うことができます。")]),t._v(" "),e("h2",{attrs:{id:"_6-まとめ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-まとめ"}},[t._v("#")]),t._v(" 6. まとめ")]),t._v(" "),e("p",[t._v("今回は、仮想環境プラットフォームであるDocker を実際に触っていただきました。Docker の基礎知識、Docker コンテナ、イメージの管理方法に加え、Dockerfile を作成し自身でコンテナを作っていただきました。仮想マシンに比べ軽く高速で作成することが可能なため使いどころは多いでしょう。しかしながら、実際のサービスでは、単一のアプリケーションのみで1つのコンテナで完成することはありえません。Web サーバやWeb アプリケーション、データベースなど様々なものが１つに組み合わさって初めてサービスとして完成します。Docker コンテナでは、「1コンテナ1プロセス」や「1コンテナ1ロール」が基本となっています。そのため複数のコンテナを組み合わせて構築する必要があります。次の講義「開発環境をdocker-composeで構築」では、複数のコンテナを組み合わせて管理する手法について学びます。")]),t._v(" "),e("credit-footer")],1)}),[],!1,null,null,null);a.default=r.exports}}]);