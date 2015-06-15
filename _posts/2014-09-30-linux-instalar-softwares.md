---
title: Instalar softwares em Linux
layout: post_entry
image: /media/linux_logo.png
description: Explicação de instalação de programas em Linux
categories:
 linux
---

Como se instala um software? Extrais o código e corres numa linha de comandos: ./configure && make && sudo install

Simples. Agora a explicação.

No Windows fazes download de software já compilado e pronto a ser executado para a arquitectura certa. Alguns instaladores lidam com essa tarefa e o mesmo instalador instala versões diferentes, outros softwares são distribuídos para arquitecturas diferentes, por exemplo quando na página de download tens disponíveis as versões x86 para 32 bits e x64 para 64 bits para download.

No Linux há softwares distribuídos assim - os pacotes .deb em debian e .rpm em Fedora. Mas isto é uma pequena parte comparado com o software disponível que é opensource e muito dele mantido apenas por amor do programador aos utilizadores. Nesses casos não há tempo para disponibilizar estes pacotes.

Também hà software disponibilizado por repositórios que podem ser instalados com o apt ou yum. Podes ver mais aqui: (https://guilhermecardoso.pt/ide/software/2014/09/18/linux-software-versoes-chaves.html)[https://guilhermecardoso.pt/ide/software/2014/09/18/linux-software-versoes-chaves.html]

Mais tarde ou mais cedo chega a altura em que é bom perceber como se compila os softwares em Linux, eu ainda configurei muitos servidores sem o entender bem.

Código - O código do software é distribuído em ficheiros comprimidos, sistemas GIT, ftp, entre outros. Normalmente fazes download do ficheiro comprimido, por exemplo "spotify-client-test-0.1.tar.gz"

Se for em linhas de comandos, os arquivos .tar.gz descomprimem-se com:

	tar -xvfz spotify-client-test-0.1.tar.gz

Isto cria uma nova directoria, neste caso **spotify-client-test-0.1**. Ela deve ter um ficheiro README e outro INSTALL. Nestes documentos de texto os desenvolvedores explicam como instalar, que dependências existem, problemas comuns. 

### ./configure

Este comando executa o script **configure** que vai certificar que o sistema operativo tem todas as dependências necessárias para que o software seja instalado. Dependendo do software o retorno do comando pode ser mais ou menos informativo.

Normalmente explica a biblioteca em falta e sugere pacotes a serem instalados. Em casos de erros conseguimos ver sempre o ficheiro e ir lá inspecionar por nós.

No final o script cria um ficheiro **MAKEFILE**

Ele pode gerar o script e mesmo assim ter enviado erros, é preciso ter atenção a isso. 

O parametro prefix indica o destino da instalação quando instalarmos. Esse destino é pré defenido pelo sistema mas pode ser alterado

	./configure --prefix=/usr/local/bin

### make

O make é um software utilitário que existe em quase todos os sistemas Unix.

Este utilitário procura um script **MAKEFILE** para compilar todo o código do programa e criar os executáveis. É possível que certas partes do código requiram que outras partes do código já estejam prontas, é esta a função da Makefile. Define a sequência para os eventos para que o programa não acuse dependências em falta.

O makefile tem vários nomes para secções diferentes. É possível que o controlo seja pasasdo para diversas secções dentro do Makefile ou é possível que no fim de uma secção haja um comando para ir para outra.

O melhor exemplo que temos é o **install**

Se o comando **make** correr com sucesso então a instalação está quase completa.

### make install

Quando corres o make sem nenhum parametro, a instrução no Makefile começa a executar do início e consoante as regras defenidas dentro do Makefile. Quando corres make com install como parâmetro, o utilitário make procura por uma secção chamada install dentro do Makefile, e executa apenas essa secção.

Com o **make** os executáveis e outros ficheiros são compilados, a secção install copia esses executáveis e outros ficheiros para os directórios finais do sistema.

Os executáveis podem ser copiados para o /usr/local/bin para ser acedido por todos os utilizadores. O make apenas os gera, a secção install é que os copia.


### autogen


http://www.codecoffee.com/tipsforlinux/articles/27.html

