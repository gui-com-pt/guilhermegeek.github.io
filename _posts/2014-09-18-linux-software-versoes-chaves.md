---
title: Repositório de software
layout: post_entry
image: /media/php.jpg
excerpt: 
categories:
 ide software
---

Nós utilizamos gestor de pacotes como o apt e yum para instalar pacotes sem termos de fazer a instalação manual ./configure && make && make install. 

As distribuições de Linux mantêm repositórios públicos. Nestes repositórios eles disponibilizam software configurado, compilado e pronto para diferentes arquitecturas e versões da distribuição. Raramente encontras um software no repositório oficial do SO, em casos como o mono tens versões usadas há 4 ou 5 anos.

Agora começa a ser mais comum quem distribui o software disponibilizar um repositório público que podes adicionar e confirar pois são os proprietários do código a disponibilizar os pacotes. 

Mesmo assim ainda são poucas e há muitos softwares que são disponibilizado por outros terceiros que fazem esse trabalho por oferta.

### Chaves


Quando adicionamos um novo repositório ao gestor de software vamos permitir que esse distribuidor instale o código que quiser.

Uma medida de segurança implementada é a troca de chaves pública e privada. Quem pública estes softwares tem de disponibilizar uma chave pública. Essa chave pública é mostrada em mensagens de erro quando tentamos actualizar o Apt e ele tem um repositório sem chave confiada:

	W: GPG error: http://ppa.launchpad.net intrepid Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY C514AF8E4BA401C3

Neste exemplo temos de fazer download da chave

	gpg --keyserver pgpkeys.mit.edu --recv-key C514AF8E4BA401C3

E adicioná-la com apt-key add ficheiro-da-chave.key

	gpg -a --export C514AF8E4BA401C3 | apt-key add -