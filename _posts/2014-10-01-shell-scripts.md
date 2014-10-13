---
title: Scripts shell 
layout: post_entry
image: /media/linux_logo.png
excerpt: Uma introdução a scripts shell com Bash
categories:
 linux
---

O bash é não é uma linguagem de programação mas sim um interpretador de comandos. Quando na consola escrevemos um comando o bash interpreta-o executando-o.

Shell scripts é uma linguagem de script usada em vários sitemas operativos em bash. Um exemplo pode ser o ficheiro **configure** gerado nas instalações de software ou um qualquer outro ficheiro .sh. É script pois é um programa escrito em linguagem interpretada como em Python ou Javascript, não é compilada como em C#.

No caso de um programador, temos tarefas comuns como apagar um directori e clonar outro, um script que abra o chrome, um cliente de emails, verifique se há notificações de emails ou redes sociais, etc.

No fundo um script shell vai executar o que pretender-mos. Como exemplo temos o copiar-tese.sh

	#!/bin/bash
	###
	# Copiar Tese para pendrive
	#
	# @description Este script copia todos os documentos da tese para uma pendrive
	# @author Guilherme Cardoso <email@guilhermecardoso.pt>
	###
	cp ~/trabalhos/tese /dev/sda2/

Os comentários não são obrigatórios, apenas na primeira linha para indicar que é um script bash. Os outros sigo a norma mais comum: titulo, descrição, autor. Mesmo em scripts que sei que mais ninguém vai usar documento-os, até porque sou mesmo esquecido.

** Dica ** Na linha de comandos também podemos executar vários comandos intercalados. Para isso separamos cada comando com &&

	mkdir bible && cd bible && cp /tmp/bible.db bible.db

## Permissão## 

Os scripts bash têm de ter permissão para serem executados. É atribuida com o chmod

	chmod +x copiar-tese.sh

## Correr scripts

Podem ser executados com o comando sh ou usando ./

	./copiar-tese.sh
	sh copiar-tese.sh

Além de serem executados também podemos usar o comando **source**. A diferença é que o source vai correr os comandos na shell actual e executar corre os comandos numa nova shell. Por exemplo

	#!/bin/bash
	PATH = $PATH:/opt/bible/bin

Este comando vai copiar para a variável de ambiente PATH o caminho /opt/bible/bin, e os executáveis dentro da pasta bin ficam acessíveis pelo terminar por estarem na PATH. 



Se executarmos o script (./set-path.sh ou sh set-path.sh) a variável PATH não foi alterada na shell em que nos encontramos, se digitares no terminal echo $PATH ele não retorna com /opt/bible/bin

Se abrires uma nova shell a variável já está actualizada. Se em vez de executares usares 

	source set-path.sh

O script é executado e as alterações são realizadas na shell actual. Isto é porque o source serve para actualizar ficheiros de configuração, e uma das actualizações são as variáveis de ambiente.


O comando da linha 10 apenas é executado se na linha 9 não houve nenhuma excepção. Isto permite executar comandos em cadeia e é alias algo que fazemos naturalmente quando removemos uma pasta, criamos uma nova e copiar conteudo de outro. 

Em técnicas de invasão um script shell pode fazer uma ligação ssh, comprimir arquivos, copiar tokens do Facebook, copiar os registos do keylogger.


### Algumas dicas

Em bash o "*" tem um significado próprio. Se executares um script que aceite * é preciso escapar com \ Por exemplo o redis-cli que é um cliente para a base de dados redis, executamos a aplicação redis-cli e entramos numa shell de acesso ao Redis. Para escrever um script que execute um comando nessa shell teria de ser

	redis-cli keys \*

Isto seria igual a entrar no redis-cli e depois escrever na shell keys *
