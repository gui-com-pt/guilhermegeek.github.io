---
title: DNS Spoofing
layout: post_entry
image: /media/php.jpg
description: Introdução á técnica DNS spoofing
categories:
 hacking
---

DNS spoofing também é conhecido como DNS cache poising ou envenenamento de cache DNS.

Um computador numa rede usa um servidor DNS fornecido pela rede local (um router) ou um provedor de internet (Vodafone, MEO, etc) para traduzir os domínios que acedemos em endereço IP. Esta técnica de penetração	 tem como objectivo alterar as DNS a que os utilizadores de uma rede se estão a ligar, para que os possamos redireccionar para um site falso ou tantas outras coisas como adulterar respostas de outros sites.

Vamos estudar o caso de um café com um Router instalado pela malta da PT.

Se forem aqueles da thomson com a 3!play como password de Administrador ou qualquer outro que não tenha sido alterada a password de fábrica e esteja disponível o acesso ao Router é fácil.

Senão há alternativas como rocurar por vulnerabilidades existentes para o router em questão e modelo (há ferramentas que fazem o trace ao router para obter esta informação). Um ataque brute-force também é resposta claro.

Com o acesso ao aparelho só precisamos de alterar o servidor DNS que ele consome. Esse servidor DNS vão ser o nosso PC ou um servidor que tenhamos que faça de proxy e lide com o tráfego da melhor forma que entender.


### dnsspoof

Há formas mais fáceis de realizar estes ataques, por exemplo se já estivermos dentro da rede mas não tenhamos acesso à administração do router (por exemplo crackamos a WEP apenas).

Depois explico como utilizar do dnsspoof, também tutoriais sobre isso é o que menos falta.