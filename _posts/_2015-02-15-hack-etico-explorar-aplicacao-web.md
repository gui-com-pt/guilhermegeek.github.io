---
title: Hack ético: explorar uma aplicação vulnerável!
layout: post_entry
image: /media/linux_logo.png
excerpt: Aprende a descubrir vulnerabilidades numa aplicação e como explorar as mesmas
categories:
 linux
---

Este artigo é direccionado ao hacking ético. Vamos testar vulnerabilidades existentes numa aplicação e explorar as mesmas. Para este efeito usamos uma aplicação desenvolvida exactamente para isto: [**Damn Vulnerable Web Application(DVWA)**](http://www.dvwa.co.uk/).

Como se trata de um artigo ético não vamos atacar nenhuma aplicação em produção. Em vez disso configura-mos um servidor e alojamos a aplicação.

Para alojar a aplicação podes instalá-la num servidor virtual no teu computador usando o **VirtualBox**. Basta criares um servidor com 400 MB. Também podes alugar uma VPS por 2 euros mas haverão certos testes que não convém realizares num servidor alugado porque certamente vais infrigir regras.


### Configurações ###

Vamos instalar uma distribuição Linux no servidor virtual. Como apenas testamos a aplicação e não o sistema operativo, ele é indiferente e Linux torna-se ideal por ser gratuíto.

Precisamos de instalar o php5, php5-mysql, mysql-server e um servidor web (nginx ou apache2 por exemplo).

Após configurado o servidor precisamos de configurar os dados de acesso à base de dados MySQL no ficheiro **config/config.inc.php**. Com os dados configurados acedes a http://localhost/setup.php e carrega no botão para configurar a base de dados e gerar as tabelas.

Ao longo destes testes vais tentar recolher e apagar informação da base de dados, por algumas vezes poderás ter de repetir estes passos para reinstalares a aplicação de novo.


### O que testar ###


