---
title: Distribuições Linux - gerir pacotes e versões de programas
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: Nem todas as distribuições são indicadas para determinadas tarefas. Aprende as diferenças na gestão de pacotes
categories:
 linux
---
Distribuições Linux - Pacotes


Em Linux temos várias escolhas de distribuições. As três principais são:

* Debian
* Fedora
* Slackware

Apartir destas três distribuições existem outras que são derivadas da mesma. Como exemplo temos o Ubunto que deriva do Debian.

Elas proporcionam um gestor de pacotes que pode variar de distribuição para distribuição. Enquanto que em Debian usamos o **apt**  no OpenSuse usamos o **zypper** e no Gentoo instalamos os programas usando o código fonte.

Por norma, os gestores de pacotes funcionam de forma semelhante oferecendo as opções:

* install - usada para instalar um novo programa
* update - actualiza a lista de programas pelas fontes dos repositórios
* upgrade - actualiza os programas instalados
* dist upgrade - actualiza a versão da distribuição, sendo uma actualização mais "sólida". 
* remove - remove um programa instalado

Alguns podem entrar em conflito quando se deparam com problemas nas versões de programas. Em Debian, isto é muito comum quando corremos um ``sudo apt-get update`` e recebemos avisos de ``unmet dependencies``. Ocorre quando usamos versões mais recentes distribuídas por comunidades, e determinados programas não as suportam ou requerem até versões mais actuais.

Algo que gostei no **zypper** foi o facto de nunca me ter deparado com este tipo de problemas, enquanto que no Debian a usar o **apt** era o "prato do dia-a-dia".

## Utilizar a versão certa de um programa ##

As dificuldades na gestão de um computador Linux aparecem quando lidamos com problemas de versões de programas e bibliotecas. O mais comum é a versão do **gcc**.

No Debian, o **gcc** distribuído é o 4.7 enquanto que o Ubunto já distribui a versão 4.8. Programas como o Spotify Client e até mesmo a Steam necessitam de versões mais recentes do **gcc**.

O Debian divide as distribuições pelo estado de testabilidade/usuabilidade dos programas. Na versão Wheezy temos programas estáveis enquanto que na Jessie encontramos pacotes mais recentes mas mais instáveis. No caso do **gcc**, a solução mais comum no Debian é instalar a versão de Jessie num computador com o Wheezy mas isto pode trazer problemas quando já há muitos programas a dependerem do **gcc** e são removidos por acidente ou deixam de funcionar.

Apesar de este problema não ser um problema comum para o típico utilizador iniciante de Linux, um utilizador mais avançado tem sempre soluções. Podemos instalar uma versão do programa (neste exemplo o **gcc**) noutro directório e indicamos aos programas para utilizarem esta versão definindo a constante **LD_LIBRARY_PATH**.


## Qual a distribuição mais fléxivel? ##

Para mim é compreensível que o Debian não distribua uma versão actual do **gcc**. Esta distribuição é muito utilizada em servidores e requer código estável.

Quando precisamos de ser tão minuciosos no sistema operativo ao ponto de controlar as versões instaladas, então precisamos de ter um conhecimento mais sólido de Linux e torna-se indiferente a distribuição que utilizamos.

No entanto eu gosto do **Gentoo**. A sua instalação mete medo a todos os iniciantes pois requer instalar o Linux por linhas de comando e proceder à configuração assim. Como resultado final, esta distribuição permite configurar as versões a serem instaladas, assim como instalar várias versões em paralelo.

Quando procuramos por opiniões sobre o **Gentoo** é comum encontrarmos algo do gênero "Qualquer utilizador de Linux devia instalar o Gentoo para compreender melhor como funciona o sistema operativo", e é verdade.