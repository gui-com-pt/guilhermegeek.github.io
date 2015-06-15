---
title: Repositório de software
layout: post_entry
image: /media/linux_logo.png
description: Linux - repositórios de software, chaves de encriptação e origens
categories:
 ide software
---

Em Linux utilizamos gestores de pacotes como o apt e yum para instalar software sem termos de fazer a instalação manual ./configure && make && make install. Eles instalam as dependências necessárias o que pode ser bom ou não, já dei por mim a perder horas por causa de dependências em falta.


As distribuições de Linux mantêm repositórios públicos. Nestes repositórios eles disponibilizam software configurado, compilado e pronto para diferentes arquitecturas e versões da distribuição. Raramente encontras um software no repositório oficial do SO, em casos como o mono tens versões usadas há 4 ou 5 anos.

Agora começa a ser mais comum quem distribui o software disponibilizar um repositório público que podes adicionar e confirar pois são os proprietários do código a disponibilizar os pacotes. 

Mesmo assim ainda são poucas e há muitos softwares que são disponibilizado por outros terceiros que fazem esse trabalho por oferta.
Por exemplo, a gblib6 que já é embarcada com o Debian Wheezy é inferior ao 2.13 já requirido por muitos softwares recentes. Eu utilizo a distruibuição Kali num portátil de desenvolvimento e bem sei a dor de cabeça que isto deu!

### Chaves


Quando adicionamos um novo repositório ao gestor de software vamos permitir que esse distribuidor instale o código que quiser.

Uma medida de segurança implementada é a troca de chaves pública e privada. Quem pública estes softwares tem de disponibilizar uma chave pública. Essa chave pública é mostrada em mensagens de erro quando tentamos actualizar o Apt e ele tem um repositório sem chave confiada:

	W: GPG error: http://ppa.launchpad.net intrepid Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY C514AF8E4BA401C3

Neste exemplo temos de fazer download da chave

	gpg --keyserver pgpkeys.mit.edu --recv-key C514AF8E4BA401C3

E adicioná-la com apt-key add ficheiro-da-chave.key

	gpg -a --export C514AF8E4BA401C3 | apt-key add -


### Origem

A origem do repositório é importante. São vários os exemplos de ataques feitos que distribuiram código através de software de terceiros. Com acesso ao servidor de distribuição podem distribuir código a todos que actualizem.